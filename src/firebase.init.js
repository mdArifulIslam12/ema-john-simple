// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0uaZOPdtzlCO5RgG6JUoBu71eP5gAsOA",
  authDomain: "ema-john-simple-5348c.firebaseapp.com",
  projectId: "ema-john-simple-5348c",
  storageBucket: "ema-john-simple-5348c.appspot.com",
  messagingSenderId: "43002325963",
  appId: "1:43002325963:web:baa37cc00a56126ea5244e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
