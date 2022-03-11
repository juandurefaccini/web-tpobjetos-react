import React, { useEffect } from "react";
import { getCommentsByElement } from "../services/services";
import Button from "./ui/Button";
import Comment from "./Comment";

export default function Comments({ element, switchMode }) {
  const [comments, setComments] = React.useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const comments = await getCommentsByElement(element.nombre);
      console.log("Comments", comments);
      setComments(comments);
    };
    loadComments();
  });

  console.log("Comments selectedElement ", comments);

  return (
    <div className="border-l-2 p-10 border-slate-600 h-full ">
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
