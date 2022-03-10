import React from "react";
import FileIcon from "../icons/FileIcon";
import FolderIcon from "../icons/FolderIcon";
import PanelAcciones from "./PanelAcciones";
import { useFileExplorer } from "../context/fileExplorerContext";
import Tag from "./Tag";

export default function ElementPreview() {
  const { selectedElement } = useFileExplorer();

  if (!selectedElement) return <></>;

  return (
    <div className="border-l-2 p-10 border-slate-600">
      <div className="flex justify-center mb-10">
        {selectedElement.tipo === "archivo" ? <FileIcon /> : <FolderIcon />}
      </div>
      <p className="mb-6 underline"> Descripcion </p>
      <div className="space-y-2">
        <p>Nombre : {selectedElement.nombre}</p>
        <p>Propietario : {selectedElement.propietario.nombre}</p>
        <p>Ruta : {selectedElement.padre}</p>
        <p>Tipo : {selectedElement.tipo}</p>
        <p>Tamaño : {selectedElement.tamanio}</p>
        <p>Nombre : {selectedElement.nombre}</p>
        <p>
          Fecha de creacion :{" "}
          {selectedElement.fechaCreacion.year +
            selectedElement.fechaCreacion.month +
            selectedElement.fechaCreacion.day}
        </p>
        <p>
          Fecha de modificacion :{" "}
          {selectedElement.fechaModificacion.year +
            selectedElement.fechaModificacion.month +
            selectedElement.fechaModificacion.day}
        </p>
        {selectedElement.palabrasClaves.length > 0 && (
          <>
            <p className="mb-4 mt-10 underline">Tags</p>
            <div className="my-6 flex flex-row flex-wrap">
              {selectedElement.palabrasClaves.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
            </div>
          </>
        )}
      </div>
      <p className="mt-10 mb-6 underline">Acciones</p>
      <PanelAcciones />
    </div>
  );
}
