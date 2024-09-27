import React, { useContext } from "react";
import { auth } from "./Firebase";
import {
  Badge,
  Container,
  Dropdown,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

import { NewContext } from "../App";

function NavHome() {
  const { count, wishlistCount } = useContext(NewContext);
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User LoggedOut Successfully");
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleCartPage = () => {
    navigate("/cart");
  };

  const handleWishlistPage = () => {
    navigate("/wishlist");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <h1>E-Commerce </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              <Stack direction="vertical" style={{ marginRight: "25px" }}>
                <Badge bg="dark" style={{ marginLeft: "40px" }}>
                  {wishlistCount}
                </Badge>
                <FaRegHeart
                  size="35px"
                  style={{ marginTop: "-5px", marginRight: "25px" }}
                  onClick={handleWishlistPage}
                />
              </Stack>

              <Stack direction="vertical" style={{ marginRight: "30px" }}>
                <Badge bg="dark" style={{ marginLeft: "40px" }}>
                  {count}
                </Badge>
                <IoCartOutline
                  size="50px"
                  style={{ marginTop: "-10px" }}
                  onClick={handleCartPage}
                />
              </Stack>

              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <MdOutlineAccountCircle
                    size="40px"
                    style={{ marginTop: "10px", marginLeft: "-10px" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to="/logout"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavHome;
