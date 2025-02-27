// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-short-video-generator-4997f.firebaseapp.com",
  projectId: "ai-short-video-generator-4997f",
  storageBucket: "ai-short-video-generator-4997f.firebasestorage.app",
  messagingSenderId: "242072467602",
  appId: "1:242072467602:web:a94a107b99fce0a7620e4b",
  measurementId: "G-534Y7BGQP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);