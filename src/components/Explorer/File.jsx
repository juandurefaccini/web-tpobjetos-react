/* eslint-disable react/prop-types */
import React from "react";
import { useFileExplorer } from "../../context/fileExplorerContext";
import { AiFillFile as FileIcon } from "react-icons/ai";

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
        <FileIcon size={64} />
      </div>
      <p className="my-6">{file.nombre}</p>
    </div>
  );
}
