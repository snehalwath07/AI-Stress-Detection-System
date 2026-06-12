export default function QuickActions() {
  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">
      <h2 className="text-xl font-semibold mb-4">
        ⚡ Quick Actions
      </h2>

      <div className="flex flex-col gap-3">
        <button className="bg-blue-500 p-3 rounded-xl">
          Start Assessment
        </button>

        <button className="bg-green-500 p-3 rounded-xl">
          View Predictions
        </button>
      </div>
    </div>
  );
}