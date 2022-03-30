import React, { useState } from "react";
import Button from "../ui/Button";
import FileUploadForm from "./FileUploadForm";
import FolderCreationForm from "./FolderCreationForm";
import { AiFillFolderAdd as CreateFolderIcon } from "react-icons/ai";
import { AiFillFileAdd as CreateFileIcon } from "react-icons/ai";

export default function ExplorerActions({ path }) {
  const [showContent, setShowContent] = useState(null);

  if (showContent === "createFolder")
    return <FolderCreationForm setShowContent={setShowContent} path={path} />;

  if (showContent === "uploadFile")
    return <FileUploadForm setShowContent={setShowContent} path={path} />;

  return (
    <div className="h-12">
      <div className=" flex w-96 space-x-6 items-center">
        <div
          onClick={() => setShowContent("createFolder")}
          className="flex items-center cursor-pointer"
        >
          <CreateFolderIcon className="cursor-pointer" size={40} />
          Crear carpeta
        </div>
        <div
          onClick={() => setShowContent("uploadFile")}
          className="flex items-center cursor-pointer"
        >
          <CreateFileIcon className="cursor-pointer ml-6" size={30} />
          Subir archivo
        </div>
      </div>
    </div>
  );
}
