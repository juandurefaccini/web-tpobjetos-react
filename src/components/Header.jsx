import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

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
        <div className="bg-green-400 px-12 flex flex-row content-center justify-between mx-auto items-center h-10">
          <p className="flex-shrink-0 h-full bg-fuchsia-300 flex items-center justify-center">
            Gil Drive
          </p>
          <SearchBar />
          <span className="inline mx-6 px-2 bg-red-200 h-full flex items-center justify-center">
            {user.displayName}
          </span>
          <button
            className="bg-gray-500 text-white inline rounded h-full px-6 mx-1 btn font-medium "
            onClick={handleLogout}
          >
            Sign Out
          </button>

          <button
            className="bg-gray-500 text-white inline rounded h-full px-6 mx-1 btn font-medium "
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>
      </nav>
    </>
  );
}
