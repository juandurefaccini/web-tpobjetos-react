import React from "react";
import FileIcon from "../icons/FileIcon";
import FolderIcon from "../icons/FolderIcon";
import PanelAcciones from "./PanelAcciones";
import Tag from "./Tag";

export default function ElementPreview(props) {
  const { element } = props;
  return (
    <div>
      <div className="flex justify-center mb-10">
        {element.tipo === "archivo" ? <FileIcon /> : <FolderIcon />}
      </div>
      <p className="mb-6 underline"> Descripcion </p>
      {Object.keys(element).map((prop, index) => {
        if (prop !== "tags")
          return (
            <p className="my-2" key={index}>
              {prop} : {element[prop]}
            </p>
          );
        else
          return (
            <div key={index}>
              <p className="mb-4 mt-10 underline">Tags</p>
              <div className="my-6 flex flex-row flex-wrap">
                {element.tags.map((tag, index) => {
                  return <Tag key={index} tag={tag} />;
                })}
              </div>
            </div>
          );
      })}
      <p className="mt-10 mb-6 underline">Acciones</p>
      <PanelAcciones />
    </div>
  );
}
