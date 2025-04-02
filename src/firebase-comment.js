import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAHSYFjRc-MNyYXmaCjlDruhjEiwoYWXW0",
  
    authDomain: "my-portfolio-b96f4.firebaseapp.com",
  
    projectId: "my-portfolio-b96f4",
  
    storageBucket: "my-portfolio-b96f4.firebasestorage.app",
  
    messagingSenderId: "1001513842694",
  
    appId: "1:1001513842694:web:9f6e0928d30a428543eb87",
  
    measurementId: "G-3MRERWNGK7"
  
  };
  

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };