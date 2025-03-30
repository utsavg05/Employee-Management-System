import { useState } from "react";

export default function AddEmployeeForm({ onAdd }) {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.role || !employee.department || !employee.email) {
      alert("All fields are required!");
      return;
    }
    onAdd(employee);
    setEmployee({ name: "", role: "", department: "", email: "" }); // Reset form
  };

  return (
    <form className="p-4 border rounded shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors" onSubmit={handleSubmit}>
  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Add New Employee</h3>
  
  <input 
    type="text" 
    name="name" 
    placeholder="Name" 
    value={employee.name} 
    onChange={handleChange} 
    className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition"
  />
  
  <input 
    type="text" 
    name="role" 
    placeholder="Role" 
    value={employee.role} 
    onChange={handleChange} 
    className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition"
  />
  
  <input 
    type="text" 
    name="department" 
    placeholder="Department" 
    value={employee.department} 
    onChange={handleChange} 
    className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition"
  />
  
  <input 
    type="email" 
    name="email" 
    placeholder="Email" 
    value={employee.email} 
    onChange={handleChange} 
    className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition"
  />
  
  <button 
    type="submit" 
    className="cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded transition"
  >
    Add Employee
  </button>
</form>

  );
}
