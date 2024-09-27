import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavHomeSub() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar
        expand="lg"
        // className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link
                to="/home"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                <h5
                  style={{
                    margin: "0 20px",
                  }}
                >
                  Home
                </h5>
              </Link>
              <Link
                to="/men"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                <h5 style={{ margin: "0 20px" }}>Men</h5>
              </Link>
              <Link
                to="/women"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                {" "}
                <h5 style={{ margin: "0 20px" }}>Women</h5>
              </Link>
              <Link
                to="/jewelery"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                <h5 style={{ margin: "0 20px" }}>Jewelery</h5>
              </Link>
              <Link
                to="/electronics"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                <h5 style={{ margin: "0 20px" }}>Electronics</h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavHomeSub;
