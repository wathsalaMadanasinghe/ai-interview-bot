// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwIPIh1lyGWZx4ukf_81XPxPxMEffP5pg",
  authDomain: "prepwise-139eb.firebaseapp.com",
  projectId: "prepwise-139eb",
  storageBucket: "prepwise-139eb.firebasestorage.app",
  messagingSenderId: "668627587733",
  appId: "1:668627587733:web:d7684740e312c3f76c419c",
  measurementId: "G-701G7Y89ND",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
