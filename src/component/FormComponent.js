import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComponent = ({ handleChange, todo, handleSubmit }) => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={handleChange} value={todo.content} name="content" type="title" placeholder="title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={handleChange} value={todo.description} name="description" type="description" placeholder="description" />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default FormComponent;
