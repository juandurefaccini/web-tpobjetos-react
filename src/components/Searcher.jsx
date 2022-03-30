import React, { useEffect } from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import { useServices } from "../context/servicesContext";
import FileList from "./Explorer/FileList";
import Alert from "./Alert";

function SearcherContainer({ children }) {
  return (
    <div className="flex justify-center items-center  w-full">{children}</div>
  );
}

export default function Searcher() {
  const { getArchivoFiltro } = useServices();
  const { search } = useFileExplorer();
  const [searchOutput, setSearchOutput] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    getArchivoFiltro(search, ":root")
      .then((res) => {
        setSearchOutput(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [search]);

  if (error) {
    return (
      <SearcherContainer>
        <Alert message={error} />
      </SearcherContainer>
    );
  }

  if (loading) {
    return <SearcherContainer>Cargando...</SearcherContainer>;
  }

  if (searchOutput == undefined || searchOutput.length === 0)
    return <SearcherContainer> No hay resultados </SearcherContainer>;

  return (
    <SearcherContainer>
      <FileList files={searchOutput} />
    </SearcherContainer>
  );
}
