// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ↓ここを .env からじゃなくて“生の値”にする
const firebaseConfig = {
  apiKey: "AIza..............",                     // Firebaseコンソールに出てるやつ
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg1234567",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 動作確認用（あっていい）
console.log("✅ Firebase initialized:", app.name);
