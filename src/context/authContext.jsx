import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase-config";

export const authContext = createContext(); // Contiene la informacion

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Cuando iniciamos la aplicacion nadie esta logueado
  const [loading, setLoading] = useState(true); // Cuando iniciamos la aplicacion esta cargando

  const signup = (email, password, nombre) => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      console.log(db);
      db.collection("users").document(user.uid).setData({
        nombre: nombre,
      });
    });
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    // Ejecuta algo ni bien carga el componente
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []); // No es sensible a nada por lo tanto esto va cacio

  return (
    <authContext.Provider
      value={{ signup, login, user, logout, loading, signInWithGoogle }}
    >
      {children}
    </authContext.Provider>
  );
} // Permite usar el contexto en otros componentes

// Esta funcion se usa para obtener el contexto en el componente que lo necesite. Recordar que esta funcion va a tener su propio contexto por lo tanto si no esta wrapeado en un provider no va a funcionar.
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
