import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const navigate = useNavigate();

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="py-4 border-b-2  border-slate-600">
        <div className="px-12 flex flex-row content-center justify-between mx-auto items-center">
          <h1 className="flex-shrink-0">Gil Drive</h1>
          <SearchBar />
          <ul className="flex-shrink-0 list-none">
            <li className="inline mx-6 px-2 ">Hola @{user.email}</li>
            <li>
              <button onClick={handleLogout}>Sign Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
