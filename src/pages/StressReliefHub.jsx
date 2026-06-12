import { Link } from "react-router-dom";
import {
  getScore,
  getHistory,
  getCompleted,
  getBadge,
} from "../utils/wellnessTracker";

export default function StressReliefHub() {

  const score = getScore();
  const history = getHistory();
  const completed = getCompleted();

  const totalActivities = 6;

  const progress =
    Math.round(
      (completed.length / totalActivities) * 100
    ) || 0;

  const badge = getBadge(score);

  const hour = new Date().getHours();

  let recommendation = {
    title: "🫁 Breathing Exercise",
    description:
      "Perfect for reducing stress instantly.",
    path: "/breathing-exercise",
    bg: "from-green-600 to-teal-600",
  };

  if (hour >= 12 && hour < 17) {
    recommendation = {
      title: "🎯 Focus Timer",
      description:
        "Boost concentration and productivity.",
      path: "/focus-timer",
      bg: "from-orange-500 to-red-500",
    };
  }

  if (hour >= 17 && hour < 21) {
    recommendation = {
      title: "😊 Gratitude Journal",
      description:
        "Reflect positively on your day.",
      path: "/gratitude-journal",
      bg: "from-pink-500 to-purple-600",
    };
  }

  if (hour >= 21 || hour < 5) {
    recommendation = {
      title: "🎨 Color Therapy",
      description:
        "Relax before sleep.",
      path: "/color-match",
      bg: "from-indigo-600 to-purple-800",
    };
  }

  const activities = [
    {
      title: "🫁 Breathing Exercise",
      description: "Relax your mind with guided breathing.",
      path: "/breathing-exercise",
    },
    {
      title: "⚡ Reaction Test",
      description: "Measure your reaction speed.",
      path: "/reaction-test",
    },
    {
      title: "🧠 Memory Challenge",
      description: "Boost memory and concentration.",
      path: "/memory-challenge",
    },
    {
      title: "🎨 Color Therapy",
      description: "Explore calming colors and affirmations.",
      path: "/color-match",
    },
    {
      title: "🎯 Focus Timer",
      description: "Stay productive using focus sessions.",
      path: "/focus-timer",
    },
    {
      title: "😊 Gratitude Journal",
      description: "Write positive thoughts daily.",
      path: "/gratitude-journal",
    },
  ];

  return (
    <div className="p-8">

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl mb-8 shadow-lg">

        <h1 className="text-5xl font-bold mb-3">
          🌿 Stress Relief Hub
        </h1>

        <p className="text-xl text-gray-100">
          Improve focus, reduce stress, and track your wellness journey.
        </p>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="bg-[#1A1F2E] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-3xl font-bold text-blue-400">
            {score}
          </h3>
          <p className="text-gray-400">
            Wellness Score
          </p>
        </div>

        <div className="bg-[#1A1F2E] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-3xl font-bold text-green-400">
            {progress}%
          </h3>
          <p className="text-gray-400">
            Progress
          </p>
        </div>

        <div className="bg-[#1A1F2E] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-yellow-400">
            {badge}
          </h3>
          <p className="text-gray-400">
            Badge
          </p>
        </div>

        <div className="bg-[#1A1F2E] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-3xl font-bold text-purple-400">
            {completed.length}
          </h3>
          <p className="text-gray-400">
            Completed
          </p>
        </div>

      </div>

      {/* Progress */}
      <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          📈 Wellness Progress
        </h2>

        <div className="w-full bg-gray-700 rounded-full h-5">

          <div
            className="bg-green-500 h-5 rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="mt-4 text-gray-300">
          {completed.length} of {totalActivities}
          activities completed
        </p>

      </div>

      {/* Daily Challenge */}
      <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800 mb-8">

        <h2 className="text-2xl font-bold mb-3">
          🎯 Daily Challenge
        </h2>

        <p className="text-gray-300">
          Complete any 3 activities today to earn extra wellness points.
        </p>

      </div>

      {/* Recommendation */}
      <div
        className={`bg-gradient-to-r ${recommendation.bg} p-6 rounded-2xl mb-8`}
      >

        <h2 className="text-3xl font-bold mb-3">
          ⭐ Recommended Right Now
        </h2>

        <h3 className="text-2xl mb-2">
          {recommendation.title}
        </h3>

        <p className="mb-4">
          {recommendation.description}
        </p>

        <Link
          to={recommendation.path}
          className="bg-white text-black px-5 py-2 rounded-xl font-semibold"
        >
          Start Now →
        </Link>

      </div>

      {/* Activities */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="
              bg-[#1A1F2E]
              rounded-2xl
              p-6
              border
              border-gray-800
              hover:border-blue-500
              hover:scale-105
              transition
            "
          >

            <h2 className="text-2xl font-semibold mb-3">
              {activity.title}
            </h2>

            <p className="text-gray-400 mb-5">
              {activity.description}
            </p>

            <Link
              to={activity.path}
              className="bg-blue-600 px-4 py-2 rounded-xl inline-block"
            >
              Start Activity →
            </Link>

          </div>

        ))}

      </div>

      {/* Recent Activity */}
      <div className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800">

        <h2 className="text-2xl font-bold mb-4">
          🕒 Recent Activity
        </h2>

        {history.length === 0 ? (

          <p className="text-gray-400">
            No activity completed yet.
          </p>

        ) : (

          history.slice(0, 5).map((item, index) => (

            <div
              key={index}
              className="border-b border-gray-700 py-3"
            >

              <p className="font-semibold">
                {item.activity}
              </p>

              <p className="text-green-400">
                +{item.points} points
              </p>

              <p className="text-gray-500 text-sm">
                {item.date}
              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}