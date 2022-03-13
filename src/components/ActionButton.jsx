import React from "react";

export default function ActionButton({ onClick, children }) {
  return (
    <button
      className="mr-3 mb-4 bg-gray-300 bg-primary border border-secondary py-2 px-4 rounded inline-flex items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
