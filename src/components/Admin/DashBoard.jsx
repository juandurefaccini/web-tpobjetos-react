import React, { useState } from "react";
import Users from "./Users.jsx";
import Catedras from "./Catedras.jsx";

// TODO : USAR BOTONES COMPONENTES PARA EL DASHBOARD
export default function DashBoard() {
  // Opcion de panel
  const [option, setOption] = useState(null);

  return (
    <div className="container mx-auto flex justify-center self-center">
      <div className="flex flex-col space-y-6">
        <button className="px-4 py-1 border rounderd broder-gray-400 bg-gray-400 text-white">
          Volver al home
        </button>
        <div className="space-x-4 mx-auto">
          <button
            className="px-6 py-2 shadow-sm border border-gray-400"
            onClick={() => setOption("usuarios")}
          >
            Usuarios
          </button>
          <button
            className="px-6 py-2 shadow-sm border border-gray-400"
            onClick={() => setOption("catedras")}
          >
            Catedras
          </button>
        </div>

        {option === "usuarios" && <Users />}
        {option === "catedras" && <Catedras />}
      </div>
    </div>
  );
}
