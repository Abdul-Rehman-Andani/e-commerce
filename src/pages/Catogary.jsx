import { useParams } from "react-router-dom";
import { close } from "../features/search-bar";
import { useDispatch } from "react-redux";

const Catogary = () => {

  const { name } = useParams();

  const dispatch = useDispatch();
  dispatch(close());

  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{ name}</h4>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Catogary;
