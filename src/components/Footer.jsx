import React from "react";
import { useAuth } from "../context/authContext";
import Ranking from "./Dashboard/Ranking";

export default function Footer() {
  const { user } = useAuth();

  return (
    <div className="py-1 border-t-2 border-slate-600">
      <Ranking />
      <div className="px-12 flex justify-center mx-auto items-center h-10">
        {user.displayName.trim()}
      </div>
    </div>
  );
}
