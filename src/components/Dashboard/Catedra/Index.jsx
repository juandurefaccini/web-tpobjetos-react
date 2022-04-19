import React, { useEffect, useState } from "react";
import { useServices } from "../../../context/servicesContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import Loading from "../../Loading";
import Button from "../../ui/Button";
import Alert from "../../Alert";

export default function Index() {
  const [catedras, setCatedras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const { getCatedras, deleteCatedra } = useServices();

  const handleDelete = (id) => {
    deleteCatedra(id, user).then(() =>
      setCatedras(catedras.filter((catedra) => catedra.nombre != id))
    );
  };

  useEffect(() => {
    const fetchCatedras = async () => {
      const res = await getCatedras();
      setCatedras(res);
    };

    setLoading(true);
    fetchCatedras().catch((error) => {
      setError(error.message);
    });
    setLoading(false);
  }, []);

  if (error) return <Alert message={error} />;

  if (!catedras || loading) return <Loading />;

  return (
    <div className="container mx-auto p-6 border">
      <div className="space-y-2">
        <p>Acciones </p>
        <div className="flex ">
          <Button onClick={() => navigate("new")}>Agregar catedra</Button>
        </div>
        <p>Tabla</p>
        <table className="border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-600">#</th>
              <th className="border border-gray-600">Nombre</th>
              <th className="border border-gray-600">Sitio Web</th>
              <th className="border border-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {catedras.map((catedra, index) => (
              <tr className="border-t border-gray-600 w-1/12" key={index}>
                <td className="border border-gray-600 text-center">{index}</td>
                <td className="border border-gray-600 ">{catedra.nombre}</td>
                <td className="border border-gray-600 text-center">
                  {catedra.urlPaginaWeb}
                </td>
                <td className="flex">
                  <Button onClick={() => navigate(`${catedra.nombre}`)}>
                    ✏️
                  </Button>
                  <Button onClick={() => handleDelete(catedra.nombre)}>
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
