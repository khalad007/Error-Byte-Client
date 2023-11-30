import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logofordashboard.png"
import { FaBook, FaCalendarMinus, FaCartShopping, FaHouse, FaList, FaMoneyBillTransfer, FaPen, FaRankingStar, FaUsers, FaUtensils } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
// import useAdmin from "../Hooks/useAdmin";
import { MdPayments } from "react-icons/md";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
const Dashboard = () => {

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    // const isTeacher = false;
    const axiosSecure = useAxiosSecure();

    const { data: statuss = [] } = useQuery({
        queryKey: ['statuss', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myApplyStatus/${user.email}`);
            return res.data;
        }
    });
    console.log(statuss)
    console.log(user)
    // console.log(statuss[0]["name"])
    console.log(statuss[0]?.name);
    console.log(statuss[0]?.role);
    return (
        <>
            <div>
            </div>
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
                                <li><NavLink to="/dashboard/allClassForAdmin"><FaBook /> All Classes</NavLink></li>
                                <li><NavLink to="/dashboard/users"><FaUsers /> All User's</NavLink></li>

                                <span className="text-center mt-6 font-bold">Teacher Options</span>
                                        <div className="divider"></div>

                                        <li><NavLink to="/dashboard/teacherHome" ><FaHouse /> Teacher Home</NavLink></li>
                                        <li><NavLink to="/dashboard/addClass" ><FaPen /> Add Class</NavLink></li>
                                        <li><NavLink to="/dashboard/myClass" ><FaList /> My Class</NavLink></li>

                                <span className="text-center mt-6 font-bold">User Options</span>
                                <div className="divider"></div>

                                <li><NavLink to="/dashboard/studentHome" ><FaHouse /> User Home</NavLink></li>
                                        <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                                        <li><NavLink to="/dashboard/payment"><MdPayments /> Payment</NavLink></li>
                                        <li><NavLink to="/dashboard/enrollClass"><FaBook /> My Enroll Class</NavLink></li>
                            </>
                                : 
                                statuss[0]?.role === 'teacher'  ?

                                    <>
                                        <span className="text-center mt-6 font-bold">Teacher Options</span>
                                        <div className="divider"></div>

                                        <li><NavLink to="/dashboard/teacherHome" ><FaHouse /> Teacher Home</NavLink></li>
                                        <li><NavLink to="/dashboard/addClass" ><FaPen /> Add Class</NavLink></li>
                                        <li><NavLink to="/dashboard/myClass" ><FaList /> My Class</NavLink></li>


                                        <span className="text-center mt-6 font-bold">User Options</span>
                                        <div className="divider"></div>

                                        <li><NavLink to="/dashboard/studentHome" ><FaHouse /> User Home</NavLink></li>
                                        <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink></li>
                                        <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                                        <li><NavLink to="/dashboard/payment"><MdPayments /> Payment</NavLink></li>
                                        <li><NavLink to="/dashboard/enrollClass"><FaBook /> My Enroll Class</NavLink></li>
                                    </>
                                    : 
                                    <>
                                        <span className="text-center mt-6 font-bold">User Options</span>
                                        <div className="divider"></div>

                                        <li><NavLink to="/dashboard/studentHome" ><FaHouse /> User Home</NavLink></li>
                                        <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                                        <li><NavLink to="/dashboard/payment"><MdPayments /> Payment</NavLink></li>
                                        <li><NavLink to="/dashboard/enrollClass"><FaBook /> My Enroll Class</NavLink></li>
                                    </>
                        }
                        {/* shared                       */}
                        <div className="divider"></div>
                        <li className="my-5"><NavLink to="/">Home</NavLink></li>
                    </ul>

                </div>
                <div className="flex-1 p-11">
                    {/* <h1 className="text-4xl font-bold">Welcome To the Another World</h1> */}

                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;