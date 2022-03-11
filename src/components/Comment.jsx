import React from "react";

export default function Comment({ comment, key }) {
  return (
    <div key={key} className="border border-gray-400 rounded p-2 ">
      <p>Descripcion : {comment.descripcion}</p>
      <p>
        Autor : {comment.autor.mail} {comment.autor.nombre}
      </p>
    </div>
  );
}
