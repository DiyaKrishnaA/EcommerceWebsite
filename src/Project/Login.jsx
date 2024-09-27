import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { auth } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import { NewContext } from "../App";

function Login() {
  const { firstPage, setfirstPage } = useContext(NewContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  setfirstPage(false);

  const loginObject = {
    email: email,
    password: password,
  };

  // console.log(loginObject);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User LoggedIn Successfully");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
    // style={{
    //   backgroundImage:
    //     "url(https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg)",
    //   height: "94vh",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "100% 100%",
    // }}
    >
      <div
        style={{
          marginLeft: "150px",
          height: "800px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div>
          <img
            src="https://png.pngtree.com/background/20230618/original/pngtree-visualizing-e-commerce-in-benin-through-3d-rendering-for-social-media-picture-image_3753644.jpg"
            alt=""
            height="560px"
            style={{
              width: "80%",
              marginTop: "100px",
              marginLeft: "280px",
            }}
          />
        </div> */}
        <div>
          <Form
            style={{
              width: "500px",
              height: "520px",
              // marginLeft: "100px",
              marginRight: "100px",
              marginTop: "100px",
              padding: "40px",
              border: "1px solid black",
              borderRadius: "5%",
            }}
            onSubmit={handleLogin}
          >
            <Form.Group className="mb-3">
              <h2 style={{ textAlign: "center" }}>Sign into your account</h2>
              <br />
              <br />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button
                type="submit"
                size="lg"
                style={{
                  marginTop: "30px",
                  backgroundColor: "blue",
                  border: "none",
                }}
              >
                Login
              </Button>
            </div>
            <br />
            <p style={{ textAlign: "Right" }}>
              Don't have an account? <Link to="/register">SignUp</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
