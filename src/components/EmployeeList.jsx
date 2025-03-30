import { useState, useEffect } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import EditEmployeeForm from "./EditEmployeeForm";
import { employees as initialmployees } from "../data";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  // Load employees from Local Storage when the component mounts
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));

    if (storedEmployees && storedEmployees.length > 0) {
      setEmployees(storedEmployees)
    } else {
      setEmployees(initialmployees)
      localStorage.setItem("employees", JSON.stringify(initialmployees)); 
    }
  }, []);

  // Save employees to Local Storage whenever employees state changes
  useEffect(() => {
    if(employees.length > 0)
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, { id: employees.length + 1, ...newEmployee }];
    setEmployees(updatedEmployees);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp));
    setEmployees(updatedEmployees);
    setEditingEmployee(null);
  };

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      const updatedEmployees = employees.filter(emp => emp.id !== id);

      const reindexedEmployees = updatedEmployees.map((emp, idx) =>(
        {...emp, id:idx + 1}
      ))
      setEmployees(reindexedEmployees);
    }
  }

  // 🔍 Filter employees based on search query
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Employee List</h2>
      
      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by Name, Role, or Department"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      />

      <AddEmployeeForm onAdd={addEmployee} />

      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-4">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
            <th className="border p-2 dark:border-gray-700">ID</th>
            <th className="border p-2 dark:border-gray-700">Name</th>
            <th className="border p-2 dark:border-gray-700">Role</th>
            <th className="border p-2 dark:border-gray-700">Department</th>
            <th className="border p-2 dark:border-gray-700">Email</th>
            <th className="border p-2 dark:border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <tr key={emp.id} className="text-center border dark:border-gray-700 text-gray-900 dark:text-white">
                <td className="p-2">{emp.id}</td>
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.role}</td>
                <td className="p-2">{emp.department}</td>
                <td className="p-2">{emp.email}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => setEditingEmployee(emp)}
                    className="cursor-pointer bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-1 rounded transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="cursor-pointer bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4 text-gray-500 dark:text-gray-400">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editingEmployee && <EditEmployeeForm employee={editingEmployee} onUpdate={updateEmployee} onClose={() => setEditingEmployee(null)} />}
    </div>
  );
}
