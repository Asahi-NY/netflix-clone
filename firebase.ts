// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsgbx1NKrmoYoAwng4lM2VvYrl9lfkeJ4",
    authDomain: "netflix-clone-e83cc.firebaseapp.com",
    projectId: "netflix-clone-e83cc",
    storageBucket: "netflix-clone-e83cc.appspot.com",
    messagingSenderId: "122724839058",
    appId: "1:122724839058:web:72a39b7402fc9ce7f0404b"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
