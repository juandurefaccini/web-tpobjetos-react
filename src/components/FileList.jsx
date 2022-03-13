/* eslint-disable react/prop-types */
import React from "react";
import File from "./File";

export default function FileList({ files }) {
  if (files.length == 0) return <></>;

  return (
    <div className="flex flex-col grow-0 overflow-clip">
      <h1 className="py-2">Archivos</h1>
      <div className="flex flex-row flex-wrap  ">
        {files.map((file, index) => {
          return <File key={index} file={file} />;
        })}
      </div>
    </div>
  );
}
