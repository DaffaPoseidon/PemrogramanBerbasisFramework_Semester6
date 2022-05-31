// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7RfYP5XHEk1vNjNYfCclWvHuM3d_TvR8",
  authDomain: "semester6-tugas11-pbf.firebaseapp.com",
  projectId: "semester6-tugas11-pbf",
  storageBucket: "semester6-tugas11-pbf.appspot.com",
  messagingSenderId: "578185274806",
  appId: "1:578185274806:web:ed6a4a66c0a54fbd660d17",
  measurementId: "G-2WWLY0WYWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);