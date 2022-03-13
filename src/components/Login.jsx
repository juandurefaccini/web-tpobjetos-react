import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import { postUser } from "../services/services";
import { useServices } from "../context/servicesContext";

// TODO : DEJAR BONITO ESTE COMPONENTE
export default function Login() {
  const { postUsuario } = useServices();
  const { user } = useAuth();

  // Manejar el estado del formulario
  /*   const [user, setUser] = useState({
    email: "",
    password: "",
  }); */

  const [error, setError] = useState("");

  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    await postUsuario();
    navigate("/home"); // Redireccionar a la pagina home
  };

  /*   const handleChange = ({ target: { name, value } }) => {
    // La notacion del parametro significa que yo ya extraigo el propiedad target y de su valor la propiedad name y value
    setUser({ ...user, [name]: value }); // Esto es para copiar los datos que tiene y despues actualizarlos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/home"); // Redireccionar a la pagina home
    } catch (e) {
      setError(e.message);
    }
  };
 */
  return (
    <div className="bg-slate-300 h-full flex flex-col justify-center">
      <div className="container bg-white mx-auto w-auto space-y-2 p-6 rounded">
        {error && <Alert message={error} />}
        {/* <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            disabled
            className="rounded border border-gray-400 p-2 w-full"
            type="email"
            name="email"
            placeholder="tumail@compañia.com"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            disabled
            className="rounded border border-gray-400 p-2 w-full"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          />
          <button disabled className="bg-gray-400 rounded p-2">
            Iniciar sesion
          </button>
        </form> */}
        <button
          className="border-gray-400 rounded border p-2 w-full"
          onClick={handleGoogleSignIn}
        >
          Iniciar sesion con Google
        </button>
        {/* <Link to="/register">
          <span className="text-blue-600">Registrate!</span>
        </Link> */}
      </div>
    </div>
  );
}
