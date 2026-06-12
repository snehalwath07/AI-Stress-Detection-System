import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addActivity } from "../utils/wellnessTracker";

export default function GratitudeJournal() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries =
      JSON.parse(
        localStorage.getItem("gratitudeEntries")
      ) || [];

    setEntries(savedEntries);
  }, []);

  const saveEntry = () => {
    if (!title.trim() || !entry.trim()) {
      alert(
        "Please enter both title and gratitude entry."
      );
      return;
    }

    const newEntry = {
      id: Date.now(),
      title,
      text: entry,
      date: new Date().toLocaleString(),
    };

    const updatedEntries = [
      newEntry,
      ...entries,
    ];

    setEntries(updatedEntries);

    localStorage.setItem(
      "gratitudeEntries",
      JSON.stringify(updatedEntries)
    );

    addActivity(
      "Gratitude Journal",
      15
    );

    setTitle("");
    setEntry("");

    alert(
      "✨ Gratitude Saved!\n\n🏆 +15 Wellness Points Earned!"
    );
  };

  const deleteEntry = (id) => {
    const updatedEntries =
      entries.filter(
        (item) => item.id !== id
      );

    setEntries(updatedEntries);

    localStorage.setItem(
      "gratitudeEntries",
      JSON.stringify(updatedEntries)
    );
  };

  return (
    <div className="p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-extrabold">
            😊 Gratitude Journal
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Record positive moments and build a
            happier mindset every day.
          </p>
        </div>

        <Link
          to="/stress-relief"
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          ⬅ Back
        </Link>

      </div>

      {/* Journal Form */}
      <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          🌟 Create New Entry
        </h2>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="🌈 Enter Title (Example: Family, Success, Happiness)"
          className="
          w-full
          p-4
          rounded-xl
          bg-white
          text-black
          border
          border-gray-300
          text-lg
          mb-4
          "
        />

        <textarea
          value={entry}
          onChange={(e) =>
            setEntry(e.target.value)
          }
          rows="6"
          placeholder="💛 Today I am grateful for..."
          className="
          w-full
          p-4
          rounded-xl
          bg-white
          text-black
          border
          border-gray-300
          text-lg
          "
        />

        <button
          onClick={saveEntry}
          className="mt-5 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 font-semibold"
        >
          💾 Save Gratitude Entry
        </button>

      </div>

      {/* History */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          📖 Gratitude History
        </h2>

        {entries.length === 0 ? (

          <div className="bg-[#1A1F2E] rounded-2xl p-8 border border-gray-800 text-center">

            <h3 className="text-2xl mb-3">
              🌱 Start Your Gratitude Journey
            </h3>

            <p className="text-gray-400">
              Your gratitude entries will appear here.
            </p>

          </div>

        ) : (

          entries.map((item) => (

            <div
              key={item.id}
              className="bg-[#1A1F2E] p-6 rounded-2xl border border-gray-800 mb-5"
            >

              <div className="flex justify-between items-start">

                <div className="w-full">

                  <p className="text-yellow-400 text-sm mb-2">
                    📅 {item.date}
                  </p>

                  <h3 className="text-2xl font-bold text-blue-400 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-relaxed">
                    💛 {item.text}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteEntry(item.id)
                  }
                  className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 ml-4"
                >
                  🗑
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}