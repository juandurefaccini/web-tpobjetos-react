/* eslint-disable react/prop-types */
import React from "react";
import { useServices } from "../context/servicesContext";
import Button from "./ui/Button";

export default function Comment({ comment }) {
  const { deleteComentario } = useServices();

  console.log("Comment", comment);

  return (
    <div className="border border-gray-400 rounded p-2 ">
      <p>Descripcion : {comment.descripcion}</p>
      <p>
        Autor : {comment.autor.mail} {comment.autor.nombre}
      </p>
      <Button onClick={() => deleteComentario(comment.id)}>
        Resolver Comentario
      </Button>
    </div>
  );
}
