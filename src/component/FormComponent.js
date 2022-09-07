import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const FormComponent = ({ handleChange, item, handleSubmit }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <Form onSubmit={handleSubmit} className="mb-5">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>TODO</Form.Label>
              <Form.Control required onChange={handleChange} value={item.content} name="content" type="text" placeholder="Enter Whats U Wanna DO" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control style={{ width: 500 }} onChange={handleChange} value={item.description} name="description" type="text" placeholder="Deskripsi" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormComponent;
