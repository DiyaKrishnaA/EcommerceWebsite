// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs043AownSWB48VwKDXfcKlYD-fC8fyVA",
  authDomain: "auth-1-9e395.firebaseapp.com",
  projectId: "auth-1-9e395",
  storageBucket: "auth-1-9e395.appspot.com",
  messagingSenderId: "731635199337",
  appId: "1:731635199337:web:cf7a9d227a6863309ca1f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
