import { BsTrash3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartItem = ({ item , icreament, decrement, removeItem}) => {
    return (
        <>
            <div
                className="mb-4 d-flex align-items-center gap-3 mx-auto"
            >
                <figure className="rounded-2" style={{ backgroundColor: "rgb(232, 232, 232)" }}>
                    <img
                        src={`http://localhost:9000/images/${item.productId[0].img}`}
                        alt="product-img"
                        className="img-fluid"
                        width="150"
                    />
                </figure>
                <div className="info">
                    <h4>{item.productId[0].title}</h4>
                    <h5>Rs {item.productId[0].price}</h5>
                    <div className="quantity d-flex align-items-center gap-2 mb-3">
                        <span onClick={() => icreament(item._id)} className="bg-black text-white text-center" style={{ width: "30px", height: "30px", borderRadius: "50px" }}><FaMinus /></span>
                        <h5>{item.quantity}</h5>
                        <span onClick={() => decrement(item._id)} className="bg-black text-white text-center" style={{ width: "30px", height: "30px", borderRadius: "50px" }}><FaPlus /></span>
                    </div>
                    <p
                        style={{ cursor: "pointer" }}
                        onClick={() => removeItem(item._id)}
                    >
                        <BsTrash3 />
                    </p>
                </div>
            </div>
        </>
    )
}

export default CartItem;
