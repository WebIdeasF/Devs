import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDjzRdDP4PRQgTrMFvoXklbAl_kOWa6Shs",
  authDomain: "hisclin.firebaseapp.com",
  projectId: "hisclin",
  storageBucket: "hisclin.appspot.com",
  messagingSenderId: "556170686547",
  appId: "1:556170686547:web:722ade7a427be94e9b96a6",
  measurementId: "G-BLHD17ZXRB"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export default firebaseApp;