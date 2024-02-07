import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { countItem } from "../features/cart";

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProduct = async () => {
    const res = await axios.get(`http://localhost:9000/product/${id}`);
    setProduct(res.data);
  };

  const cart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    else {
      const res = await axios.post("http://localhost:9000/cart", { userId: localStorage.getItem("userId"), productId: id });
      if (res.data.message == "add") {
        dispatch(countItem());
        navigate("/cart");
      }
    }
    
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 col-12">
            <figure style={{ backgroundColor: "rgb(232, 232, 232)" }}>
            <img
              src={`http://localhost:9000/images/${product.img}`}
              alt="img"
              className="img-fluid"
            />
          </figure>
          </div>
          <div className="col-lg-4 col-12 mt-4 mt-lg-0">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <h4>Rs {product.price}</h4>
            <div className="row mt-4 pb-4">
              <div className="col-6"><button onClick={cart}>Add to cart</button></div>
              <div className="col-6"><button>Buy now</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
