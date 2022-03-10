import React, { useState } from "react";
import ElementList from "./ElementList";
import ElementPreview from "./ElementPreview";
import Header from "./Header";
import { FileContextProvider } from "../context/fileExplorerContext";
import { useFileExplorer } from "../context/fileExplorerContext";

function objectIsEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function Home() {
  const [search, setSearch] = useState(null);

  return (
    <FileContextProvider>
      <Header
        setSearch={(criteria, search) => setSearch({ criteria, search })}
      />
      <div className="h-full flex">
        <ElementList />

        <ElementPreview />
      </div>
    </FileContextProvider>
  );
}
