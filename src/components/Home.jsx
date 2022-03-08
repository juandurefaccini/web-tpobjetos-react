import React, { useState } from "react";
import ElementList from "./ElementList";
import ElementPreview from "./ElementPreview";
import Header from "./Header";

export default function Home() {
  const [elementPreview, setElementPreview] = useState(null);
  const [search, setSearch] = useState(null);

  return (
    <>
      <Header
        setSearch={(criteria, search) => setSearch({ criteria, search })}
      />
      <div className="h-full flex">
        <ElementList setElementPreview={(file) => setElementPreview(file)} />

        {elementPreview && <ElementPreview element={elementPreview} />}
      </div>
    </>
  );
}
