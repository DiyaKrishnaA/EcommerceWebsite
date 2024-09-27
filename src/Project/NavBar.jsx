import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <Link
              to="/login"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "24px",
              }}
            >
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
