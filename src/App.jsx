import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./admin/admin.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home,Signin,Signup,Catogary,Cart,Detail,Search} from "./pages/page";
import { Dashboard, AddProduct, Product, UpdateProduct } from "./admin/admin";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./features/product";
import Logout from "./components/Logout"; 
import { signIn, admin } from "./features/navbar";
import axios from "axios";
import Error from "./components/Error";
import { countItem } from "./features/cart";

const App = () => {

  const { cartItem } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const userRole = async () => {
    let user = await axios.get("http://localhost:9000/role", {
      headers: {
        Authorization: `Barear ${localStorage.getItem("token")}`,
      },
    });
    if (user.data.role == "admin") {
      dispatch(admin());
    }
  }

  useEffect(() => {

    if (localStorage.getItem("token")) {
      dispatch(signIn());
    }

    userRole();
    dispatch(countItem());

  },[cartItem]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/admin/product/:id" element={<UpdateProduct />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/catogary/:name" element={<Catogary />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
