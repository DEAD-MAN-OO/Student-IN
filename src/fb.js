// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq_RGdGFSK96_rS384dJ7QOi6i6tS4Frs",
  authDomain: "stin-584ae.firebaseapp.com",
  projectId: "stin-584ae",
  storageBucket: "stin-584ae.appspot.com",
  messagingSenderId: "177827867188",
  appId: "1:177827867188:web:13ac4bccce6e9f9602f861"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const firestore = getFirestore(app);
 const storage = getStorage(app);

 export {app, auth, firestore, storage};