import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useServices } from "../context/servicesContext";

// TODO : Revisar por que se renderiza el componente mas de una vez
export default function Perfil() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getUsuario, deleteUsuario } = useServices();
  const [usuario, setUsuario] = useState(null);

  // TODO : TERMINAR DE FETCHEAR EL USUARIO PARA MOSTARTLO EN EL PERFIL
  const init = async () => {
    const usuarioApi = await getUsuario(user.email);
    setUsuario(usuarioApi[0]); // TODO : CAMBIAR
  };

  useEffect(() => {
    if (user) init();
  }, [user]);

  if (!usuario || !user) return <h1>loading...</h1>;

  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col items-center justify-center h-full ">
        <div className="flex flex-row align-middle justify-center">
          <div className="h-10 ">
            <Button onClick={() => navigate("/home")}>
              <span>Volver al home</span>
            </Button>
            <Button
              onClick={async () => {
                await deleteUsuario();
                // TODO : VERIFICAR
              }}
            >
              <span>Eliminar perfil</span>
            </Button>
          </div>
        </div>
        <div className="p-6 border rounded border-gray-600 my-6">
          <p>Mail : {usuario.mail}</p>
          <p>Nombre : {usuario.nombre}</p>
          <p>Puntaje : {usuario.puntaje}</p>
          <p>Admin : {usuario.admin ? "si" : "no"}</p>
        </div>
      </div>
    </div>
  );
}
