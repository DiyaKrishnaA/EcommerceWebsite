import React from "react";
import { useContext } from "react";
import { NewContext } from "../App";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function DetailPage() {
  const {
    product,
    setproduct,
    filteredCategory,
    setFilteredCategory,
    setshowNav,
    setshowNavHome,
    setshowNavSub,
    productid,
    setproductid,
    cartProduct,
    setcartProduct,
    setwishlistProduct,
    count,
    setcount,
    wishlistCount,
    setwishlistCount,
  } = useContext(NewContext);

  setshowNav(false);
  setshowNavHome(true);
  setshowNavSub(true);
  console.log(filteredCategory);

  const filterById = (productid) => {
    return filteredCategory.filter((product) => product.id === productid);
  };

  const filteredId = filterById(productid);
  console.log(filteredId);

  const handleCart = () => {
    setcartProduct((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some(
        (item) => item.id === filteredId[0].id
      );

      // If it's not in the cart, add it with a quantity of 1
      if (!isProductInCart) {
        toast.success("Product added to cart");
        setcount(count + 1);

        // Add quantity: 1 here
        return [...prevCart, { ...filteredId[0], quantity: 1 }];
      } else {
        // If the product is already in the cart, return the cart as is
        toast.error("Product Already exists");
        return prevCart;
      }
    });
  };

  const handleWishlist = () => {
    setwishlistProduct((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some(
        (item) => item.id === filteredId[0].id
      );

      if (!isProductInWishlist) {
        toast.success("Product added to wishlist");
        setwishlistCount(wishlistCount + 1);
        return [...prevWishlist, filteredId[0]];
      } else {
        toast.error("Product Already exists in wishlist");
        return prevWishlist;
      }
    });
  };

  console.log(count);

  return (
    <div
      className="row m-auto"
      style={{ justifyContent: "center", width: "60%" }}
    >
      {filteredId.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              // flexWrap: "wrap",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div>
              <img src={item.image} alt="" height="500px" width="100%" />
            </div>
            <div style={{ marginLeft: "40px", width: "55%" }}>
              <h1>{item.title}</h1>

              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rating.rate}
                  precision={0.5}
                  readOnly
                />
              </Stack>

              <br />
              <h3>${item.price}</h3>
              <br />
              <p style={{ fontSize: "20px" }}>{item.description}</p>
              <div>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    width: "250px",
                  }}
                  onClick={handleWishlist}
                >
                  Add to Wishlist
                </Button>
              </div>
              <div>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    width: "250px",
                    marginTop: "20px",
                  }}
                  onClick={handleCart}
                >
                  Add to Cart
                </Button>
              </div>
              <ToastContainer />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailPage;
