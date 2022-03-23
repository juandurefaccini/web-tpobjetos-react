import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useFileExplorer } from "../context/fileExplorerContext";
import SearchBar from "./SearchBar";
import Button from "./ui/Button";
import { IoIosPerson as ProfileIcon } from "react-icons/io";
import { RiLogoutBoxRLine as LogoutIcon } from "react-icons/ri";
import { FiHome as HomeIcon } from "react-icons/fi";
import { AiFillDashboard as DashboardIcon } from "react-icons/ai";

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
      <nav className="py-4 border-b-2  border-secondary shrink-0">
        <div className="px-4 flex space-x-5 flex-row content-center mx-auto items-center h-10">
          <p className="flex-shrink-0 h-full  flex items-center justify-center">
            Entrega final POO
          </p>

          <SearchBar />
          <div className="flex justify-end h-full space-x-4 grow">
            {mode != "explorer" && (
              <div className="w-24 h-full">
                <Button onClick={() => setMode("explorer")}>
                  <div className="w-full h-full flex justify-center items-center ">
                    <HomeIcon size={24} />
                  </div>
                </Button>
              </div>
            )}
            <div className="w-24 h-full">
              <Button onClick={() => navigate("/perfil")}>
                <div className="w-full h-full flex justify-center items-center ">
                  <ProfileIcon size={24} />
                </div>
              </Button>
            </div>
            <div className="w-24 h-full">
              <Button onClick={() => navigate("/dashboard")}>
                <div className="flex justify-center">
                  <DashboardIcon size={24} />
                </div>
              </Button>
            </div>
            <div className="w-24 h-full">
              <Button onClick={handleLogout}>
                <div className="flex justify-center">
                  <LogoutIcon size={24} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
