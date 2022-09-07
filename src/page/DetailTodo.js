import React from "react";
import { useLocation } from "react-router-dom";

const DetailTodo = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <h1>{location.state.content}</h1>
        <p>{location.state.description}</p>
      </div>
    </>
  );
};

export default DetailTodo;
