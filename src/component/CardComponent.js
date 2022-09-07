import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const CardComponent = ({ list, handleDelete, handleDetail }) => {
  return (
    <>
      <Container className="ms-auto">
        <Row xxl={4} xl={4} lg={4} md={2}>
          {list.map((data, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{data.content}</Card.Title>
                      <Card.Text>{data.description}</Card.Text>
                      <Button onClick={() => handleDetail(data)} className="me-2 ms-2" variant="primary" type="submit">
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(data)} variant="primary" type="submit">
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardComponent;
