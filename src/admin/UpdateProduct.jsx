import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import { BsUpload } from "react-icons/bs";

const UpdateProduct = () => {
  const { id } = useParams();

  const [input, setInput] = useState({
    title: "",
    price: "",
    desc: "",
    type : ""
  });

  const [img, setImg] = useState("");

  const getProduct = async () => {
    const res = await axios.get(`http://localhost:9000/product/${id}`);
    setInput(res.data);
    setImg(res.data.img);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("price", input.price);
    formData.append("desc", input.desc);
    formData.append("type", input.type);
      formData.append("img", img);
      
      const res = await axios.patch(`http://localhost:9000/product/${id}`, formData);
      
  };


  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <Sidebar />
          <div className="col-lg-4 col-12 mx-auto ">
            <h4 className="fw-bold">Add product</h4>
            <form onSubmit={handleForm} encType="multipart/form-data">
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleInput}
                  autoComplete="off"
                  value={input.title}
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  onChange={handleInput}
                  autoComplete="off"
                  value={input.price}
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  onChange={handleInput}
                  autoComplete="off"
                  value={input.type}
                />
              </div>
              <div className="input-group mt-4">
                <textarea
                  name="desc"
                  placeholder="Description"
                  onChange={handleInput}
                  value={input.desc}
                ></textarea>
              </div>
              <label
                htmlFor="img"
                className="mt-4 text-center"
                style={{ fontSize: "25px" }}
              >
                <BsUpload />
              </label>
              <div className="input-group mt-4">
                <input
                  id="img"
                  type="file"
                  name="img"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
              <img
                src={`http://localhost:9000/images/${input.img}`}
                alt="img"
                className=" mb-4"
                width={150}
              />
              <button className="" type="submit">
                Add product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
