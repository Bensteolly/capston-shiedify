import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArLhokFUpddPdzw-ExWEXWQhN6H_-468U",
  authDomain: "shieldify-40258.firebaseapp.com",
  projectId: "shieldify-40258",
  storageBucket: "shieldify-40258.appspot.com",
  messagingSenderId: "814608408095",
  appId: "1:814608408095:web:17bdbd2bad8e38c6afff2a",
  measurementId: "G-R3746VL9XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);