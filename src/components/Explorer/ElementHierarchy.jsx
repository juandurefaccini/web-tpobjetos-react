import React from "react";

export default function ElementHierarchy({
  hierarchy,
  setCurrentDirectory,
  currentDirectory,
}) {
  const handleClick = (element) => {
    if (element.listaElementos) setCurrentDirectory(element);
  };

  const renderElement = (element) => {
    return (
      <div className="pl-4 w-full">
        <div
          className={`${element.listaElementos && "cursor-pointer"}`}
          onClick={() => handleClick(element)}
        >
          {element.nombre}
          {currentDirectory.nombre == element.nombre && <>◄</>}
        </div>
        {element.listaElementos &&
          element.listaElementos.map((element) => (
            <div key={element.nombre}>{renderElement(element)}</div>
          ))}
      </div>
    );
  };

  if (hierarchy === null || !hierarchy)
    return <div className="border-r h-full">Loading...</div>;

  return (
    <div className="border-r h-full text-sm ">
      <div className="p-4">{renderElement(hierarchy)}</div>
    </div>
  );
}
