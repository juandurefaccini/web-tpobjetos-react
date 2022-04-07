import React from "react";
import ActionButton from "./ActionButton";
import { useServices } from "../context/servicesContext";
import { useAuth } from "../context/authContext";

import { BiCommentAdd as AddCommentIcon } from "react-icons/bi";
import { BiCommentDetail as ViewCommentIcons } from "react-icons/bi";
import { HiDownload as DownloadIcon } from "react-icons/hi";
import { FaTrash as DeleteIcon } from "react-icons/fa";

import Alert from "./Alert";

export default function PanelAcciones({ switchMode, element }) {
  const { user } = useAuth();
  const { descargarArchivo, deleteCarpeta, deleteArchivo } = useServices();
  const [error, setError] = React.useState(false);

  const isFolder = element.listaElementos != null;

  return (
    <div className="w-full">
      <div className="w-full">{error && <Alert message={error} />}</div>
      <div className="flex flex-row flex-wrap">
        <ActionButton
          onClick={() => {
            const pathElemento = element.path + ":" + element.nombre;
            if (isFolder) {
              deleteCarpeta(pathElemento, user)
                .then(() => window.location.reload(false))
                .catch((err) => setError(err.message));
            } else {
              deleteArchivo(pathElemento, user)
                .then(() => window.location.reload(false))
                .catch((err) => setError(err.message));
            }
          }}
        >
          <DeleteIcon />
        </ActionButton>
        {!isFolder && (
          <ActionButton
            onClick={() => {
              if (element.listaElementos == null) {
                descargarArchivo(element.path + ":" + element.nombre, user);
              }
            }}
          >
            <DownloadIcon />
          </ActionButton>
        )}
        <ActionButton onClick={() => switchMode("comments")}>
          <ViewCommentIcons />
        </ActionButton>
        <ActionButton onClick={() => switchMode("addComment")}>
          <AddCommentIcon />
        </ActionButton>
      </div>
    </div>
  );
}
