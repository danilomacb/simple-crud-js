import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
