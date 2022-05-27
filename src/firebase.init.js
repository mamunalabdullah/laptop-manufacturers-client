
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_API_KEY,
//   // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   // projectId: process.env.REACT_APP_PROJECT_ID,
//   // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   // appId: process.env.REACT_APP_APP_ID,
//   apiKey: "AIzaSyCJyQnCt47thN0MuLtBtulVER0BTfgPr8w",
//   authDomain: "mobile-ab113.firebaseapp.com",
//   projectId: "mobile-ab113",
//   storageBucket: "mobile-ab113.appspot.com",
//   messagingSenderId: "479585357114",
//   appId: "1:479585357114:web:daccb268f649f4cfc2d403"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxKwymzW0p9ssed4M8hP1zLdZZKwN2m14",
  authDomain: "laptop-manufacturers-fd89a.firebaseapp.com",
  projectId: "laptop-manufacturers-fd89a",
  storageBucket: "laptop-manufacturers-fd89a.appspot.com",
  messagingSenderId: "1021737707476",
  appId: "1:1021737707476:web:83d499f3f34f170842d841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;