import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut , user} from "../features/navbar";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      navigate("/signin");
      dispatch(signOut());
      dispatch(user());
    }
    else {
      navigate("/");
    }
  }, []);

  return <></>;
};

export default Logout;
