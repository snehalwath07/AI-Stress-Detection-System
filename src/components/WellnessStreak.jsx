import { useEffect, useState } from "react";

export default function WellnessStreak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/history"
        );

        const data = await response.json();

        if (!data.length) return;

        let count = 0;

        for (let i = data.length - 1; i >= 0; i--) {
          if (
            data[i].stress_level === "Low" ||
            data[i].stress_level === "Moderate"
          ) {
            count++;
          } else {
            break;
          }
        }

        setStreak(count);

      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        📅 Wellness Streak
      </h2>

      <p className="text-gray-400">
        Current Streak
      </p>

      <p className="text-6xl font-bold text-orange-400 mt-3">
        {streak}
      </p>

      <p className="mt-3 text-lg">
        🔥 Keep going!
      </p>

    </div>
  );
}