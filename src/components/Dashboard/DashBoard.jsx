import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("catedras");
  }, []);

  return (
    <div className="w-full">
      <div className="flex h-16 w-full bg-secondary justify-around items-center text-primary text-lg">
        <div className="cursor-pointer" onClick={() => navigate("/home")}>
          Volver al home
        </div>
        <div className="cursor-pointer" onClick={() => navigate("catedras")}>
          Catedras
        </div>
        <div className="cursor-pointer" onClick={() => navigate("usuarios")}>
          Usuarios
        </div>
      </div>
      <div className="container mx-auto h-screen ">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
