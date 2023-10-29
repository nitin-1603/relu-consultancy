// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUpfuYTotciGPeYx4SrFlPKMiPgEuyHlc",
  authDomain: "relu-consultancy-8222e.firebaseapp.com",
  projectId: "relu-consultancy-8222e",
  storageBucket: "relu-consultancy-8222e.appspot.com",
  messagingSenderId: "482049911866",
  appId: "1:482049911866:web:8b9ecb1b49594000c11903"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };