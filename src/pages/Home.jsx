import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-6 transition-colors bg-white dark:bg-gray-900">
            <h1 className="text-5xl font-semibold mb-2 text-gray-800 dark:text-white">
                Welcome to <span className="text-6xl font-bold mb-4 text-gray-800 dark:text-white">WorkSphere</span>
            </h1>

            <p className="max-w-[60%] text-xl text-gray-600 dark:text-gray-300 mt-1 italic">
            Empower your team with seamless employee management. From hiring to performance tracking, WorkSphere keeps everything organized in one smart, efficient platform.
            </p>

            <Link
                to="/dashboard"
                className="px-6 py-3 mt-4 bg-blue-600 dark:bg-blue-500 text-white rounded shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
                Go to Dashboard
            </Link>
        </div>

    );
}
