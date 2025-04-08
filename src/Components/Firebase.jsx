// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPSahB79hsJDZZmj7LatPD000_4Q5bbk",
  authDomain: "netflixgptnew-b6f2d.firebaseapp.com",
  projectId: "netflixgptnew-b6f2d",
  storageBucket: "netflixgptnew-b6f2d.firebasestorage.app",
  messagingSenderId: "96245186984",
  appId: "1:96245186984:web:8212af785584d90a6b1d9d",
  measurementId: "G-XZKY1WBZW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();