import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaPen, FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FcViewDetails } from "react-icons/fc";

const MyClass = () => {

    // get all my class 
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { refetch, data: myClss = [] } = useQuery({
        queryKey: ['myClss', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myClasses/${user.email}`);
            return res.data;
        }
    });

    const handleDeleteClass = (myCls) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this class!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    const res = await axiosSecure.delete(`/myClasses/${myCls._id}`);
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        swal("Poof! Your class has been deleted!", {
                            icon: "success",
                        });
                    }
                } else {
                    swal("Your class is safe!");
                }
            });
    }
    return (
        <div>
            <div> <h1 className="text-5xl text-center my-5 font-bold">My Added <span className="text-[#016FE6]">Class</span></h1></div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gradient-to-r from-[#0155B7] to-[#007CFF] my-5 text-white'>
                        <tr >
                            <th>Delete</th>

                            <th>Image & Title</th>
                            <th>Teacher</th>
                            <th>Update</th>
                            <th>Details</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClss.map(myCls => <tr key={myCls._id}>
                                <td>
                                            <button onClick={() => handleDeleteClass(myCls)} className="btn btn-square btn-outline text-red-600">
                                                <FaTrash></FaTrash>
                                            </button>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myCls.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myCls.Title}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myCls.Name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{myCls.email}</span>
                                </td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${myCls._id}`}>
                                        <button className="btn btn-square btn-outline text-blue-600">
                                            <FaPen></FaPen>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                   {
                                    myCls.statuss === 'pending' ?  
                                    <button disabled className="btn btn-square btn-outline text-blue-600">
                                        <FcViewDetails></FcViewDetails>
                                    </button>
                                :  <Link to={`/dashboard/myClass/${myCls._id}`}>
                                        <button className="btn btn-square btn-outline text-blue-600">
                                            <FcViewDetails></FcViewDetails>
                                        </button>
                                    </Link>
                                   }
                                </td>
                                <td>
                                    <span className='font-bold'>{myCls.statuss}</span>
                                </td>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClass;