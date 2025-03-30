import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const totalEmployees = employees.length;

  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const roleCounts = employees.reduce((acc, emp) => {
    acc[emp.role] = (acc[emp.role] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Employees" value={totalEmployees} color="bg-blue-500" />
        <StatCard title="Departments" value={Object.keys(departmentCounts).length} color="bg-green-500" />
        <StatCard title="Roles" value={Object.keys(roleCounts).length} color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Employees per Department">
          <PieChart data={departmentCounts} />
        </ChartCard>
        <ChartCard title="Employees per Role">
          <BarChart data={roleCounts} />
        </ChartCard>
      </div>

      <div className="mt-8">
        <Link to="/employees" className="px-6 py-3 bg-blue-600 dark:bg-blue-800 text-white rounded shadow hover:bg-blue-700">
          Manage Employees
        </Link>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`p-6 ${color} text-white shadow-lg rounded-lg text-center transform hover:scale-105 transition`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
      {children}
    </div>
  );
}

function PieChart({ data }) {
  return (
    <Pie
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            label: "Employees",
            data: Object.values(data),
            backgroundColor: ["#1E3A8A", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
          },
        ],
      }}
    />
  );
}

function BarChart({ data }) {
  return (
    <Bar
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            label: "Employees",
            data: Object.values(data),
            backgroundColor: "#4F46E5",
          },
        ],
      }}
      options={{ responsive: true }}
    />
  );
}
