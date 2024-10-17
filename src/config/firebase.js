// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWnNXZbPcsk7cvf-bmYiYHv4DZR2DpwTE",
  authDomain: "vite-project-95e90.firebaseapp.com",
  projectId: "vite-project-95e90",
  storageBucket: "vite-project-95e90.appspot.com",
  messagingSenderId: "931307346755",
  appId: "1:931307346755:web:5fe78a39924cef5ad3adf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);