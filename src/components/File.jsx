import React from "react";
import FileIcon from "../icons/FileIcon";

export default function File(props) {
  const { file } = props;

  return (
    <div className="p-6 m-6">
      <FileIcon />
      <p className="my-6">{file.nombre}</p>
    </div>
  );
}
