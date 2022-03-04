import React from "react";
import ElementList from "./ElementList";
import ElementPreview from "./ElementPreview";
import Header from "./Header";

const element = {
  nombre: "archivo 1",
  fechaModificacion: "fechaModificacion1",
  fechaCreacion: "fechaCreacion1",
  peso: "peso1",
  autor: "autor1",
  tipo: "archivo",
  tags: ["agropecuaria", "fabrica de objetos", "dificil"],
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-full flex">
        <div className="p-10">
          <ElementList />
        </div>

        <div className="border-l-2  p-10 border-slate-600 w-1/4 flex-grow-0 ">
          <ElementPreview element={element} />
        </div>
      </div>
    </>
  );
}
