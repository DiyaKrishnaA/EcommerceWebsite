import React, { useContext, useEffect, useState } from "react";
import { NewContext } from "../App";
import { Button, Card, Carousel } from "react-bootstrap";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

function Home() {
  const navigate = useNavigate();

  const {
    setshowNav,
    setshowNavHome,
    setshowNavSub,
    product,
    setproduct,
    setproductid,
    setFilteredCategory,
  } = useContext(NewContext);
  const [userDetails, setuserDetails] = useState(null);
  const [search, setsearch] = useState("");

  const initialTime = 50 * 24 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  setshowNav(false);
  setshowNavHome(true);
  setshowNavSub(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setuserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not Logged In");
      }
    });
  };

  useEffect(() => {
    fetchUserData();

    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log("Countdown complete!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  const days = Math.floor(timeRemaining / (60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
  const seconds = timeRemaining % 60;

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  const filteredProduct = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const getProductId = (id) => {
    setproductid(id);
    setFilteredCategory(filteredProduct);
    console.log(id);

    navigate("/display");
  };

  return (
    <div>
      <div
        style={{
          width: "fit-content",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search Product..."
          style={{
            height: "20px",
            width: "400px",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
          }}
          onChange={handleSearch}
        />
      </div>

      {!search && (
        <>
          <div style={{ margin: "10px 70px" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://i.pinimg.com/originals/b4/6e/b7/b46eb746f7664083877a42aa05062dfe.jpg"
                  height="500px"
                  width="100%"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://i.pinimg.com/originals/cb/31/87/cb318789eecdbe77c9375cf78ba0f25e.jpg"
                  height="500px"
                  width="100%"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://pocketapp.in/img/blog-img/electronics1.jpg"
                  height="500px"
                  width="100%"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              SHOP BY CATEGORY
            </h1>
            <div
              className="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Card
                style={{
                  width: "15rem",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
                onClick={() => navigate("/men")}
              >
                <Card.Img
                  variant="top"
                  src="https://t3.ftcdn.net/jpg/03/32/76/62/360_F_332766226_RgueiPeaRi7UGtpzBrTNhE2B16yGTi8k.jpg"
                  height="180px"
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Men</Card.Title>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
                onClick={() => navigate("/women")}
              >
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/867341470/photo/window-shopping.jpg?s=612x612&w=0&k=20&c=2AdLIydxyTGmePMSNu5z5RQexib39GQDF-xUsoqJBkg="
                  height="180px"
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Women</Card.Title>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
                onClick={() => navigate("/jewelery")}
              >
                <Card.Img
                  variant="top"
                  src="https://tyaani.com/cdn/shop/files/WEBSITE_MOBILE_4_afd5ff2e-9f25-471e-a95c-e8ec105636a5.jpg?v=1725455014&width=3840"
                  height="180px"
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    Jewelery
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
                onClick={() => navigate("/electronics")}
              >
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg"
                  height="180px"
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    Electronics
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Default Product List */}
          {/* <div>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              LATEST PRODUCTS
            </h1>
          </div> */}

          <div
            style={{
              margin: "20px 190px",
              borderRadius: "90%",
              backgroundColor: "snow",
              padding: "70px 0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwabffded5/mobile-top-icons/modern-gold.jpg"
                alt=""
                height="500px"
              />
            </div>
            <div>
              <div
                style={{
                  textAlign: "center",
                  paddingLeft: "50px",
                  marginTop: "60px",
                }}
              >
                <h4>DISCOUNT</h4>
                <h2 style={{ marginTop: "50px" }}>
                  LATEST JEWELLERY COLLECTION
                </h2>
                <h4 style={{ marginTop: "30px" }}>SALE 50%</h4>
                <h1
                  style={{ marginTop: "80px" }}
                >{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h1>
                <div>
                  <Button
                    style={{
                      margin: "40px 0",
                      backgroundColor: "darkgoldenrod",
                      border: "none",
                      width: "150px",
                    }}
                    onClick={() => navigate("/jewelery")}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "100px 20px" }}>
            <h1>We Supported By</h1>
            <div style={{ marginTop: "50px" }}>
              <img
                src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/12/16-1024x512.jpg"
                alt=""
                width="200px"
                height="200px"
                style={{ marginRight: "100px" }}
              />

              <img
                src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/12/19-1024x512.jpg"
                alt=""
                width="200px"
                height="200px"
                style={{ marginRight: "100px" }}
              />

              <img
                src="https://i.pinimg.com/originals/54/a8/be/54a8bea93e45da0193d76de30ffdfd95.jpg"
                alt=""
                width="200px"
                height="200px"
                style={{ marginRight: "100px" }}
              />

              <img
                src="https://www.phasesmensfashion.com.au/cdn/shop/files/armani-exchange-logo_400x.jpg?v=1614307961"
                alt=""
                width="200px"
                height="200px"
              />
              <br />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp28KNbT_76szjMx8V-F90zVouUYg3BblgtA&s"
                alt=""
                width="200px"
                height="200px"
                style={{ marginRight: "100px" }}
              />

              <img
                src="https://i3.wp.com/static.vecteezy.com/system/resources/previews/019/766/419/original/acer-logo-acer-icon-transparent-free-png.png?ssl=1"
                alt=""
                width="200px"
                height="200px"
                style={{ marginRight: "100px" }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8uQa7XwHP4piGKAF2ZV5FGBgyVmVC52h7w&s"
                alt=""
                width="200px"
                height="200px"
                style={{ marginRight: "100px" }}
              />

              <img
                src="https://static.wixstatic.com/media/4dbd2b_1538a457bee442c682f437f4f80bc28c~mv2.jpeg/v1/fill/w_420,h_234,al_c,lg_1,q_80/4dbd2b_1538a457bee442c682f437f4f80bc28c~mv2.jpeg"
                alt=""
                width="200px"
                height="200px"
              />
            </div>
          </div>

          <div
            className="bg-dark"
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "white",
              justifyContent: "space-between",
              padding: "20px",
              // height: "400px",
            }}
          >
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <h2>ECommerce</h2>
              <FaSquareXTwitter
                size="25px"
                style={{ marginRight: "10px" }}
              />{" "}
              <FaLinkedin size="25px" style={{ marginRight: "10px" }} />{" "}
              <FaFacebookSquare size="25px" style={{ marginRight: "10px" }} />{" "}
              <FaSquareInstagram size="25px" />
            </div>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <h6>ONLINE SHOPPING</h6>
              <p>Men</p>
              <p>Women</p>
              <p>Jewellery</p>
              <p>Electronics</p>
            </div>

            <div style={{ flex: "1", marginBottom: "20px" }}>
              <h6>CUSTOMER POLICIES</h6>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>T&C</p>
              <p>Privacy Policy</p>
            </div>
            <div style={{ flex: "1", marginBottom: "20px" }}>
              <h6>USEFUL LINKS</h6>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Support</p>
            </div>
            <hr
              style={{
                width: "100%",
                border: "1px solid white",
                marginTop: "20px",
              }}
            />
            <div style={{ margin: "auto" }}>
              <p>
                <FaRegCopyright /> 2077 Ecommerce. All right reserved
              </p>
            </div>
          </div>
        </>
      )}

      {search && (
        <div className="row">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <Card
                key={item.id}
                style={{
                  width: "18rem",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
                onClick={() => getProductId(item.id)}
              >
                <Card.Img variant="top" src={item.image} height="300px" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.category}</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              No products found
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
