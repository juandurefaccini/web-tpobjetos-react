import React, { useEffect, useState } from "react";
import { useServices } from "../../context/servicesContext";
import Loading from "../Loading";

export default function Users() {
  const { getUsuarios } = useServices();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsuarios();
      console.log("data", res);
      setUsers(res);
    };
    setLoading(true);
    fetchUsers();
    setLoading(false);
  }, []);

  if (!users || loading) {
    return <Loading />;
  }

  return (
    <div>
      <table className="border border-gray-400 w-full">
        <thead>
          Usuarios
          <tr>
            <th className="border border-gray-600">#</th>
            <th className="border border-gray-600 ">Nombre</th>
            <th className="border border-gray-600">Mail</th>
            <th className="border border-gray-600">Puntaje</th>
            <th className="border border-gray-600">Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="border-t border-gray-600 w-1/12" key={index}>
              <td className="border border-gray-600 text-center">{index}</td>
              <td className="border border-gray-600 w-1/4">{user.nombre}</td>
              <td className="border border-gray-600 w-1/4">{user.mail}</td>
              <td className="border border-gray-600 text-center w-1/12">
                {user.puntaje}
              </td>
              <td className="border border-gray-600 text-center w-1/12">
                {user.admin ? <>✅</> : <>❌</>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
