import React from "react";
import ActionButton from "./ActionButton";

export default function PanelAcciones({ switchMode }) {
  return (
    <div className="flex flex-row flex-wrap">
      <ActionButton>
        <span>Borrar</span>
      </ActionButton>
      <ActionButton onClick={() => switchMode("comments")}>
        <span>Ver comentarios</span>
      </ActionButton>
      <ActionButton onClick={() => switchMode("addComment")}>
        <span>Agregar comentario</span>
      </ActionButton>
    </div>
  );
}
