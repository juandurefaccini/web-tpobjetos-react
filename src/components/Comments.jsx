/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import Comment from "./Comment";
import { useServices } from "../context/servicesContext";

export default function Comments({ element, switchMode }) {
  const { getComentario } = useServices();
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getComentario(element).then((res) => {
      setComments(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading..</h1>;

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={() => switchMode("detail")}>X</Button>
      </div>
      <div className="space-y-4 mt-3">
        {comments.length == 0 ? (
          <h1>No hay comentarios</h1>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}
