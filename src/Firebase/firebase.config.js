// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Jb_l-ZJCZsP9AZhORNQrKy8r_GjiY-s",
  authDomain: "recap-firebase463199.firebaseapp.com",
  projectId: "recap-firebase463199",
  storageBucket: "recap-firebase463199.firebasestorage.app",
  messagingSenderId: "285184702683",
  appId: "1:285184702683:web:1fd64211d49ed34b6b34fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;