import { useEffect, useState } from "react";

export default function StressForecast() {
  const [forecast, setForecast] = useState("Loading...");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/history"
        );

        const data = await response.json();

        if (data.length === 0) {
          setForecast("No Data");
          return;
        }

        const recent = data.slice(-5);

        let high = 0;
        let moderate = 0;
        let low = 0;

        recent.forEach((item) => {
          if (item.stress_level === "High") high++;
          else if (item.stress_level === "Moderate") moderate++;
          else low++;
        });

        if (high >= moderate && high >= low)
          setForecast("High");

        else if (moderate >= high && moderate >= low)
          setForecast("Moderate");

        else
          setForecast("Low");

      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        📈 Stress Forecast
      </h2>

      <p className="text-gray-400">
        Predicted Next Stress Level
      </p>

      <p className="text-5xl font-bold text-purple-400 mt-4">
        {forecast}
      </p>

    </div>
  );
}