import { Link } from "react-router-dom";
import teacher from "../../../assets/teacher2.jpeg"

const BecameTeacher = () => {
    return (
        <div>
            <h1 className="text-5xl text-center my-5 font-bold">Became a <span className="text-[#007CFF]">Teacher</span></h1>

            <div className="hero h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={teacher} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold"> Explore Teaching Opportunities!</h1>
                        <p className="py-6">If you want to teach people , share your knowledge with other's  than this is the perfect place for you</p>
                        <Link to="/techOnErrByte">
                            <button className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Became A Teacher</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecameTeacher;