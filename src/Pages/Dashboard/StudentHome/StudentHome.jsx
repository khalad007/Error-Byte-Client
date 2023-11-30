import React, { useContext } from 'react';
import userHomeImg from "../../../assets/userhome.png"
import { AuthContext } from '../../../Providers/AuthProvider';
const StudentHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div>
                <div className='flex justify-between items-center'>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] btn-primary join-item">Search</button>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={userHomeImg} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome Back ... ! .{user?.displayName}</h1>


                        </div>
                    </div>
                </div>

            </div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={userHomeImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Student Dashboard</h1>
                        <p className='text-xl font-bold my-5'>Email : {user?.email}</p>
                        <p className='text-xl font-bold my-5'>Number : No Contact Number</p>


                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentHome;