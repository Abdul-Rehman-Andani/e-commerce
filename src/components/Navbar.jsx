import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RxCross1, RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../features/search-bar";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.search);
  const { signin, signout, role } = useSelector((store) => store.navbar);
  const { cartItem } = useSelector((store) => store.cart);

  return (
    <>
      {isOpen && (
        <div className="search-model position-relative">
          <span
            className="position-absolute"
            style={{ right: "20px", top: "20px" }}
            onClick={() => dispatch(close())}
          >
            <RxCross1 />
          </span>
          <div className="search-bar bg-white py-4">
            <Searchbar />
          </div>
        </div>
      )}
      <header className="text-center py-2 bg-black text-white fw-bold">
        Delivery in 8 to 10 working days
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="d-flex justify-content-between align-items-center py-4">
              <h3 className="fw-bold">
                <Link to="/" className="text-decoration-none text-black">
                  <img src={logo} alt="logo" width="100" />
                </Link>
              </h3>

              <div
                className="icon-group d-flex gap-4"
                style={{ fontSize: " 23px", cursor: "pointer" }}
              >
                <span>
                  {role && (
                    <Link
                      to="/admin/dashboard"
                      className="text-text-decoration-none text-black"
                    >
                      <RxDashboard />
                    </Link>
                  )}
                </span>
                <span onClick={() => dispatch(open())}>
                  <BiSearchAlt2 />
                </span>
                {signin && (
                  <span>
                    <Link
                      to="/signin"
                      className="text-text-decoration-none text-black"
                    >
                      <AiOutlineUser />
                    </Link>
                  </span>
                )}
                <span className="position-relative">
                  <span
                    class="position-absolute start-100 translate-middle badge rounded-pill bg-black"
                    style={{ fontSize: "11px", top: "7px" }}
                  >
                    {cartItem}
                  </span>
                  <Link
                    to="/cart"
                    className="text-text-decoration-none text-black"
                  >
                    <BiShoppingBag />
                  </Link>
                </span>
                <span>
                  {signout && (
                    <Link
                      to="/logout"
                      className="text-text-decoration-none text-black"
                    >
                      <FiLogOut />
                    </Link>
                  )}
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
