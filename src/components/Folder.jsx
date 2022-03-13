import React, { useRef } from "react";
import FolderIcon from "../icons/FolderIcon";
import { useFileExplorer } from "../context/fileExplorerContext";

export default function Folder({ folder, onClickFolder }) {
  const { setSelectedElement } = useFileExplorer();

  return (
    <div
      className="flex flex-row m-6"
      onDoubleClick={() => onClickFolder(folder.nombre)}
      onClick={() => setSelectedElement(folder)}
    >
      <FolderIcon />
      <p className="h-auto self-center	ml-2 ">{folder.nombre}</p>
    </div>
  );
}
