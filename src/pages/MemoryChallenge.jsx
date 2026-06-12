import { useState } from "react";
import { Link } from "react-router-dom";
import { addActivity } from "../utils/wellnessTracker";

export default function MemoryChallenge() {
  const [displayNumber, setDisplayNumber] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const startGame = () => {
    const randomNum =
      Math.floor(100000 + Math.random() * 900000);

    setDisplayNumber(randomNum.toString());
    setCorrectAnswer(randomNum.toString());

    setGuess("");
    setResult("");

    setTimeout(() => {
      setDisplayNumber("❓");
    }, 1000);
  };

  const checkAnswer = () => {
    if (guess === correctAnswer) {

      setResult(
        "🎉 Correct! +20 Wellness Points"
      );

      setScore(score + 1);

      addActivity(
        "Memory Challenge",
        20
      );

      alert(
        "🎉 Memory Challenge Completed!\n\n+20 Wellness Points Earned!"
      );

    } else {

      setResult(
        `❌ Wrong! Correct Answer: ${correctAnswer}`
      );

    }
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          🧠 Memory Challenge
        </h1>

        <Link
          to="/stress-relief"
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          ⬅ Back
        </Link>

      </div>

      <div className="text-center">

        <button
          onClick={startGame}
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          ▶ Start Game
        </button>

        <h2 className="text-7xl mt-10 font-bold">
          {displayNumber}
        </h2>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter Number"
          className="
            mt-10
            p-4
            rounded-xl
            bg-white
            text-black
            border
            border-gray-300
            w-64
            text-center
            text-xl
          "
        />

        <br />

        <button
          onClick={checkAnswer}
          className="mt-6 bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Submit Answer
        </button>

        <p className="mt-8 text-3xl font-bold">
          {result}
        </p>

        <div className="mt-8 bg-[#1A1F2E] p-4 rounded-xl inline-block">

          <p className="text-gray-400">
            Score
          </p>

          <p className="text-4xl font-bold text-yellow-400">
            {score}
          </p>

        </div>

      </div>

    </div>
  );
}