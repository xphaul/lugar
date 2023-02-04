import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="py-5">
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="brand-logo">
            <b>L U G A R</b>
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="px-4 nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="#link" className="px-4 nav-link">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#link" className="px-4 nav-link">
              PROJECTS
            </Nav.Link>
            <Nav.Link href="#link" className="px-4 nav-link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
