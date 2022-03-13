import React, { useEffect } from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import { getElementoByFilter } from "../services/services";
import FileList from "./FileList";

function getParentDirectory(elementName) {
  return elementName.split(":").slice(-2)[0];
}

export default function Searcher() {
  const { search, selectedElement } = useFileExplorer();
  const [searchOutput, setSearchOutput] = React.useState([]);

  useEffect(() => {
    const elem = selectedElement;
    const parentElem = getParentDirectory(elem.padre);
    loadElements(search, parentElem);
  }, [search]);

  const loadElements = async (search, currentDirectoryName) => {
    const criteriaParam = search;

    const res = await getElementoByFilter(criteriaParam, currentDirectoryName);

    setSearchOutput(res);
    // Pedir a api los elementos que coincidan con el search
  };

  if (searchOutput == undefined || searchOutput.length === 0)
    return <>No hay resultados</>;

  return <FileList files={searchOutput} />;
}
