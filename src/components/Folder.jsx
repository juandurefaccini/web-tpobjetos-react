import React from "react";
import FolderIcon from "../icons/FolderIcon";

export default function Folder(props) {
  const { folder } = props;

  return (
    <div className="flex flex-row m-6">
      <FolderIcon />
      <p className="h-auto self-center	ml-2 ">{folder.nombre}</p>
    </div>
  );
}
