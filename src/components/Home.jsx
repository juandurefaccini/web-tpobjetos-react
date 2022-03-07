import React, { useState } from "react";
import { useAuth } from "../context/authContext";
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
  const [elementPreview, setElementPreview] = useState(null);

  return (
    <>
      <Header />
      <div className="h-full flex">
        <ElementList setElementPreview={(file) => setElementPreview(file)} />

        {elementPreview && <ElementPreview element={elementPreview} />}
      </div>
    </>
  );
}
