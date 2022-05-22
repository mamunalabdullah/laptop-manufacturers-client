// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACuXhVOXJ1eruaNWfI3zxa4H5vN4QW7NU",
  authDomain: "laptop-manufacturers.firebaseapp.com",
  projectId: "laptop-manufacturers",
  storageBucket: "laptop-manufacturers.appspot.com",
  messagingSenderId: "525034298007",
  appId: "1:525034298007:web:7513e0957ab195c1c927d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;