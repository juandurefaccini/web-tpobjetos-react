import React from "react";

export default function Catedras(props) {
  const { catedras } = props;

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
