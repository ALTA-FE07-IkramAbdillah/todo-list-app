import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Card = ({ content, detail, id }) => {
  const handleDelete = () => {
    let config = {
      method: "delete",
      url: `https://api.todoist.com/rest/v1/tasks/${id}`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   const DeleteButton = () => {
  //     handleDelete();
  //     Backhome();
  //   };

  return (
    <>
      <div>{content}</div>
      <Button onClick={detail}>cuz ke detail</Button>

      <Button href="/" onClick={() => handleDelete()}>
        Delete
      </Button>
    </>
  );
};

export default Card;
