import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";

const Dashboard2 = () => {
    return (
        <div>
            <h1 className="text-3xl mt-7 font-semibold">If you can see <span className="font-bold italic text-[#007CFF]"> all three </span>
                dashboard option's then Your are an <br />
                 <span className="text-4xl font-bold italic text-red-600">Admin <MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings></span> </h1>

            <h1 className="text-3xl mt-7 font-semibold">If you can see <span className="font-bold italic text-[#007CFF]"> Teacher's & User's </span>
                dashboard option's then Your are a <br />
                 <span className="text-4xl font-bold italic text-red-600">Teacher <FaPersonChalkboard></FaPersonChalkboard></span> </h1>


            <h1 className="text-3xl mt-7 font-semibold">If you can see <span className="font-bold italic text-[#007CFF]"> Only User's </span>
                dashboard option's then Your are a <br />
                 <span className="text-4xl font-bold italic text-red-600">Only User <FaUserGraduate></FaUserGraduate></span> </h1>
           
        </div>
    );
};

export default Dashboard2;