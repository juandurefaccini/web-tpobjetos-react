/* eslint-disable react/prop-types */
import React from "react";
import Button from "./ui/Button";

export default function Comment({ comment }) {
  const button =
    comment.comentarioInvalido === -1 ? (
      <p>Comentario resuelto</p>
    ) : (
      <Button>Resolver Comentario</Button>
    );

  return (
    <div className="border border-gray-400 rounded p-2 ">
      <p>Descripcion : {comment.descripcion}</p>
      <p>
        Autor : {comment.autor.mail} {comment.autor.nombre}
      </p>
      {button}
    </div>
  );
}
