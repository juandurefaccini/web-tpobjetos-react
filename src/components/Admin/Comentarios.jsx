import React, { useEffect, useState } from "react";
import { axiosClient } from "../../services/services";

import Alert from "../Alert";
import Loading from "../Loading";

export default function Comentarios() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosClient.get("/comentario");
        console.log(response.data);
        setComments(response.data);
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

  if (loading && comments.length == 0) return <Loading />;

  if (error) return <Alert message={error} />;

  if (comments.length == 0) return <h1>No hay comentarios</h1>;

  return (
    <div>
      <table className="border border-gray-400">
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Elemento</th>
            <th>Autor</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comentario, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{comentario.id}</td>
              <td>{comentario.elemento}</td>
              <td>{comentario.autor}</td>
              <td>{comentario.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
