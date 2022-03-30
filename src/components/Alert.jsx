import React from "react";

export default function Alert({ message }) {
  if (!message) return null;
  return (
    <p className="text-primary p-2 border-4 border-accent bg-secondary rounded">
      {message}
    </p>
  );
}
