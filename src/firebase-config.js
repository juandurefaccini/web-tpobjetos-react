import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // mantener referencia a la instancia de autenticación

export { auth };
