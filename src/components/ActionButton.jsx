import React from "react";

export default function ActionButton(props) {
  return (
    <button className="mr-3 mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      {props.children}
    </button>
  );
}
