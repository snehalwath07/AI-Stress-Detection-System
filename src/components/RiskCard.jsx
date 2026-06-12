import { useEffect, useState } from "react";

export default function RiskCard() {
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

  const calculateBurnoutRisk = () => {
    if (!latest) return 0;

    let risk = 0;

    if (latest.sleep < 6) risk += 30;
    if (latest.work > 8) risk += 30;
    if (latest.screen > 8) risk += 20;
    if (latest.mood <= 2) risk += 10;
    if (latest.social <= 3) risk += 10;

    return Math.min(risk, 100);
  };

  const burnoutRisk = calculateBurnoutRisk();

  const recoveryEstimate =
    burnoutRisk >= 70
      ? "7 Days"
      : burnoutRisk >= 40
      ? "4 Days"
      : "2 Days";

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-6">
        ⚠️ Risk Analysis
      </h2>

      <div className="space-y-6">

        <div>
          <p className="text-gray-400 text-sm">
            Current Stress
          </p>

          <p className="text-3xl font-bold text-yellow-400">
            {latest?.stress_level || "--"}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Burnout Risk
          </p>

          <p className="text-3xl font-bold text-red-400">
            {burnoutRisk}%
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Recovery Estimate
          </p>

          <p className="text-3xl font-bold text-green-400">
            {recoveryEstimate}
          </p>
        </div>

      </div>

    </div>
  );
}