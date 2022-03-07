import React from "react";

export default function Users(props) {
  const { users } = props;

  return (
    <div>
      <table className="border border-gray-400">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Puntaje</th>
            <th>Admin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.nombre}</td>
              <td>{user.puntaje}</td>
              <td>{user.mail}</td>
              <td>{user.admin && <>✅</>}</td>
              <td>
                {user.admin ? (
                  <button className="border border-gray-400 bg-gray-600 text-white p-1 rounded">
                    Hacer admin
                  </button>
                ) : (
                  <button className="border border-gray-400 bg-gray-600 text-white p-1 rounded">
                    Sacar admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
