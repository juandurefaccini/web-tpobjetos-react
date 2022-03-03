import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <nav className="py-4 border-b-2  border-slate-600">
        <div className="px-12 flex flex-row content-center justify-between mx-auto items-center">
          <h1 className="flex-shrink-0">Gil Drive</h1>
          <SearchBar />
          <ul className="flex-shrink-0 list-none">
            <li className="inline mx-6 px-2 ">Hola @usuario</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
