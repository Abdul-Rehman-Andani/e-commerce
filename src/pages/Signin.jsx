import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signIn , user, admin} from "../features/navbar";

const Signin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const user = await axios.post("http://localhost:9000/signin", input);

    if (user.data.status) {
      setError(user.data.status);
    }

    if (user.data.role == 1) {
      dispatch(admin());
    }
    else {
      dispatch(user());
    }

    if (user.data.token && user.data.user) {
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("userId", user.data.user);
      e.target.reset();
      dispatch(signIn());
      navigate("/");
    }

  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-4 col-12 mt-5">
            <h4 className="fw-bold">Sign in</h4>
            <form onSubmit={handleForm}>
              <div className="input-group mt-4">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                  autoComplete='off'
                />
              </div>
              <div className="input-group mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                  autoComplete='off'
                />
              </div>
              <button className="mt-4 " type="submit">
                Sign in
              </button>
            </form>
            <p className="text-center text-danger mt-4">{error }</p>
            <p className="text-center mt-3">
              <a href="">Forgot password ? </a>
            </p>
          </div>

          <div className="col-lg-4 col-12  mt-5">
            <h4 className="fw-bold">New Customer</h4>
            <p>
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>
            <Link to="/signup">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
