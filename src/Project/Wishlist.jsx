import React, { useContext } from "react";
import { NewContext } from "../App";
import { Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function Wishlist() {
  const {
    setshowNav,
    setshowNavHome,
    setshowNavSub,
    wishlistProduct,
    setwishlistProduct,
    count,
    setcount,
    setcartProduct,
    wishlistCount,
    setwishlistCount,
    setproductid,
  } = useContext(NewContext);

  setshowNav(false);
  setshowNavHome(true);
  setshowNavSub(true);

  const handleRemoveFromWishlist = (item) => {
    setwishlistProduct((prevWishlist) =>
      prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.id)
    );
    if (wishlistCount > 0) {
      setwishlistCount(wishlistCount - 1);
    }
  };

  const handleCartProduct = (item) => {
    setproductid(item);
    setcartProduct((prevCart) => {
      const isProductInCart = prevCart.some(
        (wishlistitem) => item.id === wishlistitem.id
      );

      if (!isProductInCart) {
        toast.success("Product added to cart");
        setcount(count + 1);
        setwishlistProduct((prevWishlist) =>
          prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.id)
        );
        if (wishlistCount > 0) {
          setwishlistCount(wishlistCount - 1);
        }

        return [...prevCart, { ...item, quantity: 1 }];
      } else {
        toast.error("Product Already exists");
        return prevCart;
      }
    });
  };

  return (
    <div>
      {wishlistCount > 0 ? (
        <div className="row m-auto" style={{ justifyContent: "center" }}>
          {wishlistProduct.map((item, key) => {
            return (
              <Card
                key={key}
                style={{
                  width: "18rem",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <Card.Img variant="top" src={item.image} height="280px" />
                <Card.Body>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Title>{item.title} </Card.Title>
                  <Card.Text>
                    <strong>$ {item.price}</strong>
                  </Card.Text>
                  <div>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                        width: "230px",
                        marginTop: "10px",
                      }}
                      onClick={() => handleCartProduct(item)}
                    >
                      Add to cart
                    </Button>
                  </div>

                  <div>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                        width: "230px",
                        marginTop: "10px",
                      }}
                      onClick={() => handleRemoveFromWishlist(item)}
                    >
                      Remove From Wishlist
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      ) : (
        <div style={{ marginTop: "15%" }}>
          <h1 style={{ textAlign: "center" }}>Wishlist is Empty</h1>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Wishlist;
