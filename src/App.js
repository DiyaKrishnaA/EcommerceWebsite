import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./Project/Home";
import Login from "./Project/Login";
import NavBar from "./Project/NavBar";
import Register from "./Project/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./Project/Firebase";
import NavHome from "./Project/NavHome";
import FirstPage from "./Project/FirstPage";
import Electronics from "./Project/Electronics";
import Men from "./Project/Men";
import Women from "./Project/Women";
import axios from "axios";
import Jewelery from "./Project/Jewelery";
import NavHomeSub from "./Project/NavHomeSub";
import DetailPage from "./Project/DetailPage";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Project/Cart";
import Wishlist from "./Project/Wishlist";

const NewContext = createContext();

function App() {
  const [user, setuser] = useState();
  const [showNav, setshowNav] = useState(true);
  const [showNavHome, setshowNavHome] = useState(false);
  const [showNavSub, setshowNavSub] = useState(false);
  const [firstPage, setfirstPage] = useState(true);
  const [product, setproduct] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [productid, setproductid] = useState("");
  const [cartProduct, setcartProduct] = useState([]);
  const [count, setcount] = useState(0);
  const [wishlistProduct, setwishlistProduct] = useState([]);
  const [wishlistCount, setwishlistCount] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
      axios
        .get("https://fakestoreapiserver.reactbd.com/amazonproducts")
        .then((res) => setproduct(res.data));
    });
  }, []);
  return (
    <div>
      <NewContext.Provider
        value={{
          user,
          setuser,
          showNav,
          setshowNav,
          showNavHome,
          setshowNavHome,
          showNavSub,
          setshowNavSub,
          firstPage,
          setfirstPage,
          product,
          setproduct,
          filteredCategory,
          setFilteredCategory,
          productid,
          setproductid,
          cartProduct,
          setcartProduct,
          count,
          setcount,
          wishlistProduct,
          setwishlistProduct,
          wishlistCount,
          setwishlistCount,
        }}
      >
        <BrowserRouter>
          {showNav === true ? <NavBar /> : ""}
          {/* {firstPage === true ? <FirstPage /> : ""} */}
          {showNavHome === true ? <NavHome /> : ""}
          {showNavSub === true ? <NavHomeSub /> : ""}
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/home" /> : <FirstPage />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/men" element={<Men />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/jewelery" element={<Jewelery />}></Route>
            <Route path="/electronics" element={<Electronics />}></Route>
            <Route path="/display" element={<DetailPage />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Routes>
        </BrowserRouter>
      </NewContext.Provider>
    </div>
  );
}

export default App;
export { NewContext };
