// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDveC85SocuHBBAENvhFE2m2IYc9FiLmQ0",
  authDomain: "white-elephant-game-fb408.firebaseapp.com",
  projectId: "white-elephant-game-fb408",
  storageBucket: "white-elephant-game-fb408.firebasestorage.app",
  messagingSenderId: "641206672192",
  appId: "1:641206672192:web:a8e820b465562f18dab8a5",
  measurementId: "G-4NP2PVHM09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)