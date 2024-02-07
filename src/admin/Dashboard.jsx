import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const auth = async () => {
    let user = await axios.get("http://localhost:9000/role", {
      headers: {
        Authorization: `Barear ${localStorage.getItem("token")}`,
      },
    });
    if (user.data.role == "user") {
      navigate("/");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
