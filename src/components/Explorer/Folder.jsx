import React from "react";
import { useFileExplorer } from "../../context/fileExplorerContext";
import { AiFillFolder as FolderIcon } from "react-icons/ai";

export default function Folder({ folder, onClickFolder }) {
  const { setSelectedElement } = useFileExplorer();

  return (
    <div className="flex flex-row m-6">
      <div
        className="cursor-pointer"
        onDoubleClick={() => onClickFolder(folder)}
        onClick={() => setSelectedElement(folder)}
      >
        <FolderIcon size={64} />
      </div>
      <p className="h-auto self-center	ml-2 ">{folder.nombre}</p>
    </div>
  );
}
