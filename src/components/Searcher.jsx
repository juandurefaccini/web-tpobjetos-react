import React, { useEffect } from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import { useServices } from "../context/servicesContext";
import FileList from "./Explorer/FileList";

export default function Searcher() {
  const { getArchivoFiltro } = useServices();
  const { search } = useFileExplorer();
  const [searchOutput, setSearchOutput] = React.useState([]);

  useEffect(() => {
    getArchivoFiltro(search, ":root").then((res) => {
      setSearchOutput(res);
    });
  }, [search]);

  if (searchOutput == undefined || searchOutput.length === 0)
    return <>No hay resultados</>;

  return <FileList files={searchOutput} />;
}
