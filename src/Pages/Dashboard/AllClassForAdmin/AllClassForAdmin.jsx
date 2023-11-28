import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { GiProgression } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const AllClassForAdmin = () => {


    const axiosSecure = useAxiosSecure();
    const { data: clsForAdmin = [], refetch } = useQuery({
        queryKey: ['clsForAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allClassForAdmin');
            return res.data;
        }
    })

    console.log(clsForAdmin[0]?.Name)

    // for reject /allClassForAdmin/classReject/
    const handleRejectRequest = user => {

        axiosSecure.patch(`/allClassForAdmin/classReject/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal({
                        title: "Warning .!",
                        text: `You rejected class request`,
                        icon: "error",
                        button: "Okh..!",
                    });
                }
            })
    }

    // for approve .......................///////////////////////,...............
    const handleApproveCard = user => {

        console.log(user)
        axiosSecure.patch(`/allClassForAdmin/classApprove/${user._id}`)
            .then(res => {
                console.log(res.data)
                console.log(user)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal({
                        title: "Good job!",
                        text: 'Class Approved',
                        icon: "success",
                        button: "Okh..!",
                    });
                }
            })

    }

    const handleAddClass = async (user) => {
        // Prepare data for the POST request
        const addClassData = {
            Name: user.Name, // Adjust the property names based on your user object structure
            ShortDescription: user.ShortDescription,
            Title: user.Title,
            Price: user.Price,
            Image: user.Image,
            email: user.email,
            TotalEnrolment: 0, // Adjust the status as needed
        };

        try {
            // Send a POST request to add the class
            const response = await axiosSecure.post('/addClassFrom', addClassData);


            console.log(response.data);



        } catch (error) {
            console.error('Error adding class:', error);
        }
    };


    const handleButtonClick = async (user) => {

        try {
            // Send a POST request to add the class
            await handleApproveCard(user);
            await handleAddClass(user);
        } catch (error) {
            console.error('Error adding class:', error);
        }
        // Call both functions

    };


    return (
        <div>
            <h1 className='text-4xl font-bold text-center '>All Pending Classes from <span className='text-[#007CFF]'>Teacher's</span></h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <span>Reject</span>
                            </th>
                            <th>Image & Title</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Approve</th>
                            <th>See Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clsForAdmin.map(user => <tr key={user._id}>
                                <th>

                                    {
                                        user.statuss === 'reject' ? <span className="font-bold text-red-600">Rejected</span>
                                            : user.statuss === 'approve' ? <button disabled onClick={() => handleRejectRequest(user)} className="btn text-white bg-red-600 btn-circle btn-outline">
                                                <FaTrashCan></FaTrashCan>
                                            </button> :
                                                <button onClick={() => handleRejectRequest(user)} className="btn text-white bg-red-600 btn-circle btn-outline">
                                                    <FaTrashCan></FaTrashCan>
                                                </button>}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.Title}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className='font-bold'>{user.email}</span>

                                </td>
                                <td className='text-xs'>{user.ShortDescription}</td>
                                <th>
                                    {
                                        user.statuss === 'reject' ? <button disabled className="btn text-xl btn-circle btn-outline">
                                            <FcApproval></FcApproval>
                                        </button> : user.statuss === 'approve' ? <span className="font-bold text-green-500">Approved</span> :
                                            <button onClick={() => handleButtonClick(user)} className="btn text-xl btn-circle btn-outline">
                                                <FcApproval></FcApproval>
                                            </button>

                                    }
                                </th>
                                <th>
                                    {
                                        user.statuss === 'approve' ?
                                            <Link to={`/dashboard/seeProgress/${user._id}`}>
                                                <button className="btn btn-circle btn-outline">
                                                    <GiProgression></GiProgression>
                                                </button>
                                            </Link>

                                            :

                                            <button disabled className="btn btn-circle btn-outline">
                                                <GiProgression></GiProgression>
                                            </button>
                                    }
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllClassForAdmin;