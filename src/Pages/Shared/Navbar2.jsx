import { Link } from "react-router-dom";


const Navbar2 = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                </div>
                <div className="navbar-center">
                <Link to="/"><button className="btn btn-ghost border-b-4 hover:border-b-[#84D9FE]">Home</button></Link>

                <Link to="/allClasses"><button className="btn btn-ghost border-b-4 hover:border-b-[#84D9FE]">All Classes</button></Link>

                <Link to="/techOnErrByte"><button className="btn btn-ghost border-b-4 hover:border-b-[#84D9FE]">Tech on ErrByte</button></Link>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar2;