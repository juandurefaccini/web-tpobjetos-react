import React from "react";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { useFileExplorer } from "../context/fileExplorerContext";

const reservedWords = ["autor", "tipo", "contienenombre", "contienepalabra"];

export default function SearchBar() {
  const { setSearch, setMode } = useFileExplorer();

  const [searchCriteria, setSearchCriteria] = React.useState("");

  const getCriterios = () => {
    const criterios = searchCriteria.split(" "); // Separar los criterios de la busqueda, identificandolos por los espacios
    const criteriaList = criterios.reduce((result, value) => {
      const criteriaType = value.split(":")[0]; // Obtengo el tipo de criterio de busqueda
      const criteriaValue = value.split(":")[1]; // Obtengo el valor del criterio de busqueda

      if (
        !reservedWords.includes(criteriaType) ||
        criteriaValue == undefined ||
        criteriaValue == null ||
        criteriaValue.length == 0
      )
        return result;

      return result + `${criteriaType}&${criteriaValue}&`;
    }, "");

    return criteriaList;
  };

  const handleSubmit = () => {
    let criterios = getCriterios();
    if (criterios.length == 0 && searchCriteria)
      criterios = `contienenombre&${searchCriteria}`;
    setSearch(criterios);
    setMode("searcher");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="mx-6 flex w-1/2 flex-shrink-0 h-full ">
      <div className="input-group relative flex flex-nowrap w-full space-x-2">
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(e) => setSearchCriteria(e.target.value)}
          onKeyPress={(e) => handleKeypress(e)}
        />

        <button
          className="mx-1 btn inline-block px-4 bg-primary border border-secondary text-white font-medium text-xs leading-tight uppercase rounded "
          type="button"
          id="button-addon2"
          onClick={() => handleSubmit()}
        >
          <SearchIcon size={24} />
        </button>
      </div>
    </div>
  );
}
