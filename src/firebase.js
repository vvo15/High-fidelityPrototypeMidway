// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlB7Yd-S9QmJgAVQdO2z91BbqTzLgRECQ",
  authDomain: "instructor-website-e53bf.firebaseapp.com",
  projectId: "instructor-website-e53bf",
  storageBucket: "instructor-website-e53bf.firebasestorage.app",
  messagingSenderId: "496031149304",
  appId: "1:496031149304:web:101ca25bc4a37492a15f0d",
  measurementId: "G-FQ5T84VTE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
