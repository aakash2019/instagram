import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAPZwIlCwBz36R-6Z899DW9zyq-JTN77Vo",
  authDomain: "instagram-2-5e5eb.firebaseapp.com",
  projectId: "instagram-2-5e5eb",
  storageBucket: "instagram-2-5e5eb.appspot.com",
  messagingSenderId: "817756876902",
  appId: "1:817756876902:web:18483d29c26a5147497da7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };