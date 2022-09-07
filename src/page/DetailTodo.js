import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";

const DetailTodo = ({ id, content, description, handleChange }) => {
  const location = useLocation();
  const [detail, setDetail] = useState([]);

  const handleSubject = (event) => {
    event.preventDefault();
    setDetail(event.target.value);
    console.log(detail);
  };

  return (
    <>
      <form onSubmit={() => handleChange()}>
        <label for="subject">Subject</label>
        <input className="bg-navy-600 rounded-full" type="text" id="subject" name="Subject" placeholder={location.state.content} onChange={(event) => handleSubject(event.target.value)} />
        <button type="submit">perbarui data</button>
      </form>
    </>
  );
};

export default DetailTodo;
