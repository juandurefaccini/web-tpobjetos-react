import React, { useState } from "react";
import { useServices } from "../context/servicesContext";
import Button from "./ui/Button";
import { AiFillCloseCircle as CloseIcon } from "react-icons/ai";

export default function AddComment({ switchMode, element }) {
  const { postComentario } = useServices();
  const [value, SetValue] = useState(null);
  const handleSubmit = () => {
    const elementPath = element.path + ":" + element.nombre;
    postComentario(elementPath, value).then(switchMode("detail"));
  };

  return (
    <div>
      <div className="flex justify-end">
        <CloseIcon
          className="cursor-pointer"
          onClick={() => switchMode("detail")}
          size={32}
        />
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
