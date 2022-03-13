import React from "react";

export default function Button({ children, onClick }, props) {
  return (
    <button
      className="h-full w-full btn inline-block px-6 rounded border border-secondary  bg-primary "
      type="button"
      id="button-addon2"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
