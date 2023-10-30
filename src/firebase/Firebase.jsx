// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyBG9HGjLfpzKWgmv0ugo1UFSJsg3fr-NeI",
//   authDomain: "relu-consultancy-8f3ac.firebaseapp.com",
//   projectId: "relu-consultancy-8f3ac",
//   storageBucket: "relu-consultancy-8f3ac.appspot.com",
//   messagingSenderId: "87031896308",
//   appId: "1:87031896308:web:b2d826e6ef0f01e97ee6a1"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDsMtM1IdArznyaN7J1hXs1Ea_TM16_VEs",
//   authDomain: "e-nits-web-app.firebaseapp.com",
//   projectId: "e-nits-web-app",
//   storageBucket: "e-nits-web-app.appspot.com",
//   messagingSenderId: "446929673672",
//   appId: "1:446929673672:web:7ef0d829d8a7ad22b874fd"
// };


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