import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800 sticky top-0 bg-[#0B1220] z-50">

        <h1 className="text-3xl font-bold text-blue-400">
          🧠 AI Stress Prediction
        </h1>

        <div className="flex gap-4">

          <button
            onClick={scrollToHowItWorks}
            className="px-5 py-2 rounded-xl border border-gray-600 hover:bg-gray-800"
          >
            How It Works
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-xl border border-blue-500"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </button>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="py-32 px-10 text-center">

        <h1 className="text-7xl font-extrabold mb-6">
          AI Stress Prediction
        </h1>

        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          Understand your stress levels using Artificial Intelligence
          and receive personalized wellness recommendations.
        </p>

        <div className="flex justify-center gap-4 mt-10">

          <button
            onClick={() => navigate("/login")}
            className="bg-purple-600 px-8 py-4 rounded-2xl text-xl hover:bg-purple-700"
          >
            🚀 Get Started
          </button>

          <button
            onClick={scrollToHowItWorks}
            className="border border-gray-600 px-8 py-4 rounded-2xl text-xl"
          >
            📖 Learn More
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="px-10 py-20">

        <h2 className="text-5xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              🤖 AI Powered
            </h3>
            <p>
              Advanced AI-driven stress analysis.
            </p>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              🔒 Secure
            </h3>
            <p>
              Firebase authentication and protected access.
            </p>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              ⚡ Fast Analysis
            </h3>
            <p>
              Get instant stress predictions.
            </p>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              🎯 Personalized
            </h3>
            <p>
              Recommendations tailored to you.
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef}
        className="px-10 py-20"
      >

        <h2 className="text-5xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              1️⃣ Assessment
            </h3>
            <p>
              Fill in your wellness information.
            </p>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              2️⃣ AI Analysis
            </h3>
            <p>
              AI processes your inputs.
            </p>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              3️⃣ Results
            </h3>
            <p>
              View stress prediction results.
            </p>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              4️⃣ Stress Relief
            </h3>
            <p>
              Access wellness and relaxation tools.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready To Understand Your Stress?
        </h2>

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 px-10 py-4 rounded-2xl text-xl hover:bg-blue-700"
        >
          Start Now
        </button>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">

        <p>
          © 2026 AI Stress Prediction System
        </p>

        <p className="mt-2">
          Built with React, Firebase and AI
        </p>

      </footer>

    </div>
  );
}