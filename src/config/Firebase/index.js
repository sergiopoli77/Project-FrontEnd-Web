// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYGU0UnKvNhNvHx9tohb88r-coepJjrgc",
  authDomain: "tomatik-b83a7.firebaseapp.com",
  databaseURL: "https://tomatik-b83a7-default-rtdb.firebaseio.com",
  projectId: "tomatik-b83a7",
  storageBucket: "tomatik-b83a7.firebasestorage.app",
  messagingSenderId: "992946643485",
  appId: "1:992946643485:web:f5111ed0b5817217539cf4",
  measurementId: "G-TGEQKSG38G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
