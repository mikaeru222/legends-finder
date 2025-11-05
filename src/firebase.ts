// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // ← 追加

const firebaseConfig = {
  apiKey: "AIzaSyAd4nxf5zbhxnjLcWcFu06GDOYJaGSSyXE",
  authDomain: "legends-finder-65557.firebaseapp.com",
  projectId: "legends-finder-65557",
  storageBucket: "legends-finder-65557.firebasestorage.app",
  messagingSenderId: "567906474033",
  appId: "1:567906474033:web:d73b78dade856c24d8dd10",
  measurementId: "G-EGZZ1TY6TE", // ←使ってないけど置いててOK
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);               // ← これでFirestoreが使える
