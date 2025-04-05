import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH5eIDqmWIFYxWp6nV3TgystQ7kcaigT8",
  authDomain: "prepwise-d4fd2.firebaseapp.com",
  projectId: "prepwise-d4fd2",
  storageBucket: "prepwise-d4fd2.firebasestorage.app",
  messagingSenderId: "1010996505775",
  appId: "1:1010996505775:web:212663370855670acaf85a",
  measurementId: "G-YWLZKN4YXS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);