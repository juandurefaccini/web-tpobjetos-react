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

export default function ElementList(props) {
  const { setElementPreview } = props;

  const [element, setElement] = useState(null);
  const [error, setError] = useState(false);

  const loadElements = (folder) => {
    return axiosClient
      .get(`/directorio?carpetaBase=${folder}`)
      .then((response) => {
        const elem = response.data;
        setElement(elem);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
      });
  };

  const handleGoParentDirectory = () => {
    const padre = element.padre.split(":").slice(-2)[0];
    loadElements(padre);
  };

  useEffect(() => {
    loadElements("root");
  }, []);

  console.log("element: ", element);

  if (!element && !error) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const [files, folders] = elementosClasificados(element.listaElementos);

  return (
    <div className="p-10 flex-shrink-0 w-3/4">
      <p>Ruta actual: {element.padre.trim() || "base"}</p>
      {element.padre.trim() /* Flaso si es vacio */ && (
        <button
          className="border border-gray-400 px-6 py-1 rounded bg-gray-400 text-white"
          onClick={handleGoParentDirectory}
        >
          Volver
        </button>
      )}
      {element.listaElementos.length > 0 && (
        <>
          <FolderList
            folders={folders}
            handleClick={(folder) => loadElements(folder)}
          />
          <div className="mt-6">
            <FileList files={files} setElementPreview={setElementPreview} />
          </div>
        </>
      )}
    </div>
  );
}
