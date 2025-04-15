// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Tjm3xuICg0E6lSmWPWKnqmzeO1TB4xs",
  authDomain: "netflix-gpt-b6a20.firebaseapp.com",
  projectId: "netflix-gpt-b6a20",
  storageBucket: "netflix-gpt-b6a20.firebasestorage.app",
  messagingSenderId: "475197315428",
  appId: "1:475197315428:web:1e58dfe02f5cb6c940c271",
  measurementId: "G-FLVEYBNGE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();