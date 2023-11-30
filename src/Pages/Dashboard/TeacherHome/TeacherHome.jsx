import useAuth from "../../../Hooks/useAuth";


const TeacherHome = () => {

    const {user} = useAuth();
    return (
        <div>
                <h1 className="text-4xl font-bold text-center my-9"><span className="text-[#007CFF]">Teacher's</span> Dashboard</h1>
            <div className="hero h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user?.photoURL} className="w-48 h-48 rounded shadow-2xl" />
                    <div>
                    <p className='text-2xl font-bold my-5'>Email : {user?.email}</p>
                        <p className='text-xl font-bold my-5'>Number : No Contact Number</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherHome;