import React from "react";
import ActionButton from "./ActionButton";

export default function PanelAcciones({ switchMode }) {
  return (
    <div className="flex flex-row flex-wrap">
      <ActionButton>
        <span>Download</span>
      </ActionButton>
      <ActionButton>
        <span>Borrar</span>
      </ActionButton>
      <ActionButton onClick={() => switchMode("comments")}>
        <span>Ver comentarios</span>
      </ActionButton>
    </div>
  );
}
