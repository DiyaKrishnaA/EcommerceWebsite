import React, { useContext } from "react";
import { NewContext } from "../App";
import { Button, Table } from "react-bootstrap";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";

function Cart() {
  const {
    setshowNav,
    setshowNavHome,
    setshowNavSub,
    cartProduct,
    setcartProduct,
    count,
    setcount,
  } = useContext(NewContext);

  setshowNav(false);
  setshowNavHome(true);
  setshowNavSub(true);

  const decreaseQuantity = (id) => {
    setcartProduct(
      cartProduct.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      )
    );
  };

  const increaseQuantity = (id) => {
    setcartProduct(
      cartProduct.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setcartProduct(cartProduct.filter((product) => product.id !== id));
    if (count > 0) {
      setcount(count - 1);
    }
  };

  const totalAmount = cartProduct.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      {count > 0 ? (
        <div style={{ margin: "10px 10px" }}>
          <h1>CART</h1>
          <div style={{ display: "flex" }}>
            <div>
              <Table hover>
                <thead>
                  <tr>
                    <th>Added Items</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <>
                  {cartProduct.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td style={{ width: "45%" }}>
                          <div style={{ display: "flex" }}>
                            <div>
                              <img
                                src={item.image}
                                alt=""
                                height="230px"
                                width="100%"
                              />
                            </div>
                            <div
                              style={{ marginTop: "50px", marginLeft: "30px" }}
                            >
                              <h5>{item.title}</h5>
                              <p>{item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6 style={{ marginTop: "50px" }}>${item.price}</h6>
                        </td>
                        <td>
                          <h6 style={{ marginTop: "50px" }}>
                            {item.rating.rate}
                          </h6>
                        </td>
                        <td>
                          <div style={{ marginTop: "50px" }}>
                            <CiSquareMinus
                              size="35px"
                              onClick={() => decreaseQuantity(item.id)}
                            />
                            <span style={{ margin: "0 10px" }}>
                              {item.quantity}
                            </span>
                            <CiSquarePlus
                              size="35px"
                              onClick={() => increaseQuantity(item.id)}
                            />
                          </div>
                        </td>
                        <td>
                          <h6 style={{ marginTop: "50px" }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </h6>
                        </td>
                        <td>
                          <div style={{ marginTop: "50px" }}>
                            <TiDelete
                              size="35px"
                              onClick={() => removeProduct(item.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </>
              </Table>
            </div>
            <div
              style={{
                marginLeft: "60px",
                padding: "40px 20px",
                backgroundColor: "snow",
                height: "fit-content",
              }}
            >
              <h2>ORDER SUMMARY: </h2>
              <p
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                By placing your order, you agree to the <br />
                Delivery Terms
              </p>
              <div>
                <Table style={{ marginTop: "40px" }}>
                  <tbody>
                    <tr>
                      <td>{count} PRODUCTS</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Product Total</td>
                      <td> ${totalAmount.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Delivery</td>
                      <td>FREE</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${totalAmount.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <h4 style={{ marginTop: "60px" }}>ACCEPTED PAYMENT METHODS</h4>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_frZ_s0XVI9Yl1AMQm89aW7uDbAIcFVOWLbhaK4-WVsRMlGnYOFmyPQMb7sljLobCv0&usqp=CAU"
                  alt=""
                  width="100px"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                  alt=""
                  width="100px"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEndUO8CpOCPFxBp1y6CLv3n4ESeXCKlgfA&s"
                  alt=""
                  width="100px"
                />
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/apple-pay.png"
                  alt=""
                  width="100px"
                />
              </div>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  size="lg"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "none",
                  }}
                >
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "15%" }}>
          <h1 style={{ textAlign: "center" }}>Cart is Empty</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
