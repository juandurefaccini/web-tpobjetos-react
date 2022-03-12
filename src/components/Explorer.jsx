import React, { useState, useEffect } from "react";
import ElementList from "./ElementList";
import { getDirectorioByNombre } from "../services/services";

function getParentDirectory(elementName) {
  return elementName.split(":").slice(-2)[0];
}

// COMPONENTE PRINCIPAL
export default function Explorer() {
  // HOOKS
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    const init = async () => {
      const elem = await getDirectorioByNombre("root");
      setFolder(elem);
    };
    init();
  }, []);

  if (!folder) return <></>;

  return (
    <>
      <p>Ruta actual: {folder.padre.trim()}</p>
      {folder.padre !== "root" && (
        <button
          className="border border-gray-400 px-6 py-1 rounded bg-gray-400 text-white"
          onClick={async () => {
            const parentName = getParentDirectory(folder.padre);
            const parentElem = await getDirectorioByNombre(parentName);
            setFolder(parentElem);
          }}
        >
          Volver
        </button>
      )}
      <ElementList
        elements={folder.listaElementos}
        onClickFolder={async (folder) => {
          const folderElem = await getDirectorioByNombre(folder);
          setFolder(folderElem);
        }}
      />
    </>
  );
}
