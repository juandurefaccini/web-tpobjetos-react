import React, { useState } from "react";
import Detail from "./Detail";
import Comments from "./Comments";
import AddComment from "./AddComment";
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
    <div className="border-l-2 p-10 border-secondary  h-full overflow-y-auto shrink-0 w-1/4 h-full secondary">
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
      {mode === "addComment" && (
        <AddComment
          element={selectedElement}
          switchMode={(mode) => SetMode(mode)}
        />
      )}
    </div>
  );
}
