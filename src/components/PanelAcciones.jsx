import React from "react";
import DownloadIcon from "../icons/DownloadIcon";
import TrashIcon from "../icons/TrashIcon";
import ActionButton from "./ActionButton";
import CommentIcon from "../icons/CommentIcon";

export default function PanelAcciones() {
  return (
    <div className="flex flex-row flex-wrap">
      <ActionButton>
        <DownloadIcon />
        <span>Download</span>
      </ActionButton>
      <ActionButton>
        <TrashIcon />
        <span>Borrar</span>
      </ActionButton>
      <ActionButton>
        <CommentIcon />
        <span>Agregar Comentario</span>
      </ActionButton>
      <ActionButton>
        <CommentIcon />
        <span>Ver Comentarios</span>
      </ActionButton>
    </div>
  );
}
