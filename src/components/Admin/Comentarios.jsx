import React from "react";

export default function Comentarios(props) {
  const { comentarios } = props;
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
          {comentarios.map((comentario, index) => (
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
