import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import React from "react";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading...</h1>; // Si el usuario esta cargando retorna cargando

  if (!user) return <Navigate to="/login" />; // Si no esta logueado retorna al login

  return <>{children}</>; // Si esta logueado retorna el componente
}
