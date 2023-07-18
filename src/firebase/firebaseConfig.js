// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU0reDF_ooxeGIu9C67IZ6XyoTdAEAQeE",
  authDomain: "reloj-d4138.firebaseapp.com",
  projectId: "reloj-d4138",
  storageBucket: "reloj-d4138.appspot.com",
  messagingSenderId: "150008751441",
  appId: "1:150008751441:web:04357a95a1aeef663c5f70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
