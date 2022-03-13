import React, { useState, useEffect } from "react";
import ElementList from "./ElementList";
import Button from "./ui/Button";
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
    <div className="space-y-1 flex flex-col h-full">
      <div className="flex h-12 my-4 space-x-6">
        <div className="w-48">
          <Button>Agregar carpeta</Button>
        </div>
        <div className="w-48">
          <Button>Agregar archivo</Button>
        </div>
      </div>

      <div className="w-full h-6 flex">
        Ruta actual:
        <p className="ml-6"> {folder.padre.trim()}</p>
      </div>

      <div className="w-48 h-6">
        {folder.padre !== "root" && (
          <Button
            onClick={async () => {
              const parentName = getParentDirectory(folder.padre);
              const parentElem = await getDirectorioByNombre(parentName);
              setFolder(parentElem);
            }}
          >
            Volver
          </Button>
        )}
      </div>

      <div className="h-full">
        <ElementList
          elements={folder.listaElementos}
          onClickFolder={async (folder) => {
            const folderElem = await getDirectorioByNombre(folder);
            setFolder(folderElem);
          }}
        />
      </div>
    </div>
  );
}
