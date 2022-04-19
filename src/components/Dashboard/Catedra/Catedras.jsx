import React from "react";
import { Outlet } from "react-router-dom";

export default function Catedras() {
  return (
    <div className="container mx-auto border p-6 ">
      <p className="text-center">Dashboard de catedras</p>
      <Outlet />{" "}
      {/* Outlet es el componente encargado de renderizar la subruta */}
    </div>
  );
}
