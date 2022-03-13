import React from "react";
import FolderList from "./FolderList";
import FileList from "./FileList";

function elementosClasificados(elements) {
  const [carpetas, archivos] = elements.reduce(
    (result, e) => {
      result[e.tipo === "carpeta" ? 0 : 1].push(e); // 0: archivos, 1: carpetas - Si el tipo es carpeta lo agrega a la lista de carpetas, sino a la lista de archivos
      return result;
    },
    [[], []] // Inicializamos el resultado
  );
  return [archivos, carpetas];
}

export default function ElementList({ elements, onClickFolder }) {
  if (elements.length == 0) return <></>;

  const [files, folders] = elementosClasificados(elements);

  return (
    <div className="w-full h-full ">
      <div className="space-y-6 grow-0 overflow-auto h-full">
        <FolderList folders={folders} onClickFolder={onClickFolder} />
        <FileList files={files} />
      </div>
    </div>
  );
}
