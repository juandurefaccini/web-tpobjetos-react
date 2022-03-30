import React, { useState, useEffect } from "react";
import ElementList from "./ElementList";
import Button from "../ui/Button";

import { useServices } from "../../context/servicesContext";
import ExplorerActions from "./ExplorerActions";
import ElementHierarchy from "./ElementHierarchy";
import Alert from "../Alert";

function breadthFirstSearch(tree) {
  const result = [];
  const queue = [tree];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    if (node.children) {
      queue.push(...node.children);
    }
  }
  return result;
}

function getParentDirectory(fileHierarchy, parentPath) {
  console.log("getParentDirectory", fileHierarchy);
  const parentDirectory = breadthFirstSearch(parentPath).pop();
  return parentDirectory;
}

// COMPONENTE PRINCIPAL
export default function Explorer() {
  const { getDirectorioBase } = useServices();

  const [fileHierarchy, setFileHierarchy] = useState(null); // Guardo el arbol de directorios
  const [currentDirectory, setCurrentDirectory] = useState(null); // Guardo el directorio actual para ir modificandolo a medida que voy avanzando en el arbol de directorios
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDirectorioBase()
      .then((res) => {
        setFileHierarchy(res);
        setCurrentDirectory(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error)
    return (
      <div className="w-full h-full justify-center">
        <Alert message={error} />
      </div>
    );

  if (loading)
    return <div className="w-full h-full justify-center">Loading</div>;

  if (!fileHierarchy) return <></>;

  return (
    <div className="flex flex-row w-full space-x-6 ">
      <div className="w-1/5 h-full shrink-0 ">
        {/* TODO : RESOLVER QUE SE APRIETE EL ARBOL DE ARCHIVOS */}
        <ElementHierarchy
          hierarchy={fileHierarchy}
          setCurrentDirectory={setCurrentDirectory}
          currentDirectory={currentDirectory}
        />
      </div>
      <div className="space-y-1 flex flex-col p-4 h-full w-full overflow-y-auto">
        <div className="w-full">
          <ExplorerActions
            path={currentDirectory.path + ":" + currentDirectory.nombre}
          />
        </div>
        <div className="w-full h-6 flex ">
          Ruta actual:
          <p className="ml-6">
            {currentDirectory.path + ":" + currentDirectory.nombre}
          </p>
        </div>

        <div className="h-full">
          <ElementList
            elements={currentDirectory.listaElementos}
            onClickFolder={async (folder) => {
              setCurrentDirectory(folder);
            }}
          />
        </div>
      </div>
    </div>
  );
}
