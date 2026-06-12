import { useState } from "react";
import { useEffect } from "react";

export default function Copilot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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

  const askAI = () => {
    const q = question.toLowerCase();

    if (
  q.includes("my stress") ||
  q.includes("my health") ||
  q.includes("my report")
) {

  if (!latest) {
    setAnswer("No assessment data found.");
    return;
  }

  let advice = [];

  if (latest.sleep < 7)
    advice.push("Increase sleep duration.");

  if (latest.work > 8)
    advice.push("Reduce working hours.");

  if (latest.screen > 8)
    advice.push("Reduce screen time.");

  if (latest.mood <= 2)
    advice.push("Focus on mood improvement.");

  if (latest.social <= 3)
    advice.push("Increase social interaction.");

  setAnswer(
    `Based on your latest assessment (${latest.stress_level} stress): ${advice.join(" ")}`
  );

  return;
}

    // Stress + Sleep
    if (q.includes("sleep") && q.includes("stress")) {
      setAnswer(
        "Poor sleep and high stress are strongly connected. Aim for 7-9 hours of quality sleep, maintain a consistent bedtime, and avoid screens before sleeping."
      );
    }

    // Sleep
    else if (q.includes("sleep")) {
      setAnswer(
        "Adults should aim for 7-9 hours of sleep daily. Consistent sleep improves mood, concentration, immunity, and reduces stress."
      );
    }

    // Stress
    else if (q.includes("stress")) {
      setAnswer(
        "To reduce stress, focus on adequate sleep, regular exercise, hydration, healthy nutrition, and spending time with friends and family."
      );
    }

    // Work
    else if (
      q.includes("work") ||
      q.includes("working") ||
      q.includes("office")
    ) {
      setAnswer(
        "Long working hours can increase stress and burnout risk. Take short breaks every 60-90 minutes and maintain a healthy work-life balance."
      );
    }

    // Water
    else if (
      q.includes("water") ||
      q.includes("hydration")
    ) {
      setAnswer(
        "Most adults benefit from 2-3 litres of water daily. Proper hydration supports energy levels, concentration, and overall wellness."
      );
    }

    // Exercise
    else if (
      q.includes("exercise") ||
      q.includes("gym") ||
      q.includes("workout")
    ) {
      setAnswer(
        "Aim for at least 30 minutes of physical activity daily. Exercise releases endorphins that naturally help reduce stress."
      );
    }

    // Mood
    else if (
      q.includes("mood") ||
      q.includes("sad") ||
      q.includes("anxiety")
    ) {
      setAnswer(
        "Low mood can often improve with quality sleep, exercise, social interaction, and stress-management techniques like meditation."
      );
    }

    // Screen Time
    else if (
      q.includes("screen") ||
      q.includes("mobile") ||
      q.includes("phone")
    ) {
      setAnswer(
        "Excessive screen time may increase stress and affect sleep quality. Consider regular digital breaks and reducing screen use before bedtime."
      );
    }

    // Social Life
    else if (
      q.includes("friend") ||
      q.includes("social") ||
      q.includes("family")
    ) {
      setAnswer(
        "Healthy social connections can significantly reduce stress and improve emotional well-being."
      );
    }

    // Greeting
    else if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey")
    ) {
      setAnswer(
        "Hello! I'm your AI Wellness Copilot. Ask me about stress, sleep, exercise, hydration, mood, or wellness."
      );
    }

    // Default
    else {
      setAnswer(
        "I can help with stress management, sleep, exercise, hydration, mood improvement, screen time reduction, and overall wellness."
      );
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        🤖 AI Copilot
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a wellness question..."
        className="w-full h-40 p-4 rounded-xl bg-[#1A1F2E] border border-gray-700 text-white"
      />

      <button
        onClick={askAI}
        className="mt-4 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-6 bg-[#1A1F2E] p-6 rounded-xl border border-gray-700">
          <h2 className="font-bold text-lg mb-3">
            AI Response
          </h2>

          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}