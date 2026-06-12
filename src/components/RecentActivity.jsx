import { useEffect, useState } from "react";

export default function RecentActivity() {
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

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        📋 Recent Activity
      </h2>

      {!latest ? (
        <p className="text-gray-400">
          No activity found.
        </p>
      ) : (
        <div className="space-y-3">

          <p>
            <strong>Stress Level:</strong>{" "}
            {latest.stress_level}
          </p>

          <p>
            <strong>Sleep:</strong>{" "}
            {latest.sleep} hrs
          </p>

          <p>
            <strong>Work:</strong>{" "}
            {latest.work} hrs
          </p>

          <p>
            <strong>Mood:</strong>{" "}
            {latest.mood}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {latest.date}
          </p>

        </div>
      )}

    </div>
  );
}