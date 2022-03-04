import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    nombre: "",
  });

  const [error, setError] = useState("");

  const { signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    // La notacion del parametro significa que yo ya extraigo el propiedad target y de su valor la propiedad name y value
    setUser({ ...user, [name]: value }); // Esto es para copiar los datos que tiene y despues actualizarlos
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/home"); // Redireccionar a la pagina home
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password, user.nombre);
      navigate("/home"); // Redireccionar a la pagina home
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="bg-slate-300 h-full flex flex-col justify-center">
      <div className="container bg-white mx-auto w-auto space-y-2 p-6 rounded">
        {error && <Alert message={error} />}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            disabled
            className="rounded border border-gray-400 p-2 w-full"
            type="email"
            name="email"
            placeholder="tumail@compañia.com"
            onChange={handleChange}
          />
          <label htmlFor="nombre">Nombre</label>
          <input
            disabled
            className="rounded border border-gray-400 p-2 w-full"
            type="text"
            name="nombre"
            placeholder="Nombre | Apellido"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="rounded border border-gray-400 p-2 w-full"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          />
          <button disabled className="bg-gray-400 rounded p-2">
            Registrar
          </button>
        </form>
        <button
          className="border-gray-400 rounded border p-2 w-full"
          onClick={handleGoogleSignIn}
        >
          Registrarse con Google
        </button>
      </div>
    </div>
  );
}
