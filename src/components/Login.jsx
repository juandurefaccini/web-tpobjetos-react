import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

export default function Login() {
  // Manejar el estado del formulario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/home"); // Redireccionar a la pagina home
  };

  const handleChange = ({ target: { name, value } }) => {
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

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="tumail@compañia.com"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          />
        </label>
        <button>Log In</button>
      </form>

      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
}
