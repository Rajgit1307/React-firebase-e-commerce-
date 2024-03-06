// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD0B7lW4kwEEA-mQE2_EoXx4tTehqtZzo",
  authDomain: "e-commerce-4a828.firebaseapp.com",
  projectId: "e-commerce-4a828",
  storageBucket: "e-commerce-4a828.appspot.com",
  messagingSenderId: "727651527661",
  appId: "1:727651527661:web:bf6dd43f83f9ed278e95e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth};