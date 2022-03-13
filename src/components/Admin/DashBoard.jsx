import React, { useState } from "react";
import Users from "./Users.jsx";
import Catedras from "./Catedras.jsx";
import Ranking from "./Ranking.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button.jsx";

// TODO : USAR BOTONES COMPONENTES PARA EL DASHBOARD
export default function DashBoard() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto h-screen ">
      <div className="flex flex-col items-center justify-center h-full  w-full mx-auto space-y-5 ">
        <div className="h-10 w-auto">
          <Button onClick={() => navigate("/home")}> Volver al home</Button>
        </div>

        <div className="space-x-4 w-full flex ">
          <div className="w-1/2 ">
            <Users />
          </div>
          <div className="w-1/2 border border-gray-500">
            <Catedras />
          </div>
        </div>
      </div>
    </div>
  );
}
