import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { auth, db } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { NewContext } from "../App";

function Register() {
  const { firstPage, setfirstPage } = useContext(NewContext);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  setfirstPage(false);
  const registerObject = {
    fullname: fullname,
    email: email,
    password: password,
    username: username,
  };
  // console.log(registerObject);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullname: fullname,
        });
      }
      console.log("User Registered Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
    // style={{
    //   // backgroundColor: "rgba(0,0,0,0.5)",
    //   backgroundImage:
    //     "url(https://blogs.nottingham.ac.uk/newsroom/files/2018/04/Women-in-business.jpg)",
    //   height: "94vh",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "100% 100%",
    // }}
    >
      <div style={{ paddingTop: "100px" }}>
        <Form
          style={{
            width: "30%",
            height: "600px",
            marginLeft: "35%",
            borderRadius: "2%",
            padding: "40px 50px",
            border: "1px solid black",
            borderRadius: "4%",
          }}
          onSubmit={handleRegister}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Create an Account
          </h2>
          <div>
            <div style={{ paddingRight: "40px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Full Name"
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                  style={{ width: "450px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ width: "450px" }}
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  style={{ width: "450px" }}
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  style={{ width: "450px" }}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button
              type="submit"
              size="lg"
              style={{
                marginTop: "30px",
                backgroundColor: "blue",
              }}
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
