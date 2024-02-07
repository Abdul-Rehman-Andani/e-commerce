import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
          <div className="col-2">
              <ul>
                  <NavLink to="/admin/dashboard" className="text-decoration-none text-black"><li className="py-2">Home</li></NavLink>
                  <NavLink to="/admin/product" className="text-decoration-none text-black"><li className="py-2">Products</li></NavLink>
              </ul>
          </div> 
    </>
  )
}

export default Sidebar;
