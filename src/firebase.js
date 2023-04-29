import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAA-ddGt3eqESex5i_eptpd5V_55bPpbhM",
  authDomain: "react-portfolio-dashboar-3c649.firebaseapp.com",
  projectId: "react-portfolio-dashboar-3c649",
  storageBucket: "react-portfolio-dashboar-3c649.appspot.com",
  messagingSenderId: "344197418331",
  appId: "1:344197418331:web:dc3116eb5e9ede4c745e7e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);