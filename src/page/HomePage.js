// import library
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import file
import FromComponent from "../component/FormComponent";
import CardComponent from "../component/CardComponent";

//Token
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
};

const Homepage = () => {
  // initial state
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [content, setContent] = useState("");

  const [todo, setTodo] = useState({
    content: "",
    description: "",
  });

  // Fetch API
  const getData = () => {
    axios.get("https://api.todoist.com/rest/v1/tasks").then((res) => setList(res.data));
  };

  //  DetailTodo
  const handleDetail = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        id: item.id,
        content: item.content,
      },
    });
  };

  //   handle change
  const handleChange = (e) => {
    let newItem = { ...todo };
    newItem[e.target.name] = newItem[e.target.value];
    setTodo(newItem);
  };

  //   handle Submit
  const handleSubmit = (e) => {
    var axios = require("axios");
    var data = JSON.stringify({
      content: "buy-milk",
      due_string: "tomorrow at 12:00",
      due_lang: "en",
      priority: 4,
    });

    var config = {
      method: "post",
      url: "https://api.todoist.com/rest/v1/tasks",
      headers: {
        Authorization: "Bearer 7a2e00e09dac7094262b81a9342c37794ec41737",
        "Content-Type": "application/json",
        Cookie: "csrf=af132ec405a64b238fd4b99e7c0c6da4",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        getData();
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
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

  const changeData = (event) => {
    setContent(event.target.value);
    getData();
  };

  return (
    <>
      <FromComponent todo={todo} setTodo={setTodo} handleChange={handleChange} handleSubmit={() => handleSubmit()} onChange={changeData} />
      <CardComponent list={list} setList={setList} handleDetail={handleDetail} handleDelete={handleDelete} />
    </>
  );
};

export default Homepage;
