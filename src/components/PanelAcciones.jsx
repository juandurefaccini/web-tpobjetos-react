import React from "react";
import ActionButton from "./ActionButton";
import { useServices } from "../context/servicesContext";
import { useAuth } from "../context/authContext";

export default function PanelAcciones({ switchMode, element }) {
  const { user } = useAuth();
  const { descargarArchivo, deleteCarpeta, deleteArchivo } = useServices();
  return (
    <div className="flex flex-row flex-wrap">
      <ActionButton
        onClick={() => {
          const isFolder = element.listaElementos != null;
          const pathElemento = element.path + ":" + element.nombre;
          if (isFolder) {
            deleteCarpeta(pathElemento, user);
          } else {
            deleteArchivo(pathElemento, user);
          }
          window.location.reload(false);
        }}
      >
        <span>Borrar</span>
      </ActionButton>
      <ActionButton
        onClick={() => {
          if (element.listaElementos == null) {
            descargarArchivo(element.path + ":" + element.nombre, user).then(
              (res) => {
                const file = new Blob([res], { type: "application/pdf" });
                const fileURL = URL.createObjectURL(file);
                console.log(fileURL);
                console.log(file);
                window.open(fileURL);
              }
            );
          }
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
