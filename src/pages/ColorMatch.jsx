import { useState } from "react";
import { Link } from "react-router-dom";
import { addActivity } from "../utils/wellnessTracker";

export default function ColorMatch() {
  const [selectedColor, setSelectedColor] =
    useState(null);

  const colors = [
    {
      name: "Blue",
      emoji: "🟦",
      bg: "bg-blue-500",
      title: "Calmness & Peace",
      mood: "Stress Relief: 95%",
      affirmation:
        "✨ I am calm, safe, and at peace.",
      message:
        "Blue encourages relaxation and mental clarity.",
    },

    {
      name: "Green",
      emoji: "🟩",
      bg: "bg-green-500",
      title: "Balance & Growth",
      mood: "Stress Relief: 90%",
      affirmation:
        "🌱 I grow stronger every day.",
      message:
        "Green promotes harmony, balance, and healing.",
    },

    {
      name: "Purple",
      emoji: "🟪",
      bg: "bg-purple-500",
      title: "Relaxation & Creativity",
      mood: "Stress Relief: 88%",
      affirmation:
        "🧘 My mind is relaxed and creative.",
      message:
        "Purple inspires imagination and inner peace.",
    },

    {
      name: "Yellow",
      emoji: "🟨",
      bg: "bg-yellow-400",
      title: "Happiness & Positivity",
      mood: "Stress Relief: 85%",
      affirmation:
        "☀️ I choose positivity and joy.",
      message:
        "Yellow boosts optimism and emotional energy.",
    },

    {
      name: "Pink",
      emoji: "🩷",
      bg: "bg-pink-500",
      title: "Love & Kindness",
      mood: "Stress Relief: 92%",
      affirmation:
        "💖 I deserve love and kindness.",
      message:
        "Pink creates feelings of warmth and compassion.",
    },

    {
      name: "Orange",
      emoji: "🟧",
      bg: "bg-orange-500",
      title: "Confidence & Energy",
      mood: "Stress Relief: 80%",
      affirmation:
        "🔥 I am confident and capable.",
      message:
        "Orange encourages motivation and enthusiasm.",
    },
  ];

  const completeSession = () => {
    addActivity(
      "Color Therapy",
      10
    );

    alert(
      "🎨 Color Therapy Completed!\n\n🏆 +10 Wellness Points Earned!"
    );
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-5xl font-extrabold">
            🎨 Color Therapy
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Select a color and explore its wellness benefits.
          </p>

        </div>

        <Link
          to="/stress-relief"
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          ⬅ Back
        </Link>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {colors.map((color) => (

          <div
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`
              ${color.bg}
              rounded-2xl
              h-40
              cursor-pointer
              flex
              flex-col
              items-center
              justify-center
              hover:scale-105
              transition
              shadow-lg
            `}
          >

            <span className="text-5xl">
              {color.emoji}
            </span>

            <h3 className="text-xl font-bold text-black mt-3">
              {color.name}
            </h3>

          </div>

        ))}

      </div>

      {selectedColor && (

        <div className="mt-10 rounded-2xl border border-gray-800 bg-[#1A1F2E] p-8">

          <h2 className="text-4xl font-bold mb-4">
            {selectedColor.emoji} {selectedColor.title}
          </h2>

          <p className="text-xl text-green-400 mb-4">
            {selectedColor.mood}
          </p>

          <p className="text-xl text-gray-300 mb-6">
            {selectedColor.message}
          </p>

          <div className="bg-[#111827] rounded-xl p-6 border border-gray-700 mb-6">

            <h3 className="text-2xl font-semibold mb-3">
              🌈 Daily Affirmation
            </h3>

            <p className="text-2xl text-yellow-300">
              {selectedColor.affirmation}
            </p>

          </div>

          <button
            onClick={completeSession}
            className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700"
          >
            ✅ Complete Session (+10 Points)
          </button>

        </div>

      )}

    </div>
  );
}