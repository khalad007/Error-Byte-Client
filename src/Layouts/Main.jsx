import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import Navbar2 from "../Pages/Shared/Navbar2";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;