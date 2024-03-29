import React, { createContext, useState, useContext, useEffect } from "react";
import { useServices } from "./servicesContext";

export const FileExplorerContext = createContext({});

export const FileContextProvider = ({ children }) => {
  const { getDirectorioBase } = useServices();
  const [selectedElement, setSelectedElement] = useState(null);
  const [mode, setMode] = useState("explorer");
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getDirectorioBase().then((elem) => setSelectedElement(elem));
  }, []);

  return (
    <FileExplorerContext.Provider
      value={{
        selectedElement,
        setSelectedElement,
        search,
        setSearch,
        setMode,
        mode,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
};

export const useFileExplorer = () => {
  const context = useContext(FileExplorerContext);
  if (!context)
    throw new Error("useFileExplorer must be used within a DataProvider");
  return context;
};
