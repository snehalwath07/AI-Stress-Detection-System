import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created Successfully!");
      navigate("/assessment");
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");
      navigate("/assessment");
    } catch (error) {
      alert(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      alert("Google Login Successful!");
      navigate("/assessment");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220]">

      <div className="bg-[#1A1F2E] p-8 rounded-3xl w-[400px] border border-gray-700">

        <h1 className="text-4xl font-bold mb-6 text-center">
          🔐 Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 rounded-xl bg-[#111827] mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 rounded-xl bg-[#111827] mb-6"
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 py-3 rounded-xl mb-3"
        >
          Login
        </button>

        <button
          onClick={signup}
          className="w-full bg-green-600 py-3 rounded-xl mb-3"
        >
          Create Account
        </button>

        <button
          onClick={googleLogin}
          className="w-full bg-red-600 py-3 rounded-xl"
        >
          Sign in with Google
        </button>

      </div>

    </div>
  );
}