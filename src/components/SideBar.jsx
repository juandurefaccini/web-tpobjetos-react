import React, { useState } from "react";
import Detail from "./Detail";
import Comments from "./Comments";
import { useFileExplorer } from "../context/fileExplorerContext";

export default function SideBar() {
  const { selectedElement } = useFileExplorer();
  const [mode, SetMode] = useState("detail");

  if (
    selectedElement == null ||
    !selectedElement ||
    selectedElement.nombre == "root"
  )
    return <></>;

  return (
    <div className="w-full">
      {mode === "detail" && (
        <Detail
          element={selectedElement}
          switchMode={(mode) => SetMode(mode)}
        />
      )}
      {mode === "comments" && (
        <Comments
          element={selectedElement}
          switchMode={(mode) => SetMode(mode)}
        />
      )}
    </div>
  );
}
