/* eslint-disable react/prop-types */
import React from "react";
import FileIcon from "../icons/FileIcon";
import { useFileExplorer } from "../context/fileExplorerContext";

export default function File(props) {
  const { file } = props;

  const { setSelectedElement } = useFileExplorer();

  return (
    <div
      className="p-6 m-6"
      onClick={() => {
        setSelectedElement(file);
      }}
    >
      <FileIcon />
      <p className="my-6">{file.nombre}</p>
    </div>
  );
}
