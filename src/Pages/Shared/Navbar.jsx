import { useContext } from "react";
import logo from "../../assets/logo.png"
import { AuthContext } from "../../Providers/AuthProvider";
import defaultUserPic from "../../assets/user.png"
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

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
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user ? <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Profile" />
                                </div> : <Link to="/login"><button className="btn text-white bg-[#0078F7]">Login</button></Link>
                            }
                        </label>
                        {
                            user ? <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className="justify-between">
                                        <h1>{user.displayName}</h1>
                                    </p>
                                </li>
                                <Link className="ml-3 my-3 hover:font-semibold hover:text-red-600" to="/dashboard/dashboard2"><button>Dashboard</button></Link>
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