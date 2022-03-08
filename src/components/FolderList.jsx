import React from "react";
import Folder from "./Folder";

export default function FolderList(props) {
  const { folders, handleClick } = props;

  return (
    <div>
      <h1 className="py-6">Carpetas</h1>
      <div className="flex flex-row flex-wrap">
        {folders.map((folder, index) => {
          return (
            <Folder
              preview={true}
              key={index}
              folder={folder}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
