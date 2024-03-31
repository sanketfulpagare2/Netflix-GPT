// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJM14bO-otpdifLaifjGP_7kqqEFcJmpQ",
  authDomain: "netflixgpt-3b65b.firebaseapp.com",
  projectId: "netflixgpt-3b65b",
  storageBucket: "netflixgpt-3b65b.appspot.com",
  messagingSenderId: "911056689873",
  appId: "1:911056689873:web:af4b56e308741e9b2bc3f0",
  measurementId: "G-V8G7E3YL41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();