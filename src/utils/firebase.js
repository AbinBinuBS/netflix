// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTfYDmux2EaAYQsFWCwmUvmbVK-dYPN2k",
  authDomain: "netflix-69bf1.firebaseapp.com",
  projectId: "netflix-69bf1",
  storageBucket: "netflix-69bf1.appspot.com",
  messagingSenderId: "668080968741",
  appId: "1:668080968741:web:76d21e83e0f7d44dc11bcc",
  measurementId: "G-092N5T7XXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();