// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeVcH3Zu7UzGZ282DstQJy-K97Kl-bk_k",
    authDomain: "zomato-clone-88580.firebaseapp.com",
    projectId: "zomato-clone-88580",
    storageBucket: "zomato-clone-88580.appspot.com",
    messagingSenderId: "894955721278",
    appId: "1:894955721278:web:639d004ec0bf6261cd376f",
    measurementId: "G-ZJ8BTZTMBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;