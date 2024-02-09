// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuBr_RZZ3vfVPdn1pNos1gcgmRCzff4kQ",
  authDomain: "joboard-e002d.firebaseapp.com",
  projectId: "joboard-e002d",
  storageBucket: "joboard-e002d.appspot.com",
  messagingSenderId: "381303861218",
  appId: "1:381303861218:web:f2430d9dede5fa4f15d3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};