import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h1>Page not found</h1>
                        <h2 className="mt-4">Error 404</h2>
                        <h5 className="mt-4"><Link to="/">Go to home page</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error;
