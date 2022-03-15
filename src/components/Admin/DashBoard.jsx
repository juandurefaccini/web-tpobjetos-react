import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Button from "../ui/Button.jsx";

// TODO : USAR BOTONES COMPONENTES PARA EL DASHBOARD
export default function DashBoard() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto h-screen ">
      <div>
        <Button onClick={() => navigate("/home")}> Volver al home</Button>
        <Button onClick={() => navigate("/dashboard/catedras")}>
          Catedras
        </Button>
        <Button onClick={() => navigate("catedras")}> Usuarios</Button>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
