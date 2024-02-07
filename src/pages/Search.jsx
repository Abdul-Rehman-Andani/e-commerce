import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { close } from "../features/search-bar";
import { useDispatch } from "react-redux";
import axios from "axios";

const Search = () => {
  const dispatch = useDispatch();
  const { title } = useParams();
  const [item, setItem] = useState([]);

  dispatch(close());

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:9000/product/search/${title}`);
    setItem(res.data);
  }


  useEffect(() => {
    getProducts();
  }, [title]);

  return (
    <>
      <div className="container">
        <div className="row">
          {
            item.map((item, i) => {
              return (
                <div className="col-lg-3 col-6 mb-4" key={i}>
                  <Link
                    to={`/detail/${item._id}`}
                    className="text-decoration-none text-black"
                  >
                    <figure className="overflow-hidden" style={{ backgroundColor: "rgb(232, 232, 232)" }} >
                      <img
                        src={`http://localhost:9000/images/${item.img}`}
                        alt="product-img"
                        className="img-fluid"
                      />
                    </figure>
                    <h5>{item.title}</h5>
                    <h6>Rs {item.price}</h6>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default Search;
