// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFS7hxX9fSfOUyOr1xNEEMXyjjIBbH48Y",
  authDomain: "chat-app-9ee28.firebaseapp.com",
  projectId: "chat-app-9ee28",
  storageBucket: "chat-app-9ee28.appspot.com",
  messagingSenderId: "251328200837",
  appId: "1:251328200837:web:c6ab7131ba57620ea229ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
