import { useEffect, useState } from "react";

export default function AIInsight() {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/latest"
        );

        const data = await response.json();

        setLatest(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatest();
  }, []);

  const calculateWellnessScore = () => {
    if (!latest) return 0;

    let score = 100;

    if (latest.sleep < 7) score -= 20;
    if (latest.work > 8) score -= 20;
    if (latest.screen > 8) score -= 20;
    if (latest.water < 2) score -= 10;
    if (latest.exercise < 1) score -= 10;
    if (latest.mood <= 2) score -= 10;
    if (latest.social <= 3) score -= 10;

    return Math.max(score, 0);
  };

  const wellnessScore = calculateWellnessScore();

  const getInsight = () => {
    if (wellnessScore >= 80) {
      return "Excellent wellness pattern detected. Keep maintaining your healthy habits.";
    }

    if (wellnessScore >= 60) {
      return "Your wellness is stable, but there is room for improvement in daily habits.";
    }

    if (wellnessScore >= 40) {
      return "Moderate wellness risk detected. Focus on sleep, exercise and stress management.";
    }

    return "High wellness risk detected. Immediate lifestyle improvements are recommended.";
  };

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-5">
        🤖 AI Insight
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-gray-400 text-sm">
            AI Wellness Score
          </p>

          <p className="text-5xl font-bold text-blue-400">
            {wellnessScore}
          </p>

          <p className="text-gray-400">
            out of 100
          </p>
        </div>

        <div className="bg-[#111827] p-4 rounded-xl">
          <p>
            {getInsight()}
          </p>
        </div>

        <div className="text-sm text-gray-400">
          Based on sleep, work, screen time,
          water intake, exercise, mood and
          social interaction patterns.
        </div>

      </div>

    </div>
  );
}