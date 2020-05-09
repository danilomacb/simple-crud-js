import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

function Home() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    async function getElements() {
      let elements = await fetch("http://localhost:3001/");
      elements = await elements.json();

      setElements(elements);
    }

    getElements();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {elements.map((element) => (
          <Col key={element._id} sm={6} md={4} lg={3}>
            <Form>
              <InputGroup>
                <InputGroup.Prepend>
                  <Button variant={"danger"}>X</Button>
                </InputGroup.Prepend>
                <Form.Control type="text" defaultValue={element.content} />
              </InputGroup>
            </Form>
          </Col>
        ))}
        <Col sm={6} md={4} lg={3}>
          <Form>
            <Form.Control type="text" placeholder="New" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
