import {
  LayoutDashboard,
  ClipboardList,
  Brain,
  TrendingUp,
  Bot,
  FileText,
  Settings,
  Gamepad2,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-72 min-h-screen bg-[#111827] border-r border-gray-800 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-400">
          🧠 Stress Prediction
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          AI Wellness Platform
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">

        <div className="space-y-2">

          {/* Assessment */}
<Link
  to="/assessment"
  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
    location.pathname === "/assessment"
      ? "bg-blue-600"
      : "hover:bg-[#1F2937]"
  }`}
>
            <ClipboardList size={20} />
            <span>Assessment</span>
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
              location.pathname === "/dashboard"
                ? "bg-blue-600"
                : "hover:bg-[#1F2937]"
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          {/* Digital Twin */}
          <Link
            to="/digital-twin"
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
              location.pathname === "/digital-twin"
                ? "bg-blue-600"
                : "hover:bg-[#1F2937]"
            }`}
          >
            <Brain size={20} />
            <span>Digital Twin</span>
          </Link>

        {/* Predictions */}
<Link
  to="/predictions"
  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
    location.pathname === "/predictions"
      ? "bg-blue-600"
      : "hover:bg-[#1F2937]"
  }`}
>
  <TrendingUp size={20} />
  <span>Predictions</span>
</Link>

          {/* AI Copilot */}
          <Link
            to="/copilot"
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
              location.pathname === "/copilot"
                ? "bg-blue-600"
                : "hover:bg-[#1F2937]"
            }`}
          >
            <Bot size={20} />
            <span>AI Copilot</span>
          </Link>

          {/* Reports */}
          <Link
            to="/reports"
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
              location.pathname === "/reports"
                ? "bg-blue-600"
                : "hover:bg-[#1F2937]"
            }`}
          >
            <FileText size={20} />
            <span>Reports</span>
          </Link>

          {/* Stress Relief Hub */}
<Link
  to="/stress-relief"
  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
    location.pathname === "/stress-relief"
      ? "bg-blue-600"
      : "hover:bg-[#1F2937]"
  }`}
>
  <Gamepad2 size={20} />
  <span>Stress Relief Hub</span>
</Link>

          {/* Settings */}
        <Link
  to="/settings"
  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
    location.pathname === "/settings"
      ? "bg-blue-600"
      : "hover:bg-[#1F2937]"
  }`}
>
  <Settings size={20} />
  <span>Settings</span>
</Link>

        </div>

      </div>

    </div>
  );
}