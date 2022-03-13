import React, { useEffect, useState } from "react";
import { useServices } from "../../context/servicesContext";
import Loading from "../Loading";
import Button from "../ui/Button";

export default function Catedras() {
  const { getCatedras } = useServices();
  const [catedras, setCatedras] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCatedras = async () => {
      const res = await getCatedras();
      setCatedras(res);
    };

    setLoading(true);
    fetchCatedras();
    setLoading(false);
  }, []);

  if (!catedras || loading) return <Loading />;

  return (
    <div className="space-y-2">
      <div className="w-1/6 h-10 mx-auto">
        <Button>Agregar catedra</Button>
      </div>

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
              <td>
                <Button>✏️</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
