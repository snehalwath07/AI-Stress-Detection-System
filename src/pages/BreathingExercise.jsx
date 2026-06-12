import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addActivity } from "../utils/wellnessTracker";

export default function BreathingExercise() {
  const [phase, setPhase] = useState("Ready");
  const [count, setCount] = useState(4);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;

        if (phase === "Breathe In") {
          setPhase("Hold");
          return 4;
        }

        if (phase === "Hold") {
          setPhase("Breathe Out");
          return 4;
        }

        if (phase === "Breathe Out") {
          setPhase("Breathe In");
          return 4;
        }

        return 4;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, running]);

  const startExercise = () => {
    setRunning(true);
    setPhase("Breathe In");
    setCount(4);
  };

  const stopExercise = () => {
    if (running) {
      addActivity("Breathing Exercise", 10);

      alert(
        "🎉 Great Job!\n\n+10 Wellness Points Earned!"
      );
    }

    setRunning(false);
    setPhase("Ready");
    setCount(4);
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          🫁 Breathing Exercise
        </h1>

        <Link
          to="/stress-relief"
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          ⬅ Back
        </Link>

      </div>

      <div className="flex flex-col items-center">

        <div
          className={`
            rounded-full
            bg-blue-500
            transition-all
            duration-[4000ms]
            shadow-2xl
            ${
              phase === "Breathe In"
                ? "w-80 h-80"
                : phase === "Breathe Out"
                ? "w-40 h-40"
                : "w-60 h-60"
            }
          `}
        />

        <h2 className="text-5xl font-bold mt-10">
          {phase}
        </h2>

        {running && (
          <p className="text-7xl font-bold mt-4 text-blue-400">
            {count}
          </p>
        )}

        <p className="text-gray-400 mt-6 text-center text-lg">
          Match your breathing with the circle movement.
        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={startExercise}
            className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            ▶ Start
          </button>

          <button
            onClick={stopExercise}
            className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700 transition"
          >
            ⏹ Stop & Complete
          </button>

        </div>

      </div>

    </div>
  );
}