import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { addActivity } from "../utils/wellnessTracker";

export default function FocusTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [secs, setSecs] = useState(0);

  const [seconds, setSeconds] = useState(60);

  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [alarmActive, setAlarmActive] = useState(false);

  const oscillatorRef = useRef(null);
  const audioContextRef = useRef(null);
  const rewardedRef = useRef(false);

  useEffect(() => {
    let timer;

    if (running && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0 && running) {
      setRunning(false);
      setCompleted(true);
      setAlarmActive(true);

      if (!rewardedRef.current) {
        rewardedRef.current = true;

        addActivity(
          "Focus Timer",
          25
        );

        alert(
          "🎉 Focus Session Completed!\n\n🏆 +25 Wellness Points Earned!"
        );
      }

      audioContextRef.current =
        new (window.AudioContext ||
          window.webkitAudioContext)();

      const oscillator =
        audioContextRef.current.createOscillator();

      oscillator.type = "square";

      oscillator.frequency.setValueAtTime(
        1000,
        audioContextRef.current.currentTime
      );

      oscillator.connect(
        audioContextRef.current.destination
      );

      oscillator.start();

      oscillatorRef.current = oscillator;
    }

    return () => clearInterval(timer);
  }, [running, seconds]);

  const setTimer = () => {
    const totalSeconds =
      hours * 3600 +
      minutes * 60 +
      secs;

    setSeconds(totalSeconds);

    setCompleted(false);
    rewardedRef.current = false;
  };

  const startTimer = () => {
    if (seconds > 0) {
      setRunning(true);
    }
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setCompleted(false);

    const totalSeconds =
      hours * 3600 +
      minutes * 60 +
      secs;

    setSeconds(totalSeconds);

    rewardedRef.current = false;

    stopAlarm();
  };

  const stopAlarm = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    setAlarmActive(false);
  };

  const formatTime = () => {
    const h = Math.floor(seconds / 3600);

    const m = Math.floor(
      (seconds % 3600) / 60
    );

    const s = seconds % 60;

    return `${h
      .toString()
      .padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          🎯 Focus Timer
        </h1>

        <Link
          to="/stress-relief"
          className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          ⬅ Back
        </Link>

      </div>

      <div className="text-center">

        <p className="text-gray-400 mb-8">
          Set your focus duration and stay
          productive without distractions.
        </p>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">

          <div>
            <label className="block mb-2">
              Hours
            </label>

            <input
              type="number"
              min="0"
              value={hours}
              onChange={(e) =>
                setHours(Number(e.target.value))
              }
              className="w-24 p-3 rounded-xl bg-white text-black text-center"
            />
          </div>

          <div>
            <label className="block mb-2">
              Minutes
            </label>

            <input
              type="number"
              min="0"
              max="59"
              value={minutes}
              onChange={(e) =>
                setMinutes(Number(e.target.value))
              }
              className="w-24 p-3 rounded-xl bg-white text-black text-center"
            />
          </div>

          <div>
            <label className="block mb-2">
              Seconds
            </label>

            <input
              type="number"
              min="0"
              max="59"
              value={secs}
              onChange={(e) =>
                setSecs(Number(e.target.value))
              }
              className="w-24 p-3 rounded-xl bg-white text-black text-center"
            />
          </div>

        </div>

        <button
          onClick={setTimer}
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 mb-8"
        >
          ⏱ Set Timer
        </button>

        <h2 className="text-7xl font-bold mb-8">
          {formatTime()}
        </h2>

        {completed && (
          <h3 className="text-3xl font-bold text-green-400 mb-6">
            🎉 Focus Session Complete!
            <br />
            🏆 +25 Wellness Points
          </h3>
        )}

        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={startTimer}
            className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700"
          >
            ▶ Start
          </button>

          <button
            onClick={pauseTimer}
            className="bg-yellow-600 px-6 py-3 rounded-xl hover:bg-yellow-700"
          >
            ⏸ Pause
          </button>

          <button
            onClick={resetTimer}
            className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700"
          >
            🔄 Reset
          </button>

          {alarmActive && (
            <button
              onClick={stopAlarm}
              className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
            >
              🔕 Stop Alarm
            </button>
          )}

        </div>

      </div>

    </div>
  );
}