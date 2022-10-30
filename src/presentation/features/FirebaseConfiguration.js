// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRN21ljZnWqhJqniLpQ9c5KfRa_XUbhZE",
  authDomain: "react-http-8edde.firebaseapp.com",
  databaseURL: "https://react-http-8edde-default-rtdb.firebaseio.com",
  projectId: "react-http-8edde",
  storageBucket: "react-http-8edde.appspot.com",
  messagingSenderId: "800311156552",
  appId: "1:800311156552:web:f8ec6d13291ecbc4ff9d7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
