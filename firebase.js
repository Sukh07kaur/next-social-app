// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-social-app-7b06c.firebaseapp.com",
  projectId: "next-social-app-7b06c",
  storageBucket: "next-social-app-7b06c.firebasestorage.app",
  messagingSenderId: "1052283552427",
  appId: "1:1052283552427:web:a9a2274bd7f44a703d6dee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);