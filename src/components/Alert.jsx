import React from "react";

export default function Alert({ message }) {
  return (
    <p className="text-red-500 p-2 border border-red-300 bg-red-200 rounded">
      {message}
    </p>
  );
}
