// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACD8hj6SSZ2URUM0eIrq0l60wuFQ2qyMw",
  authDomain: "otp-generation-673ce.firebaseapp.com",
  projectId: "otp-generation-673ce",
  storageBucket: "otp-generation-673ce.firebasestorage.app",
  messagingSenderId: "144765337507",
  appId: "1:144765337507:web:fd481bde345b599343e416",
  measurementId: "G-D78NS92GV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
