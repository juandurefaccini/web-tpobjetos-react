import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useServices } from "../context/servicesContext";
import Loading from "./Loading";

export default function Footer() {
  const { getUsuariosTop10 } = useServices();
  const [top10, setTop10] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const init = async () => {
      const res = await getUsuariosTop10();
      setTop10(res);
    };
    setLoading(true);
    init();
    setLoading(false);
  }, []);

  if (!top10 || loading) return <Loading />;

  console.log(top10);

  return (
    <>
      <div className="py-1 border-t-2 border-slate-600">
        <div className="flex flex-row ml-6 uppercase">
          Top 10 contribuciones ➡️
          <div className="ml-6 space-x-6 flex flex-row justify-around">
            {top10.map((user) => (
              <div key={user.nombre} className="w-auto h-auto truncate">
                <p>
                  {user.nombre} : {user.puntaje}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-12 flex justify-center mx-auto items-center h-10">
          {user.displayName.trim()}
        </div>
      </div>
    </>
  );
}
