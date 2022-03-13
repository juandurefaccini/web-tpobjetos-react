import React from "react";
import { useAuth } from "../context/authContext";

export default function Footer() {
  const { user } = useAuth();

  return (
    <>
      <div className="py-1 border-t-2 border-slate-600">
        <div className="px-12 flex  justify-center mx-auto items-center h-10">
          {user.displayName.trim()}
        </div>
      </div>
    </>
  );
}
