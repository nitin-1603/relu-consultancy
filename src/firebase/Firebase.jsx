// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwwiVNMSThkfMihSYtDYjBPp7T2igUJvw",
  authDomain: "relu-70a7a.firebaseapp.com",
  projectId: "relu-70a7a",
  storageBucket: "relu-70a7a.appspot.com",
  messagingSenderId: "923164831193",
  appId: "1:923164831193:web:b4ed0a64a0fb9f95667dc8"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };