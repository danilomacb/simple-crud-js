import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

function Home() {
  const url = "http://localhost:3001/";

  const [elements, setElements] = useState([]);

  let createInput;

  useEffect(() => {
    read();
  }, []);

  const read = async () => {
    try {
      let elements = await fetch(url);
      elements = await elements.json();

      return setElements(elements);
    } catch (err) {
      alert("Error on read elements");
      return console.error("Error on read elements: ", err);
    }
  };

  const create = async (event) => {
    event.preventDefault();

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: event.target[0].value }),
      });

      createInput.value = "";

      read();
    } catch (err) {
      alert("Error on create element");
      return console.error("Error on create element: ", err);
    }
  };

  const del = async (id) => {
    try {
      await fetch(url + id, { method: "DELETE" });

      read();
    } catch (err) {
      alert("Error on delete element");
      return console.error("Error on delete element: ", err);
    }
  };

  const update = (id) => async (event) => {
    event.preventDefault();

    try {
      await fetch(url + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: event.target[1].value }),
      });
    } catch (err) {
      alert("Error on update element");
      return console.error("Error on update element: ", err);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        {elements.map((element) => (
          <Col key={element._id} sm={6} md={4} lg={3} className="p-2">
            <Form onSubmit={update(element._id)}>
              <InputGroup>
                <InputGroup.Prepend>
                  <Button variant={"danger"} onClick={() => del(element._id)}>
                    X
                  </Button>
                </InputGroup.Prepend>
                <Form.Control type="text" defaultValue={element.content} />
              </InputGroup>
            </Form>
          </Col>
        ))}
        <Col sm={6} md={4} lg={3} className="p-2">
          <Form onSubmit={create}>
            <Form.Control
              type="text"
              placeholder="New"
              ref={(input) => {
                createInput = input;
              }}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
