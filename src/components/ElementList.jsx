import { result } from "lodash";
import React from "react";
import FolderList from "./FolderList";
import FileList from "./FileList";

const elements = [
  {
    nombre: "archivo 1",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "archivo",
  },
  {
    nombre: "carpeta 1",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "carpeta",
  },
  {
    nombre: "carpeta 2",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "carpeta",
  },
  {
    nombre: "carpeta 3",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "carpeta",
  },
  {
    nombre: "carpeta 4",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "carpeta",
  },
  {
    nombre: "carpeta 5",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "carpeta",
  },
  {
    nombre: "carpeta 6",
    fechaModificacion: "fechaModificacion1",
    fechaCreacion: "fechaCreacion1",
    peso: "peso1",
    autor: "autor1",
    tags: ["tag1", "tag2"],
    tipo: "carpeta",
  },
  {
    nombre: "archivo 2",
    fechaModificacion: "fechaModificacion2",
    fechaCreacion: "fechaCreacion2",
    peso: "peso2",
    autor: "autor2",
    tags: ["tag1", "tag2"],
    tipo: "archivo",
  },
];

function elementosClasificados(elements) {
  const [archivos, carpetas] = elements.reduce(
    (result, e) => {
      result[e.tipo === "archivo" ? 0 : 1].push(e); // 0: archivos, 1: carpetas - Si el tipo es carpeta lo agrega a la lista de carpetas, sino a la lista de archivos
      return result;
    },
    [[], []] // Inicializamos el resultado
  );
  return [archivos, carpetas];
}
export default class ElementList extends React.Component {
  render() {
    const [archivos, carpetas] = elementosClasificados(elements);
    return (
      <>
        <FolderList folders={carpetas} />
        <div className="mt-6">
          <FileList files={archivos} />
        </div>
      </>
    );
  }
}
