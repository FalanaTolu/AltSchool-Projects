// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, query, orderBy, startAfter, endBefore, limit, limitToLast, getDocs, collection, where, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6jtKrOH_FFtFWG9paxZQJ2j4PtBbHjlA",
  authDomain: "fir-hosting-a86b2.firebaseapp.com",
  projectId: "fir-hosting-a86b2",
  storageBucket: "fir-hosting-a86b2.appspot.com",
  messagingSenderId: "235676742261",
  appId: "1:235676742261:web:79686283e09da45dab7e3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup Google Auth
const provider = new GoogleAuthProvider();
const auth = getAuth();

//Setup Firestore database
const db = getFirestore(app);

export { app, provider, auth, db, GoogleAuthProvider, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, query, orderBy, startAfter, endBefore, limit, limitToLast, getDocs, collection, where, addDoc };
