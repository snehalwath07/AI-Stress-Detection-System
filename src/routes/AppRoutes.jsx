import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Assessment from "../pages/Assessment";
import Copilot from "../pages/Copilot";
import DigitalTwin from "../pages/DigitalTwin";
import Reports from "../pages/Reports";
import Predictions from "../pages/Predictions";
import Settings from "../pages/Settings";

import StressReliefHub from "../pages/StressReliefHub";

import BreathingExercise from "../pages/BreathingExercise";
import ReactionTest from "../pages/ReactionTest";
import MemoryChallenge from "../pages/MemoryChallenge";
import ColorMatch from "../pages/ColorMatch";
import FocusTimer from "../pages/FocusTimer";
import GratitudeJournal from "../pages/GratitudeJournal";

export default function AppRoutes({ user }) {
if (!user) {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/assessment" />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/assessment"
        element={<Assessment />}
      />

      <Route
        path="/copilot"
        element={<Copilot />}
      />

      <Route
        path="/digital-twin"
        element={<DigitalTwin />}
      />

      <Route
        path="/reports"
        element={<Reports />}
      />

      <Route
        path="/predictions"
        element={<Predictions />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

      <Route
        path="/stress-relief"
        element={<StressReliefHub />}
      />

      <Route
        path="/breathing-exercise"
        element={<BreathingExercise />}
      />

      <Route
        path="/reaction-test"
        element={<ReactionTest />}
      />

      <Route
        path="/memory-challenge"
        element={<MemoryChallenge />}
      />

      <Route
        path="/color-match"
        element={<ColorMatch />}
      />

      <Route
        path="/focus-timer"
        element={<FocusTimer />}
      />

      <Route
        path="/gratitude-journal"
        element={<GratitudeJournal />}
      />

      <Route
        path="*"
        element={<Navigate to="/dashboard" />}
      />

    </Routes>
  );
}