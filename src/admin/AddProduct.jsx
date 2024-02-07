import React,{useState} from "react";
import Sidebar from "./Sidebar";
import { BsUpload } from "react-icons/bs";
import axios from "axios";

const Product = () => {
  const [input, setInput] = useState({
    title: "",
    price: "",
    desc: "",
    type : ""
  });

  const [img, setImg] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("price", input.price);
    formData.append("desc", input.desc);
    formData.append("type", input.type);
    formData.append("img", img);

    const product = await axios.post("http://localhost:9000/product", formData);

    if (product.data.status == 201) {
      e.target.reset();
    }

  };
  return (
    <>
      <div className="container">
        <div className="row">
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
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <div className="input-group mt-4">
                <textarea name="desc" placeholder="Description" onChange={handleInput}></textarea>
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

export default Product;
