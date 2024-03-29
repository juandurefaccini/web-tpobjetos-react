import React from "react";
import Folder from "./Folder";

export default function FolderList({ folders, onClickFolder }) {
  if (folders.length == 0) return <></>;

  return (
    <div>
      <div className="flex flex-row flex-wrap">
        {folders.map((folder, index) => {
          return (
            <Folder
              preview={true}
              key={index}
              folder={folder}
              onClickFolder={onClickFolder}
            />
          );
        })}
      </div>
    </div>
  );
}
