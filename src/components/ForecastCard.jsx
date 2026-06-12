export default function ForecastCard() {
  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-5">
        🔮 Forecast
      </h2>

      <p className="text-5xl font-bold text-blue-400">
        73%
      </p>

      <p className="text-gray-400 mt-3">
        Predicted stress level within next 7 days.
      </p>

      <div className="mt-6 h-3 bg-gray-700 rounded-full">
        <div className="h-3 bg-blue-500 rounded-full w-3/4"></div>
      </div>

    </div>
  );
}