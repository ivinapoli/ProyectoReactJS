import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG3CYGAyEW2kQYC1GSH6gpN-i6OHPh_tg",
    authDomain: "whattodrink-1a02f.firebaseapp.com",
    projectId: "whattodrink-1a02f",
    storageBucket: "whattodrink-1a02f.appspot.com",
    messagingSenderId: "656769342634",
    appId: "1:656769342634:web:0bdf30cc5426d2a6c584d3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
