/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { getComentariosByElemento } from "../services/services";
import Button from "./ui/Button";
import Comment from "./Comment";

export default function Comments({ element, switchMode }) {
  const [comments, setComments] = React.useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const comments = await getComentariosByElemento(element.nombre);
      setComments(comments);
    };
    loadComments();
  }, []);

  return (
    <div className="border-l-2 p-10 w-full  border-secondary h-full ">
      <div className="flex justify-end">
        <Button onClick={() => switchMode("detail")}>X</Button>
      </div>
      {comments.length === 0 && <h1>No hay comentarios</h1>}
      <div className="space-y-4 mt-3">
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
}
