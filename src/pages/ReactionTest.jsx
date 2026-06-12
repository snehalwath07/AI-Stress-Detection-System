import { useState } from "react";
import { Link } from "react-router-dom";
import { addActivity } from "../utils/wellnessTracker";

export default function ReactionTest() {
  const [message, setMessage] = useState(
    "Press Start to Begin"
  );

  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const startTest = () => {
    setStarted(true);
    setReady(false);

    setMessage("⏳ Wait for Green...");

    const delay =
      Math.random() * 3000 + 2000;

    setTimeout(() => {
      setReady(true);

      setMessage("🟢 CLICK NOW!");

      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {

    if (started && !ready) {
      setMessage(
        "❌ Too Early! Wait for Green."
      );

      setStarted(false);
      return;
    }

    if (!ready) return;

    const reactionMs =
      Date.now() - startTime;

    const reactionSec =
      (reactionMs / 1000).toFixed(2);

    let feedback = "";

    if (reactionMs < 300) {
      feedback =
        "🔥 Excellent Reflexes!";
    } else if (reactionMs < 700) {
      feedback =
        "🙂 Good Reaction!";
    } else {
      feedback =
        "🐢 Needs Improvement";
    }

    addActivity(
      "Reaction Test",
      15
    );

    setMessage(
      `⚡ ${reactionSec} sec\n${feedback}\n\n🏆 +15 Wellness Points`
    );

    alert(
      "🎉 Reaction Test Completed!\n\n+15 Wellness Points Earned!"
    );

    setReady(false);
    setStarted(false);
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          ⚡ Reaction Test
        </h1>

        <Link
          to="/stress-relief"
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          ⬅ Back
        </Link>

      </div>

      <div
        onClick={handleClick}
        className={`h-72 rounded-2xl flex items-center justify-center text-3xl font-bold cursor-pointer text-center whitespace-pre-line
        ${
          ready
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {message}
      </div>

      {!started && (
        <button
          onClick={startTest}
          className="mt-6 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          ▶ Start Test
        </button>
      )}

    </div>
  );
}