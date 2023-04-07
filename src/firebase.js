// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRnbbitd68IvAOiONYTKPkolIwHaEOETQ",
    authDomain: "goreeva-quiz.firebaseapp.com",
    projectId: "goreeva-quiz",
    storageBucket: "goreeva-quiz.appspot.com",
    messagingSenderId: "674752213441",
    appId: "1:674752213441:web:3a28957cab130af6d5ff40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };