/* eslint-disable react/prop-types */
import React from "react";
import FileIcon from "../icons/FileIcon";
import FolderIcon from "../icons/FolderIcon";
import PanelAcciones from "./PanelAcciones";
import Tag from "./Tag";

export default function Detail({ element, switchMode }) {
  if (!element) return <></>;

  const isFolder = element.listaElementos != null;

  return (
    <div>
      <div className="flex justify-center mb-10">
        {isFolder ? <FolderIcon /> : <FileIcon />}
      </div>
      <p className="mb-6 underline font-bold"> Descripcion </p>
      <div className="space-y-2">
        <p>Nombre : {element.nombre}</p>
        <p>Descripcion : {element.descripcion}</p>
        <p>Propietario : {element.propietario.nombre}</p>
        {!isFolder && <p>Extension : {element.extension}</p>}
        {!isFolder && <p>Catedra : {element.catedra.nombre}</p>}
        <p>Ruta : {element.path}</p>
        <p>Tamaño : {element.tamanio}</p>
        <p>Nombre : {element.nombre}</p>
        <p>Tamanio : {element.tamanio ? element.tamanio + "kb" : 0} </p>
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
        {element.palabrasClaves != null && element.palabrasClaves.length > 0 && (
          <>
            <p className="mb-4 mt-10 underline font-bold">Tags</p>
            <div className="my-6 flex flex-row flex-wrap">
              {element.palabrasClaves.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
            </div>
          </>
        )}
      </div>
      <p className="mt-10 mb-6 underline font-bold">Acciones</p>
      <PanelAcciones switchMode={switchMode} />
    </div>
  );
}
