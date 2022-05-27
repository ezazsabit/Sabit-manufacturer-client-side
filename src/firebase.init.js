// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADz6IRnwtBIoSITbJvQw8ZcOboJpO96hs",
  authDomain: "sabitmanufacturer.firebaseapp.com",
  projectId: "sabitmanufacturer",
  storageBucket: "sabitmanufacturer.appspot.com",
  messagingSenderId: "401693565475",
  appId: "1:401693565475:web:4c72f11f15c718cc658796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
