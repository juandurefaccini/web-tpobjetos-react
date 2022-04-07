/* eslint-disable react/prop-types */
import React from "react";
import { useServices } from "../context/servicesContext";
import { useAuth } from "../context/authContext";
import Button from "./ui/Button";

export default function Comment({ comment }) {
  const { user } = useAuth();
  const { deleteComentario } = useServices();

  const handleDelete = () => {
    deleteComentario(comment.id, user)
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };

  return (
    <div className="border border-gray-400 rounded p-2 ">
      <p>Descripcion : {comment.descripcion}</p>
      <p>
        Autor : {comment.autor.mail} {comment.autor.nombre}
      </p>
      <Button onClick={() => handleDelete()}>Resolver Comentario</Button>
    </div>
  );
}
