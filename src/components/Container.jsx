import React from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import Explorer from "./Explorer";
import Searcher from "./Searcher";

export default function Container() {
  const { mode } = useFileExplorer(); // Guardo el modo en el cual debe estar el contenedor

  return (
    <div className="p-10 flex-shrink-0 w-3/4">
      {mode === "explorer" ? <Explorer default={"root"} /> : <Searcher />}
    </div>
  );
}
