import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdY2XI92zzDsWGS5Y3ExQyRWBX7AciCyw",
  authDomain: "ai-stress-detection-system.firebaseapp.com",
  projectId: "ai-stress-detection-system",
  storageBucket: "ai-stress-detection-system.firebasestorage.app",
  messagingSenderId: "182748097065",
  appId: "1:182748097065:web:983654977257871b080a38",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);