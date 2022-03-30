import React, { useEffect, useState } from "react";
import Alert from "../Alert";
import { useServices } from "../../context/servicesContext";
import Loading from "../Loading";

export default function Ranking() {
  const { getUsuariosTop10 } = useServices();
  const [top10, setTop10] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsuariosTop10()
      .then((res) => {
        setTop10(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <Alert message={error} />;

  if (!top10 || loading)
    return (
      <div className="py-1 ">
        <Loading />
      </div>
    );

  return (
    <>
      <div className="py-1">
        <div className="flex flex-row ml-6 uppercase">
          Ranking :
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
      </div>
    </>
  );
}
