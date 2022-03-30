import React from "react";
import { useFileExplorer } from "../context/fileExplorerContext";
import Explorer from "./Explorer/Explorer";
import Searcher from "./Searcher";

export default function Container() {
  const { mode } = useFileExplorer(); // Guardo el modo en el cual debe estar el contenedor

  return (
    <div className="shrink w-full">
      <div className="flex h-full w-full">
        {mode === "explorer" ? <Explorer default={"root"} /> : <Searcher />}
      </div>
    </div>
  );
}
