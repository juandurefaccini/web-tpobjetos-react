import React, { useEffect, useState } from "react";
import { getCatedras } from "../../services/services";
import Alert from "../Alert";
import Loading from "../Loading";

export default function Catedras() {
  const [catedras, setCatedras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatedras = async () => {
      await getCatedras();
    };

    const res = fetchCatedras();
    setCatedras(res);
    setLoading(false);
  }, []);

  if (loading && catedras.length == 0) return <Loading />;

  if (error && catedras.length == 0) return <Alert message={error} />;

  return (
    <div>
      <table className="border border-gray-400">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          {catedras.map((catedra, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{catedra.nombre}</td>
              <td>{catedra.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
