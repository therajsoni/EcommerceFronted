import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object

const firebaseConfig = {
  apiKey: "AIzaSyBlXiPmrQd0PpHTPAT-dIzIJSIHvqKXYwU",
  authDomain: "valid1mernecommerce.firebaseapp.com",
  projectId: "valid1mernecommerce",
  storageBucket: "valid1mernecommerce.appspot.com",
  messagingSenderId: "966454623927",
  appId: "1:966454623927:web:2232cc6624c676b34c5732",
};




// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance
export const auth = getAuth(app);
