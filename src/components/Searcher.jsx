import React, { useEffect } from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import { getElementoByFilter } from "../services/services";
import FileList from "./FileList";

export default function Searcher() {
  const { search, selectedElement } = useFileExplorer();
  const [searchOutput, setSearchOutput] = React.useState([]);

  useEffect(() => {
    loadElements(search, selectedElement);
  }, []);

  const loadElements = async (search, currentDirectory) => {
    const criteriaParam = search;
    const currentDirectoryName = currentDirectory.nombre;

    const res = await getElementoByFilter(criteriaParam, currentDirectoryName);
    setSearchOutput(res);
    // Pedir a api los elementos que coincidan con el search
  };

  if (searchOutput.length === 0) return <></>;

  return <FileList files={searchOutput} />;
}
