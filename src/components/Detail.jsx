/* eslint-disable react/prop-types */
import React from "react";
import { AiFillFolder as FolderIcon } from "react-icons/ai";
import { AiFillCloseCircle as CloseIcon } from "react-icons/ai";
import { AiFillFile as FileIcon } from "react-icons/ai";

import PanelAcciones from "./PanelAcciones";
import Tag from "./Tag";
const getTamanio = (element) => {
  const isFolder = element.listaElementos != null;

  if (isFolder) {
    // El elemento es una carpeta
    let suma = 0;
    element.listaElementos.forEach((el) => {
      suma += getTamanio(el);
    });
    return suma;
  } else {
    // el elemento es un archivo
    return element.tamanio;
  }
};

export default function Detail({ element, switchMode }) {
  if (!element) return <></>;

  const isFolder = element.listaElementos != null;

  return (
    <div className="text-sm">
      <div className="flex justify-center mb-10 ">
        {isFolder ? <FolderIcon size={80} /> : <FileIcon size={80} />}
      </div>
      <p className="mb-4 underline font-bold">Acciones</p>
      <PanelAcciones switchMode={switchMode} element={element} />
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
      <p className="mb-4 underline font-bold"> Descripcion </p>
      <div className="space-y-2">
        <p>Nombre : {element.nombre}</p>
        {!isFolder && <p>Descripcion : {element.descripcion}</p>}
        <p>Propietario : {element.propietario.nombre}</p>
        {!isFolder && <p>Extension : {element.extension}</p>}
        {!isFolder && <p>Catedra : {element.catedra.nombre}</p>}
        <p>Ruta : {element.path}</p>
        <p>Nombre : {element.nombre}</p>
        <p>Tamanio : {getTamanio(element) + "kb"} </p>
        <p>
          Fecha de creacion :{" "}
          {element.fechaCreacion.year +
            "/" +
            element.fechaCreacion.month +
            "/" +
            element.fechaCreacion.day}
        </p>
        <p>
          Fecha de modificacion :{" "}
          {element.fechaModificacion.year +
            "/" +
            element.fechaModificacion.month +
            "/" +
            element.fechaModificacion.day}
        </p>
      </div>
    </div>
  );
}
