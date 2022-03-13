import React, { useState } from "react";
import { useServices } from "../context/servicesContext";
import { useAuth } from "../context/authContext";
import Button from "./ui/Button";

export default function AddComment({ switchMode, element }) {
  const { user } = useAuth();
  const { postComentario, getComentarioId } = useServices();
  const [value, SetValue] = useState(null);
  const handleSubmit = () => {
    const handlePostComentario = async () => {
      const comentarioId = await getComentarioId();
      await postComentario(element.nombre, comentarioId, value, user.email);
      switchMode("detail");
    };
    handlePostComentario();
  };

  return (
    <div className="border-l-2 p-10 border-slate-600 h-full w-full space-y-6 ">
      <div className="flex w-1/6 ">
        <Button onClick={() => switchMode("detail")}>X</Button>
      </div>
      <p>Ingrese su comentario aqui :</p>
      <div className="flex flex-col justify-center items-center h-1/2 w-full ">
        <textarea
          className="border border-gray-600 h-full w-full justify-start p-6"
          minLength={1}
          name="Text1"
          cols="40"
          rows="5"
          onChange={(e) => SetValue(e.target.value)}
        ></textarea>
      </div>
      <div className="h-10">
        <Button onClick={handleSubmit}>Enviar comentario</Button>
      </div>
    </div>
  );
}
