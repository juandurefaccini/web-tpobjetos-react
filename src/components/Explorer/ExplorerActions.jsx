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
        <CreateFolderIcon
          className="cursor-pointer"
          size={40}
          onClick={() => setShowContent("createFolder")}
        />
        Crear carpeta
        <CreateFileIcon
          className="cursor-pointer ml-6"
          size={30}
          onClick={() => setShowContent("uploadFile")}
        />
        Subir archivo
      </div>
    </div>
  );
}
