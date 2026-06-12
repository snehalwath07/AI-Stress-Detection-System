import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setDarkMode(
        localStorage.getItem("theme") !== "light"
      );
    };

    window.addEventListener("storage", checkTheme);

    const interval = setInterval(checkTheme, 500);

    return () => {
      window.removeEventListener("storage", checkTheme);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen ${
        darkMode
          ? "bg-[#0D1117] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {user && <Sidebar />}

      <div className="flex-1 overflow-auto">
        <AppRoutes user={user} />
      </div>
    </div>
  );
}

export default App;