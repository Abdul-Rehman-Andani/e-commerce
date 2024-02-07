import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const user = await axios.post("http://localhost:9000/signup", input);

    if (user.data.status == "success") {
      e.target.reset();
      navigate("/signin");
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 mx-auto mt-5">
            <h4 className="fw-bold">Registerition</h4>
            <form onSubmit={handleForm} encType="multipart/form-data">
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <button className="mt-4" type="submit">
                Register
              </button>
            </form>
            <p className="text-center mt-3">
              <Link to="/signin">Already have an account ? </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
