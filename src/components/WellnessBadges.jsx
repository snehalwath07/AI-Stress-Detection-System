import { useEffect, useState } from "react";

export default function WellnessBadges() {
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

  if (!latest) {
    return null;
  }

  const badges = [];

  if (latest.sleep >= 7)
    badges.push("🏆 Healthy Sleeper");

  if (latest.water >= 2)
    badges.push("💧 Hydration Hero");

  if (latest.exercise >= 1)
    badges.push("🏃 Fitness Champion");

  if (latest.mood >= 4)
    badges.push("😊 Mood Master");

  if (latest.social >= 7)
    badges.push("🤝 Social Star");

  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        🏅 Wellness Achievements
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {badges.length === 0 ? (
          <p>No achievements unlocked yet.</p>
        ) : (
          badges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#111827] p-3 rounded-xl"
            >
              {badge}
            </div>
          ))
        )}

      </div>

    </div>
  );
}