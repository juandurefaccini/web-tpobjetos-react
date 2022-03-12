/* eslint-disable react/prop-types */
import React from "react";
import FileIcon from "../icons/FileIcon";
import FolderIcon from "../icons/FolderIcon";
import PanelAcciones from "./PanelAcciones";
import Tag from "./Tag";

export default function Detail({ element, switchMode }) {
  console.log("Detail selectedElement ", element);

  if (!element) return <></>;

  return (
    <div className="border-l-2 p-10 border-slate-600 h-full">
      <div className="flex justify-center mb-10">
        {element.tipo === "archivo" ? <FileIcon /> : <FolderIcon />}
      </div>
      <p className="mb-6 underline"> Descripcion </p>
      <div className="space-y-2">
        <p>Nombre : {element.nombre}</p>
        <p>Propietario : {element.propietario.nombre}</p>
        <p>Ruta : {element.padre}</p>
        <p>Tipo : {element.tipo}</p>
        <p>Tamaño : {element.tamanio}</p>
        <p>Nombre : {element.nombre}</p>
        <p>
          Fecha de creacion :{" "}
          {element.fechaCreacion.year +
            element.fechaCreacion.month +
            element.fechaCreacion.day}
        </p>
        <p>
          Fecha de modificacion :{" "}
          {element.fechaModificacion.year +
            element.fechaModificacion.month +
            element.fechaModificacion.day}
        </p>
        {element.palabrasClaves.length > 0 && (
          <>
            <p className="mb-4 mt-10 underline">Tags</p>
            <div className="my-6 flex flex-row flex-wrap">
              {element.palabrasClaves.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
            </div>
          </>
        )}
      </div>
      <p className="mt-10 mb-6 underline">Acciones</p>
      <PanelAcciones switchMode={switchMode} />
    </div>
  );
}