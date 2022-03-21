import React from "react";
import ActionButton from "./ActionButton";
import { useServices } from "../context/servicesContext";

export default function PanelAcciones({ switchMode, element }) {
  const { descargarArchivo } = useServices();
  return (
    <div className="flex flex-row flex-wrap">
      <ActionButton>
        <span>Borrar</span>
      </ActionButton>
      <ActionButton
        onClick={() => {
          if (element.listaElementos == null)
            descargarArchivo(element.path + ":" + element.nombre);
        }}
      >
        <span>Descargar</span>
      </ActionButton>
      <ActionButton onClick={() => switchMode("comments")}>
        <span>Ver comentarios</span>
      </ActionButton>
      <ActionButton onClick={() => switchMode("addComment")}>
        <span>Agregar comentario</span>
      </ActionButton>
    </div>
  );
}
