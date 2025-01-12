// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLCW61QDeaf-SWhcol_hpLtgoNFW13BJE",
  authDomain: "e-commerce-web-app-e4f55.firebaseapp.com",
  projectId: "e-commerce-web-app-e4f55",
  storageBucket: "e-commerce-web-app-e4f55.firebasestorage.app",
  messagingSenderId: "26482426499",
  appId: "1:26482426499:web:50403b68421520fa7251b6",
  measurementId: "G-EG9H7FR8MD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
