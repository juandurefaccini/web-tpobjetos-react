import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useServices } from "../context/servicesContext";

export default function Perfil() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { getUsuario, deleteUsuario } = useServices();
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    getUsuario(user.email)
      .then((data) => {
        setUsuario(data[0]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) return <h1>{error}</h1>;
  if (!usuario || !user) return <h1>loading...</h1>;

  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col items-center justify-center h-full  space-y-1">
        <div className="p-6 border rounded border-gray-600 my-6">
          <p>Mail : {usuario.mail}</p>
          <p>Nombre : {usuario.nombre}</p>
          <p>Puntaje : {usuario.puntaje}</p>
          <p>Admin : {usuario.admin ? "si" : "no"}</p>
        </div>
        <div className="space-y-2">
          <Button onClick={() => navigate("/home")}>
            <span>Volver al home</span>
          </Button>
          <Button
            onClick={async () => {
              await deleteUsuario(user);
              logout();
              navigate("/login");
            }}
          >
            <span>Eliminar perfil</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
