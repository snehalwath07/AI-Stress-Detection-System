export default function SleepCard() {
  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-5">
        😴 Sleep Analysis
      </h2>

      <p className="text-5xl font-bold">
        5.5h
      </p>

      <p className="text-red-400 mt-3">
        Below Recommended
      </p>

      <div className="mt-5 h-2 bg-gray-700 rounded-full">
        <div className="h-2 bg-red-500 rounded-full w-2/3"></div>
      </div>

    </div>
  );
}