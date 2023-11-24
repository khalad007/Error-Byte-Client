import { useContext } from "react";
import logo from "../../assets/logo.png"
import { AuthContext } from "../../Providers/AuthProvider";
import defaultUserPic from "../../assets/user.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className="navbar bg-base-100 mb-4">
                <div className="flex-1">
                    <img className="w-24" src={logo} alt="Logo" />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end mr-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[100] card card-compact dropdown-content w-52 bg-base-100 shadow ">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user ? <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Profile" />
                                </div> : <Link to="/login"><button className="btn">Login</button></Link>
                            }
                        </label>
                        {
                            user ? <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className="justify-between">
                                        <h1>{user.displayName}</h1>
                                    </p>
                                </li>
                                <li><a>Dashboard</a></li>
                                {
                                    user ? <Link onClick={handleLogOut} className="btn bg-[#E90000] text-white">Logout</Link> :

                                        <Link to="login" className="btn bg-[#06C755] text-white">Login</Link>
                                }
                            </ul> : <span></span>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;