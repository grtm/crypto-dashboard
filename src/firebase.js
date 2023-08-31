import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDxFV0OusISHhFKUZUuJDt0c8nGe9ZDoVs",
  authDomain: "crypto-7c101.firebaseapp.com",
  projectId: "crypto-7c101",
  storageBucket: "crypto-7c101.appspot.com",
  messagingSenderId: "355175199319",
  appId: "1:355175199319:web:3b2a5b3356f880e1f72912"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore();