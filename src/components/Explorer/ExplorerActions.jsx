import React, { useState } from "react";
import Button from "../ui/Button";
import FileUploadForm from "./FileUploadForm";
import FolderCreationForm from "./FolderCreationForm";

export default function ExplorerActions({ path }) {
  const [showContent, setShowContent] = useState(null);

  if (showContent === "createFolder")
    return <FolderCreationForm setShowContent={setShowContent} path={path} />;

  if (showContent === "uploadFile")
    return <FileUploadForm setShowContent={setShowContent} path={path} />;

  return (
    <div>
      <div className=" flex w-96 space-x-6">
        <Button onClick={() => setShowContent("createFolder")}>
          Crear Carpeta
        </Button>
        <Button onClick={() => setShowContent("uploadFile")}>
          Subir Archivo
        </Button>
      </div>
    </div>
  );
}
