import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyk3m-_OAUEYlwwOp8tipzcQg8uZyUxb0",
  authDomain: "trabajo-final-objetos.firebaseapp.com",
  projectId: "trabajo-final-objetos",
  storageBucket: "trabajo-final-objetos.appspot.com",
  messagingSenderId: "50427255399",
  appId: "1:50427255399:web:54e71c1bbbab16a77d92c2",
  measurementId: "G-8G087J5XGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
