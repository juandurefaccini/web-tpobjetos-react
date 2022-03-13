import React from "react";
// import icons
import SearchIcon from "../icons/SearchIcon";
import { useFileExplorer } from "../context/fileExplorerContext";

const reservedWords = ["autor", "tipo", "nombre"];

export default function SearchBar() {
  const { setSearch, setMode, setSelectedElement } = useFileExplorer();

  const [searchInput, setSearchInput] = React.useState("");
  const [searchCriteria, setSearchCriteria] = React.useState("");

  const getCriterios = () => {
    const criterios = searchCriteria.split(" "); // split by spaces
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

      return result + `${criteriaType}&${criteriaValue}`;
    }, "");

    return criteriaList;
  };

  const handleSubmit = () => {
    const criterios = searchInput.split(" ")
      ? getCriterios()
      : getCriterios() + `&nombre&${searchInput}`;
    setSearch(criterios);
    setMode("searcher");
  };

  return (
    <div className="mx-6 flex w-1/2 flex-shrink-0 h-full ">
      <div className="input-group relative flex flex-nowrap w-full ">
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(e) => setSearchCriteria(e.target.value)}
        />
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="mx-1 btn inline-block px-6 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-800  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out items-center"
          type="button"
          id="button-addon2"
          onClick={() => handleSubmit()}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
