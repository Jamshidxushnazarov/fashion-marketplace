import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbNrX5Cw4myiyLj5MxEm-xmBiWlPqvanY",
    authDomain: "fashion-marketplace-67cb0.firebaseapp.com",
    projectId: "fashion-marketplace-67cb0",
    appId: "1:866234890250:web:9213ab6c73f14ac4db87f3",
    storageBucket: "fashion-marketplace-67cb0.firebasestorage.app",
    messagingSenderId: "866234890250",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
