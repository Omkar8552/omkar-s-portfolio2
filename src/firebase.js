import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAHSYFjRc-MNyYXmaCjlDruhjEiwoYWXW0",

  authDomain: "my-portfolio-b96f4.firebaseapp.com",

  projectId: "my-portfolio-b96f4",

  storageBucket: "my-portfolio-b96f4.firebasestorage.app",

  messagingSenderId: "1001513842694",

  appId: "1:1001513842694:web:9f6e0928d30a428543eb87",

  measurementId: "G-3MRERWNGK7"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };