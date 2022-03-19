import React, { useState, useEffect } from "react";
import ElementList from "./ElementList";
import Button from "./ui/Button";

import { useServices } from "../context/servicesContext";

function getParentDirectory(elementName) {
  return elementName.split(":").slice(-2)[0];
}

// COMPONENTE PRINCIPAL
export default function Explorer() {
  const { getDirectorioBase, getDirectorio } = useServices();

  const [folder, setFolder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const elem = await getDirectorioBase();
      setFolder(elem);
      setLoading(false);
    };
    init();
  }, []);

  if (loading)
    return <div className="w-full h-full justify-center">Loading</div>;

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
        <p className="ml-6"> {folder.path.trim()}</p>
      </div>

      <div className="w-48 h-6">
        {folder.padre !== "root" && (
          <Button
            onClick={async () => {
              const parentName = getParentDirectory(folder.padre);
              const parentElem = await getDirectorio(parentName);
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
            const folderElem = await getDirectorio(folder);
            setFolder(folderElem);
          }}
        />
      </div>
    </div>
  );
}
