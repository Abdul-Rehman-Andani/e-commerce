import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import Loader from "../components/Loader";
import axios from "axios";

const Home = () => {
  const brands = ["Zara", "Khadi", "Gucci"];

  // const { products, isLoading } = useSelector((store) => store.product);
  const sort = useRef();
  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState({ min: 0, max: 20000 });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  // const auth = async () => {
  //   let user = await axios.get("http://localhost:9000/auth", {
  //     headers: {
  //       Authorization: `Barear ${localStorage.getItem("token")}`,
  //     }
  //   });
  //   if (!user.data.status == "aut") {
  //     navigate("/signin");
  //   }
  // }

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:9000/product?page=${page}`);
    setLoading(false);
    setProduct(res.data);
  };

  const handleBrand = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setBrand([...brand, value]);
    } else {
      setBrand(brand.filter((e) => e !== value));
    }
  };

  // const handleRange = async (e) => {
  //   const { name, value } = e.target;
  //   setRange((values) => ({ ...values, [name]: value }));
  //   let res = await axios.get(`http://localhost:9000/product/range?min=${range.min}&max=${range.max}`);
  //   setProduct(res.data);
  // };

  const handleInfiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollHeight + 1 >= document.documentElement.scrollTop) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    // auth();
    getProducts();

  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);


  const handleSort = () => {
    sort.current.classList.toggle("active-sort");
  };
  return (
    <>
      <div className="container">
        <div className="row mb-4 d-block d-lg-none">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Filter</h5>
            <span style={{ fontSize: "25px" }} onClick={handleSort}>
              <BsFilter />
            </span>
          </div>
        </div>

        <div className="row hero">
          <div className="col-2 filter " ref={sort}>
            <h5 className="mt-3 mt-lg-0">Brands</h5>
            <div className="sub-filter">
              {brands.map((brand, i) => {
                return (
                  <div
                    className="brand d-flex align-items-center gap-2"
                    key={i}
                  >
                    <input
                      type="checkbox"
                      name={brand}
                      value={brand}
                      onChange={handleBrand}
                    />
                    <span>{brand}</span>
                  </div>
                );
              })}
            </div>
            <h5 className="mt-3">Pricing</h5>
            <div className="sub-filter">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="From"
                  name="min"
                />
              </div>
              <div className="input-group mt-3">
                <input
                  type="text"
                  placeholder="To"
                  name="max"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-12 ">
            <div className="row">
              {loading ? (
                <Loader />
              ) : (
                product.map((item, i) => {
                  return (
                    <div className="col-lg-4 col-6 mb-4" key={i}>
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
              )}
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Home;


