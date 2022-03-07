import React from "react";
import FolderIcon from "../icons/FolderIcon";

export default function Folder(props) {
  const { folder, handleClick } = props;

  return (
    <div
      className="flex flex-row m-6"
      onClick={() => handleClick(folder.nombre)}
    >
      <FolderIcon />
      <p className="h-auto self-center	ml-2 ">{folder.nombre}</p>
    </div>
  );
}
