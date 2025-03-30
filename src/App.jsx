import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  return (
    <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
}
