import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useFileExplorer } from "../context/fileExplorerContext";
import SearchBar from "./SearchBar";
import Button from "./ui/Button";

export default function Header() {
  const { setMode, mode } = useFileExplorer();
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <nav className="py-4 border-b-2  border-slate-600">
        <div className="px-12 flex space-x-5 flex-row content-center justify-between mx-auto items-center h-10">
          <p className="flex-shrink-0 h-full  flex items-center justify-center">
            Gil Drive
          </p>
          {mode != "explorer" && (
            <Button onClick={() => setMode("explorer")}>
              Volver al explorador{" "}
            </Button>
          )}

          <SearchBar />
          <Button onClick={() => navigate("/perfil")}> Mi perfil </Button>
          <Button onClick={() => navigate("/dashboard")}>Dashboard </Button>
          <Button onClick={handleLogout}> Sign Out</Button>
        </div>
      </nav>
    </>
  );
}
