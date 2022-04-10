import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

export default function Login() {
  const [error, setError] = useState("");

  const { loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/home"); // Redireccionar a la pagina home
  };

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1>Cargando...</h1>
      </div>
    );

  return (
    <div className="bg-primary h-screen flex flex-col justify-center items-center">
      <div className="container bg-white mx-auto w-auto space-y-2 p-6 rounded ">
        {error && <Alert message={error} />}

        <button
          className="border-gray-400 rounded border bg-[white] p-2 w-full h-full "
          onClick={handleGoogleSignIn}
        >
          Iniciar sesion con Google
        </button>
      </div>
    </div>
  );
}
