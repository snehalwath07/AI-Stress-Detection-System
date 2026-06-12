export default function NotificationPanel() {
  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-5">
        🔔 Notifications
      </h2>

      <div className="space-y-4">

        <div className="bg-[#111827] p-3 rounded-xl">
          Sleep below target for 3 days.
        </div>

        <div className="bg-[#111827] p-3 rounded-xl">
          Stress increased by 12%.
        </div>

        <div className="bg-[#111827] p-3 rounded-xl">
          Daily assessment pending.
        </div>

      </div>

    </div>
  );
}