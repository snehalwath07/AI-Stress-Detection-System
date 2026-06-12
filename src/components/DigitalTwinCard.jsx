import { useEffect, useState } from "react";


export default function DigitalTwin() {
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

  const generateTwinAdvice = () => {
    if (!latest)
      return "No assessment data available.";

    let advice = [];

    if (latest.sleep < 7)
      advice.push(
        "Increase sleep by 1-2 hours."
      );

    if (latest.work > 8)
      advice.push(
        "Reduce continuous working hours."
      );

    if (latest.screen > 8)
      advice.push(
        "Reduce screen exposure."
      );

    if (latest.exercise < 1)
      advice.push(
        "Add daily exercise."
      );

    if (latest.mood <= 2)
      advice.push(
        "Focus on emotional wellbeing."
      );

    if (advice.length === 0)
      return "Excellent wellness pattern detected. Continue your healthy lifestyle.";

    return advice.join(" ");
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        🧠 AI Digital Twin
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {/* Avatar Card */}
        <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800">

          <div className="text-8xl text-center">
            🧠
          </div>

          <h2 className="text-center text-2xl font-bold mt-4">
            Your Digital Twin
          </h2>

          <p className="text-center text-gray-400 mt-2">
            AI Wellness Model
          </p>

        </div>

        {/* Wellness Summary */}
        <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-4">
            📊 Wellness Summary
          </h2>

          <p className="text-gray-400">
            Current Stress
          </p>

          <p className="text-3xl font-bold text-yellow-400">
            {latest?.stress_level || "--"}
          </p>

          <p className="text-gray-400 mt-4">
            Wellness Score
          </p>

          <p className="text-3xl font-bold text-blue-400">
            {wellnessScore}/100
          </p>

        </div>

        {/* Prediction */}
        <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-4">
            🔮 AI Prediction
          </h2>

          <p className="text-gray-400">
            Future Risk
          </p>

          <p className="text-3xl font-bold text-red-400">
            {latest?.stress_level || "--"}
          </p>

          <p className="mt-4 text-gray-400">
            Based on current lifestyle patterns.
          </p>

        </div>

      </div>

      {/* AI Advice */}
      <div className="mt-8 bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800">

        <h2 className="text-2xl font-semibold mb-4">
          💡 Digital Twin Advice
        </h2>

        <p className="text-lg leading-relaxed">
          {generateTwinAdvice()}
        </p>

      </div>

    </div>
  );
}