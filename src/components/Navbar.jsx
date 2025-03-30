import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-indigo-700 dark:from-gray-800 dark:to-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-700 dark:text-blue-400 tracking-wide">
        Work<span className="text-yellow-400">Sphere</span>
      </Link>
      
        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" text="Home" />
          <NavLink to="/dashboard" text="Dashboard" />
          <NavLink to="/employees" text="Employees" />
        </div>

        {/* Dark Mode Toggle */}
        <button
          className="text-white text-xl cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

// Reusable Link Component
function NavLink({ to, text }) {
  return (
    <Link to={to} className="text-white text-lg font-medium hover:text-gray-300 transition">
      {text}
    </Link>
  );
}
