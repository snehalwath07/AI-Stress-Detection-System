export default function StressGauge() {
  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-5">
        🎯 Stress Gauge
      </h2>

      <div className="flex flex-col items-center">

        <div className="w-40 h-40 rounded-full border-8 border-yellow-500 flex items-center justify-center">

          <div className="text-center">

            <p className="text-5xl font-bold">
              68
            </p>

            <p className="text-gray-400">
              Moderate
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}