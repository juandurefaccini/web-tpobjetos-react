import React from "react";

export default function Tag(props) {
  const { tag } = props;
  return (
    <div className="mr-6 mb-4 px-2 py-1 rounded text-white bg-secondary text-primary text-xs ">
      # {tag}
    </div>
  );
}
