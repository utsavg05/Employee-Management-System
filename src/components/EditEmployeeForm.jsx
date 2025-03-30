import { useState } from "react";

export default function EditEmployeeForm({ employee, onUpdate, onClose }) {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedEmployee);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h3 className="text-lg font-bold mb-2">Edit Employee</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={updatedEmployee.name} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="text" name="role" value={updatedEmployee.role} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="text" name="department" value={updatedEmployee.department} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="email" name="email" value={updatedEmployee.email} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
