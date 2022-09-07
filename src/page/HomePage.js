import React, { useState, useEffect } from "react";

import Card from "../component/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let config = {
      method: "get",
      url: "https://api.todoist.com/rest/v1/tasks",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };

    await axios(config)
      .then((response) => {
        console.log(response.data);
        setTodo(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  //deetail
  const handleDetailPage = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        id: item.id,
        content: item.content,
      },
    });
  };

  return (
    <>
      {todo.map((item, index) => {
        return (
          <div key={index}>
            <Card id={item.id} content={item.content} detail={() => handleDetailPage(item)} />
          </div>
        );
      })}
    </>
  );
};

export default Homepage;
