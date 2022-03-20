/* eslint-disable react/prop-types */
import React from "react";
import FileIcon from "../../icons/FileIcon";
import { useFileExplorer } from "../../context/fileExplorerContext";

export default function File(props) {
  const { file } = props;

  const { setSelectedElement } = useFileExplorer();

  return (
    <div className="p-3 m-3 ">
      <div
        className="cursor-pointer"
        onClick={() => {
          setSelectedElement(file);
        }}
      >
        <FileIcon />
      </div>
      <p className="my-6">{file.nombre}</p>
    </div>
  );
}
