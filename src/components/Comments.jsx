/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useServices } from "../context/servicesContext";
import { AiFillCloseCircle as CloseIcon } from "react-icons/ai";

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
        <CloseIcon
          className="cursor-pointer"
          onClick={() => switchMode("detail")}
          size={32}
        />
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
