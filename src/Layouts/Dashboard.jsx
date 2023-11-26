import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logofordashboard.png"
import { FaBook, FaCalendarMinus, FaCartShopping, FaHouse, FaList, FaMoneyBillTransfer, FaRankingStar, FaUsers, FaUtensils } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
// import useAdmin from "../Hooks/useAdmin";
import { MdPayments } from "react-icons/md";
const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-60 min-h-screen bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">
                <ul className="menu ">
                    {
                        isAdmin ? <>
                            <div className="flex justify-center items-center">
                                <img className="w-36" src={logo} alt="" />
                            </div>
                            <span className="text-center mt-6 font-bold">Admin Options </span>
                            <div className="divider"></div>
                            <li><NavLink to="/dashboard/adminHome" ><FaHouse /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/teacherRequest"><FaList></FaList> Teacher Request </NavLink></li>
                            <li><NavLink to="/dashboard/allClasses"><FaBook /> All Classes</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers /> All User's</NavLink></li>

                            <span className="text-center mt-6 font-bold">User Options</span>
                            <div className="divider"></div>

                            <li><NavLink to="/dashboard/studentHome" ><FaHouse /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink></li>
                            <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaCalendarMinus /> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaMoneyBillTransfer /> Payment</NavLink></li>
                            <li><NavLink to="/dashboard/booking"><FaBook /> My Bookings</NavLink></li>
                        </>
                            :
                            <>
                                <span className="text-center mt-6 font-bold">User Options</span>
                                <div className="divider"></div>
                                
                                <li><NavLink to="/dashboard/studentHome" ><FaHouse /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory"><FaMoneyBillTransfer /> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/payment"><MdPayments /> Payment</NavLink></li>
                                <li><NavLink to="/dashboard/booking"><FaBook /> My Bookings</NavLink></li>
                            </>
                    }
                    {/* shared                       */}
                    <div className="divider"></div>
                    <li className="my-10"><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
            <div className="flex-1 p-11">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;