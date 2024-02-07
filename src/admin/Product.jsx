import React, { useState , useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Product = () => {

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const res = await axios.get("http://localhost:9000/product");
    setProduct(res.data);
  }

  const delProduct = (id) => {
    alert(id);
  } 
  


  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
            <Sidebar />
          <div className="col-10">
            <Link to="/admin/add-product"><button>Add product</button></Link>
              <div className="table-responsive">
                <table className="table">
                  {
                    product.map((item) => {
                      return <tr className='align-self-center'>
                        <td><img src={`http://localhost:9000/images/${item.img}`} width={100} alt="product-img" /></td>
                        <td>{item.title}</td>
                        <td>Rs {item.price}</td>
                        <td>{item.type}</td>
                        <td ><Link to={`/admin/product/${item._id}`}>Edit</Link></td> 
                         <td onClick={() => delProduct(item._id)}>Delete</td>
                      </tr>
                    })
                  }
                </table>
              </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Product;
