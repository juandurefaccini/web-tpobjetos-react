import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    // La notacion del parametro significa que yo ya extraigo el propiedad target y de su valor la propiedad name y value
    setUser({ ...user, [name]: value }); // Esto es para copiar los datos que tiene y despues actualizarlos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home"); // Redireccionar a la pagina home
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
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
        <button>Registrar</button>
      </form>
    </div>
  );
}
