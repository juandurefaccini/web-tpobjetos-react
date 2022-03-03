import React from "react";

export default function Tag(props) {
  const { tag } = props;
  return (
    <div className="mr-6 mb-4 px-4 py-2 rounded-md text-white bg-gray-600 ">
      # {tag}
    </div>
  );
}
