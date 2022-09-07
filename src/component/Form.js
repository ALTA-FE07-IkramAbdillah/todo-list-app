import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const FormComponent = () => {
  const handleCreate = () => {
    var config = {
      method: "post",
      url: `https://api.todoist.com/rest/v1/tasks`,
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

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="title" placeholder="Enter title" />
          <Form.Text className="text-muted">Input Your fvcking Title Here MTF.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="description" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleCreate()}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
