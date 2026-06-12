import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { predictStress } from "../api/stressApi";

export default function Assessment() {
  const navigate = useNavigate();

const [sleep, setSleep] = useState("");

const [work, setWork] = useState("");
const [water, setWater] = useState("");
const [screen, setScreen] = useState("");
const [exercise, setExercise] = useState("");
const [mood, setMood] = useState("");
const [social, setSocial] = useState("");

  const [result, setResult] = useState(null);

  useEffect(() => {
  const clearOnRefresh = () => {
    localStorage.removeItem("sleep");
    localStorage.removeItem("work");
    localStorage.removeItem("water");
    localStorage.removeItem("screen");
    localStorage.removeItem("exercise");
    localStorage.removeItem("mood");
    localStorage.removeItem("social");
  };

  window.addEventListener("beforeunload", clearOnRefresh);

  return () => {
    window.removeEventListener(
      "beforeunload",
      clearOnRefresh
    );
  };
}, []);

  const handleSubmit = async () => {

    if (
      !sleep ||
      !work ||
      !water ||
      !screen ||
      !exercise ||
      !mood ||
      !social
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      const data = await predictStress({
        sleep,
        work,
        water,
        screen,
        exercise,
        mood,
        social,
      });

      setResult(data);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

    } catch (error) {
      console.error(error);
      alert("Prediction failed.");
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Stress Assessment
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label>Sleep Hours (0-24)</label>
          <input
            type="number"
            min="0"
            max="24"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

        <div>
          <label>Working Hours (0-24)</label>
          <input
            type="number"
            min="0"
            max="24"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

        <div>
          <label>Screen Time (0-24)</label>
          <input
            type="number"
            min="0"
            max="24"
            value={screen}
            onChange={(e) => setScreen(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

        <div>
          <label>Water Intake (0-10 Litres)</label>
          <input
            type="number"
            min="0"
            max="10"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

        <div>
          <label>Exercise Hours (0-24)</label>
          <input
            type="number"
            min="0"
            max="24"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

        <div>
          <label>Mood Score (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

        <div>
          <label>Social Interaction Score (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
            className="w-full mt-2 p-3 rounded-xl bg-[#1A1F2E] text-white border border-gray-700 outline-none"
          />
        </div>

      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Analyze Stress
      </button>

      {result && (
        <div className="mt-8 bg-[#1A1F2E] p-6 rounded-xl">

          <h2 className="text-2xl font-bold">
            Prediction Result
          </h2>

          <p className="text-5xl text-yellow-400 mt-4">
            AI Model Prediction
          </p>

          <p className="mt-4 text-xl">
            Stress Level{" "}
            <span className="font-bold text-red-400">
              {result.stress_level}
            </span>
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Recommendations
          </h3>

          <ul className="mt-3 list-disc pl-6 space-y-2">
            {result.recommendations?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}