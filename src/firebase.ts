// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd4nxf5zbhxnjLcWcFu06GDOYJaGSSyXE",
  authDomain: "legends-finder-65557.firebaseapp.com",
  projectId: "legends-finder-65557",
  storageBucket: "legends-finder-65557.firebasestorage.app",
  messagingSenderId: "567906474033",
  appId: "1:567906474033:web:d73b78dade856c24d8dd10",
  measurementId: "G-EGZZ1TY6TE" // ←あっても邪魔じゃないけど使わない
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
