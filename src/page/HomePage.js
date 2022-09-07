// import library
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

// import file
import FromComponent from "../component/FormComponent";
import CardComponent from "../component/CardComponent";

//Token
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
};

const Homepage = () => {
  // initial state
  const [list, setList] = useState([]);

  const [todo, setTodo] = useState({
    content: "",
    description: "",
  });

  // Fetch API
  const getData = () => {
    axios.get("https://api.todoist.com/rest/v1/tasks").then((res) => setList(res.data));
  };

  //   handle change
  const handleChange = (e) => {
    let newItem = { ...todo };
    newItem[e.target.name] = newItem[e.target.value];
    setTodo(newItem);
  };

  //   handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.todoist.com/rest/v1/tasks/", todo).then(() => {
      handleClear();
      getData();
    });
  };
  // handleClear
  const handleClear = () => {
    let newItem = { ...todo };
    newItem["content"] = "";
    newItem["description"] = "";
    setTodo(newItem);
  };

  //   Delete
  const handleDelete = ({ id }) => {
    axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`).then(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <FromComponent todo={todo} setTodo={setTodo} handleChange={handleChange} handleSubmit={handleSubmit} />
      <CardComponent list={list} handleDelete={handleDelete} />
    </>
  );
};

export default Homepage;
