import React, { useEffect } from "react";
import { useFileExplorer } from "../context/fileExplorerContext";

export default function Searcher() {
  const { search, selectedElement } = useFileExplorer();

  useEffect(() => {
    loadElements(search, selectedElement);
  }, []);

  const loadElements = (search, currentDirectory) => {
    console.log(search);
    console.log(currentDirectory);

    // Pedir a api los elementos que coincidan con el search
  };

  return (
    <div>
      <h1>{selectedElement}</h1>
    </div>
  );
}
