import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosClient, getUsuarios } from "../../services/services.js";
import Loading from "../Loading.jsx";
import Alert from "../Alert";
import Users from "./Users.jsx";
import Catedras from "./Catedras.jsx";
import Comentarios from "./Comentarios.jsx";

export default function DashBoard() {
  const [error, setError] = useState(null);

  // Datos
  const [users, setUsers] = useState(null);
  const [catedras, setCatedras] = useState(null);
  const [comentarios, setComentarios] = useState(null);

  // Opcion de panel
  const [usersOption, setUsersOption] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadUsers = () => {
    setCatedras(null);
    setComentarios(null);
    setLoading(true);
    axios
      .get("http://localhost:3500/usuarios")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  const loadCatedras = () => {
    setUsers(null);
    setComentarios(null);
    setLoading(true);
    axios
      .get("http://localhost:3500/catedras")
      .then((response) => {
        setCatedras(response.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  const loadComentarios = () => {
    setUsers(null);
    setCatedras(null);
    setLoading(true);
    axios
      .get("http://localhost:3500/comentarios")
      .then((response) => {
        setComentarios(response.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  if (loading && error) return <Alert message={error} />;
  if (loading && !users) return <Loading />;

  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-col space-y-6">
        <div className="space-x-4 mx-auto">
          <button
            className="px-6 py-2 shadow-sm border border-gray-400"
            onClick={() => loadUsers()}
          >
            Usuarios
          </button>
          <button
            className="px-6 py-2 shadow-sm border border-gray-400"
            onClick={() => loadCatedras()}
          >
            Catedras
          </button>
          <button
            className="px-6 py-2 shadow-sm border border-gray-400"
            onClick={() => loadComentarios()}
          >
            Comentarios
          </button>
        </div>
        {users && <Users users={users} />}
        {catedras && <Catedras catedras={catedras} />}
        {comentarios && <Comentarios comentarios={comentarios} />}
      </div>
    </div>
  );
}
