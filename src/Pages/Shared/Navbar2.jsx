import { Link } from "react-router-dom";


const Navbar2 = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                </div>
                <div className="navbar-center">
                    <button className="btn btn-ghost"><Link to="/">Home</Link></button>

                    <button className="btn btn-ghost"><Link to="/allClasses">All Classes</Link></button>

                    <button className="btn btn-ghost"> <Link to="/techOnErrByte">Tech on ErrByte</Link></button>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    );
};

export default Navbar2;