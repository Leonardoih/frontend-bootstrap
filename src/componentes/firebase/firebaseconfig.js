// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQVT-Nh6Se5jjyr1BEcc5fqORHyMq6ROc",
  authDomain: "inventario-frontend.firebaseapp.com",
  projectId: "inventario-frontend",
  storageBucket: "inventario-frontend.appspot.com",
  messagingSenderId: "547378411842",
  appId: "1:547378411842:web:7ef4b17fe30166b931f0db"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const auth = fire.auth()

export {  auth }