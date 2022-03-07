import React, { useEffect, useState } from "react";
import FolderList from "./FolderList";
import FileList from "./FileList";
import { axiosClient } from "../services/services";

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
export default function ElementList() {
  const [elementList, setElementList] = useState(null);
  const [error, setError] = useState(false);

  const loadElements = (folder) => {
    return axiosClient
      .get(`http://localhost:3500/directorio?nombre=${folder}`)
      .then((response) => {
        const elem = response.data[0];
        setElementList(elem.listaElementos);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
      });
  };

  useEffect(() => {
    loadElements("root");
  }, []);

  if (!elementList && !error) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const [files, folders] = elementosClasificados(elementList);

  return (
    <>
      <FolderList
        folders={folders}
        handleClick={(folder) => loadElements(folder)}
      />
      <div className="mt-6">
        <FileList files={files} />
      </div>
    </>
  );
}
