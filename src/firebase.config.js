// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL_o-ts2RW2bFTlLJVc5SlQwKPMkGxn6g",
  authDomain: "my-note-app-auth-397d0.firebaseapp.com",
  projectId: "my-note-app-auth-397d0",
  storageBucket: "my-note-app-auth-397d0.firebasestorage.app",
  messagingSenderId: "856920414741",
  appId: "1:856920414741:web:ad8df3932b8a0a5c3f0c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;