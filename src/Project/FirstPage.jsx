import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();
  const LoginRoute = () => {
    navigate("/login");
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url(https://www.fastfashionnews.co.uk/wp-content/uploads/2022/12/Street-style-outfits.jpeg)",

          height: "94.2vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // 50% opacity black overlay
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "80px",
              marginTop: "13%",
            }}
          >
            Best In Style <br /> Collection For You
          </h1>
          <p style={{ color: "white", textAlign: "center", fontSize: "70px" }}>
            Explore Your Fashions Tunning
          </p>
          <div
            style={{
              width: "fit-content",
              margin: "auto",
            }}
          >
            <Button
              size="lg"
              type="submit"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                width: "200px",
              }}
              onClick={LoginRoute}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
