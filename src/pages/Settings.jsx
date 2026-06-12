import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        ⚙️ Settings
      </h1>

      {/* Theme Settings */}
      <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800 mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          🎨 Appearance
        </h2>

        <div className="flex items-center justify-between">

          <span>
            {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </span>

          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 rounded-full cursor-pointer transition duration-300 ${
              darkMode ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full mt-1 transition duration-300 ${
                darkMode ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </div>

        </div>

      </div>

      {/* Account Section */}
      <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800 mb-6">

        <h2 className="text-2xl font-semibold mb-4">
          👤 Account Information
        </h2>

        <div className="space-y-3">

          <p>
            <span className="text-gray-400">
              Email:
            </span>{" "}
            <span className="text-blue-400">
              {user?.email || "Not Available"}
            </span>
          </p>

          <p>
            <span className="text-gray-400">
              Status:
            </span>{" "}
            <span className="text-green-400">
              Logged In
            </span>
          </p>

        </div>

        <button
          onClick={async () => {
            await signOut(auth);
            navigate("/");
          }}
          className="mt-6 bg-red-600 px-5 py-2 rounded-xl hover:bg-red-700"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}