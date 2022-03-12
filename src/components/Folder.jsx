import React from "react";
import FolderIcon from "../icons/FolderIcon";

export default function Folder({ folder, onClickFolder }) {
  return (
    <div
      className="flex flex-row m-6"
      onClick={() => onClickFolder(folder.nombre)}
    >
      <FolderIcon />
      <p className="h-auto self-center	ml-2 ">{folder.nombre}</p>
    </div>
  );
}
