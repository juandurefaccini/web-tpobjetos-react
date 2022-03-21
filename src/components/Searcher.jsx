import React, { useEffect } from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import { useServices } from "../context/servicesContext";
import FileList from "./Explorer/FileList";

export default function Searcher() {
  const { getArchivoFiltro } = useServices();
  const { search } = useFileExplorer();
  const [searchOutput, setSearchOutput] = React.useState([]);

  useEffect(() => {
    /*     loadElements(search, ":root"); // TODO : SACAR CONSTANTE
     */ getArchivoFiltro(search, ":root").then((res) => {
      setSearchOutput(res);
    });
  }, [search]);

  /* const loadElements = async (search, currentDirectoryName) => {
    const criteriaParam = search;

    const res = await getArchivoFiltro(criteriaParam, currentDirectoryName);

    setSearchOutput(res);
    // Pedir a api los elementos que coincidan con el search
  }; */

  if (searchOutput == undefined || searchOutput.length === 0)
    return <>No hay resultados</>;

  return <FileList files={searchOutput} />;
}
