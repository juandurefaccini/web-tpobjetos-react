import React, { useEffect, useState } from "react";
import { axiosClient } from "../../services/services";
import Alert from "../Alert";
import Loading from "../Loading";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosClient.get("/usuarios");
        console.log(response.data);
        setUsers(response.data);
      } catch (err) {
        if (err.response) {
          // No esta en el rango 200, respondio algo
          setError(
            err.response.data + err.response.status + err.response.headers
          );
        } else {
          setError(err.message);
        }
      }
    };

    fetchUsers();
    setLoading(false);
  }, []);

  if (loading && users.length == 0) {
    return <Loading />;
  }

  if (error) {
    return <Alert message={error} />;
  }

  return (
    <div>
      <table className="border border-gray-400">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Puntaje</th>
            <th>Admin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.nombre}</td>
              <td>{user.puntaje}</td>
              <td>{user.mail}</td>
              <td>{user.admin && <>✅</>}</td>
              <td>
                {user.admin ? (
                  <button className="border border-gray-400 bg-gray-600 text-white p-1 rounded">
                    Hacer admin
                  </button>
                ) : (
                  <button className="border border-gray-400 bg-gray-600 text-white p-1 rounded">
                    Sacar admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
