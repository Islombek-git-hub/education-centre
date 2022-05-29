// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDiifa12zIjgu2-FkcDWrRP1cG1E3zBIc",
  authDomain: "education-b2f41.firebaseapp.com",
  projectId: "education-b2f41",
  storageBucket: "education-b2f41.appspot.com",
  messagingSenderId: "146389939992",
  appId: "1:146389939992:web:5dab05ba436947cfc0d06d",
  measurementId: "G-2WSYWCNP2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
