import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mt-1">
          Monitor stress levels and wellness insights.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="bg-[#1A1F2E] border border-gray-800 p-3 rounded-xl hover:border-blue-500 transition">
          <Bell size={18} />
        </button>

      </div>

    </div>
  );
}