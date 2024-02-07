import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../components/CartItem";
import Total from "../components/Total";
import { useDispatch } from "react-redux";
import { countItem } from "../features/cart";

const Cart = () => {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();

  const getItem = async () => {

    if (localStorage.getItem("userId")) {
      const res = await axios.get(`http://localhost:9000/cart?userId=${localStorage.getItem("userId")}`);
      setItem(res.data);
    }
  }

  const removeItem = async (id) => {
    const res = await axios.delete(`http://localhost:9000/cart/${id}`);
    if (res.data.message == "deleted") {
      dispatch(countItem());
    }
  }

  const icreament = async (id) => { }

  const decrement = async (id) => { }

  let total = item.reduce((a, v) => a = a + v.productId[0].price, 0);

  useEffect(() => {
    getItem();
  }, [item]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly">
          {
            item.length == 0 ? <h4 className="text-center mt-4">No item yet</h4> : <>  <div className="col-lg-5 col-12 "
            >
              {item.map((item, i) => {
                return (
                  <CartItem item={item} key={i} removeItem={removeItem} icreament={icreament} decrement={decrement} />
                );
              })}
            </div>
              <div className="col-lg-4 col-12">
                <Total total={total} />
              </div>
            </>
          }
        </div>

      </div>
    </>
  );
};

export default Cart;
