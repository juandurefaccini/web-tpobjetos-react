import React, { createContext, useState, useContext } from "react";

export const FileExplorerContext = createContext({});

export const FileContextProvider = ({ children }) => {
  const [selectedElement, setSelectedElement] = useState(null);

  console.log("FileContextProvider | selectedElement :", selectedElement);

  return (
    <FileExplorerContext.Provider
      value={{ selectedElement, setSelectedElement }}
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
