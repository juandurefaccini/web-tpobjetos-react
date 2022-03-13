import React from "react";

export default function Button({ children, onClick }, props) {
  return (
    <button
      className="h-full w-full btn inline-block px-6 bg-gray-500 text-white font-medium leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-800  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out items-center"
      type="button"
      id="button-addon2"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
