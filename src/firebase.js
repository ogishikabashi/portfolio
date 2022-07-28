
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAgYbekkLjWf19Ez2JAd-AOu-e8ya4Wsik",
  authDomain: "portfolio-59d3d.firebaseapp.com",
  projectId: "portfolio-59d3d",
  storageBucket: "portfolio-59d3d.appspot.com",
  messagingSenderId: "134941347896",
  appId: "1:134941347896:web:86753f6b821f1fd56216cd",
  measurementId: "G-DRK0DKHEW9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);