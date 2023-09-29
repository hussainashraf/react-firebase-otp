// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARY4gu6DoOhjQSolo5PfRjr9_D6q7O4mw",
  authDomain: "react-otp-project-5b75c.firebaseapp.com",
  projectId: "react-otp-project-5b75c",
  storageBucket: "react-otp-project-5b75c.appspot.com",
  messagingSenderId: "376526801068",
  appId: "1:376526801068:web:7d9066b454e4bb66c17709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)