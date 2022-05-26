// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFGqflJ6HxnOSDe-BU3keoGXeoC6autfs",
    authDomain: "pc-builder-bd-b948d.firebaseapp.com",
    projectId: "pc-builder-bd-b948d",
    storageBucket: "pc-builder-bd-b948d.appspot.com",
    messagingSenderId: "617106095882",
    appId: "1:617106095882:web:d7c58487efea65f56004f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;