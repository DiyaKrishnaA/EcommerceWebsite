import React, { useContext, useEffect } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { NewContext } from "../App";
import { useNavigate } from "react-router-dom";

function Jewelery() {
  const navigate = useNavigate();
  const {
    setshowNav,
    setshowNavHome,
    setshowNavSub,
    product,
    setproduct,
    filteredCategory,
    setFilteredCategory,
    setproductid,
  } = useContext(NewContext);

  setshowNav(false);
  setshowNavHome(true);
  setshowNavSub(true);

  useEffect(() => {
    setshowNav(false);
    setshowNavHome(true);
    setshowNavSub(true);

    const filteredProducts = product.filter(
      (productitem) => productitem.category === "jewelery"
    );
    setFilteredCategory(filteredProducts);
  }, [product, setshowNav, setshowNavHome, setshowNavSub]);

  const handleprice = (ascending) => {
    const sorted = [...filteredCategory].sort((a, b) => {
      return ascending ? a.price - b.price : b.price - a.price;
    });
    setFilteredCategory(sorted);
  };

  const getProductId = (id) => {
    setproductid(id);
    console.log(id);

    navigate("/display");
  };
  return (
    <div>
      <div className="bg-body-tertiary">
        <Dropdown
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "260px",
          }}
        >
          <Dropdown.Toggle
            // variant="secondary"
            id="dropdown-basic"
            className="bg-body-tertiary text-dark"
            style={{
              border: "none",
              fontSize: "20px",
            }}
          >
            Sort by:
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleprice(false)}>
              Price: High to Low
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleprice(true)}>
              Price: Low to High
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row m-auto" style={{ justifyContent: "center" }}>
        {filteredCategory.map((item, key) => {
          return (
            <Card
              key={key}
              style={{
                width: "18rem",
                marginLeft: "20px",
                marginTop: "10px",
              }}
              onClick={() => getProductId(item.id)}
            >
              <Card.Img variant="top" src={item.image} height="300px" />
              <Card.Body>
                <Card.Text>{item.category}</Card.Text>
                <Card.Title>{item.title} </Card.Title>
                <Card.Text>
                  <strong>$ {item.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Jewelery;
