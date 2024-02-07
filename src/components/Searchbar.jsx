import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Searchbar = () => {

  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const catogary = [
    {
      name: "Fashion",
    },
    {
      name: "Men",
    },
    {
      name: "Women",
    },
    {
      name: "Kid",
    },
  ];

  const handleForm = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  }


  return (
    <>
      <h3 className="text-center mb-4 fw-bold">Andani</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mx-auto">
            <form onSubmit={handleForm}>
            <div className="search">
              <input type="text" placeholder="Search product" onChange={(e) => setSearch(e.target.value)} />
              <button type="submit"><BiSearchAlt2 /></button>
            </div>
           </form>
            <div className="badges text-center mt-3">
              {catogary.map((item,i) => {
                return (
                  <Link to={`/catogary/${item.name}`} key={i}>
                    <span className="badge text-bg-dark mx-1">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
