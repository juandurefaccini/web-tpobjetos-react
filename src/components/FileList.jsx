import React from "react";
import File from "./File";

export default function FileList(props) {
  const { files, setElementPreview } = props;
  return (
    <div>
      <h1 className="py-6 ">Archivos</h1>
      <div className="flex flex-row flex-wrap">
        {files.map((file, index) => {
          return (
            <File
              key={index}
              file={file}
              setElementPreview={setElementPreview}
            />
          );
        })}
      </div>
    </div>
  );
}
