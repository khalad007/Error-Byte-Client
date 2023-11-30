
// import SectionTitle from "../Component/SectionTitle/SectionTitle";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import swal from "sweetalert";
import { TiDeleteOutline } from "react-icons/ti";
// import swal from "sweetalert";


const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/teacherReq');
            return res.data;
        }
    })

    const handleMakeTeacher = user => {
        // axiosSecure.patch(`/users/admin/${user._id}`)
        axiosSecure.patch(`/teacherReq/teacher/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal({
                        title: "Good job!",
                        text: `${user.name} is an Teacher now`,
                        icon: "success",
                        button: "Okh..!",
                    });
                }
            })
    }


    const handleRejectRequest = user => {
        // axiosSecure.patch(`/users/admin/${user._id}`)
        axiosSecure.patch(`/teacherReq/teacherReject/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal({
                        title: "Warning .!",
                        text: `You rejected ${user.name} request`,
                        icon: "error",
                        button: "Okh..!",
                    });
                }
            })
    }

    // const handleDeleteUser = user => {
    //     swal({
    //         title: "Are you sure?",
    //         text: "Once deleted, you will not be able to recover this imaginary file!",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //         .then((willDelete) => {
    //             if (willDelete) {
    //                 axiosSecure.delete(`/users/${user._id}`)
    //                     .then(res => {
    //                         console.log(res.data);
    //                         if (res.data.deletedCount > 0) {
    //                             refetch();
    //                             swal("Poof! Your imaginary file has been deleted!", {
    //                                 icon: "success",
    //                             });
    //                         }
    //                     })
    //             } else {
    //                 swal("Your imaginary file is safe!");
    //             }
    //         });
    // }
    return (
        <div>
            {/* <SectionTitle subHeading={} heading={}></SectionTitle> */}

            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">All users</h2>
                <h2 className="text-3xl font-bold">Totoal user : {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Rule</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'teacher' ? <span className="font-bold">Teacher</span> :
                                                <button onClick={() => handleMakeTeacher(user)}
                                                    className="btn btn-ghost text-white bg-[#d1a054]"><FaUsers></FaUsers></button>
                                        }

                                    </td>
                                    <td>
                                        {
                                            user.role === 'reject' ? <span className="font-bold text-red-600">Rejected</span>
                                                : <button onClick={() => handleRejectRequest(user)} 
                                                className="btn btn-ghost text-xl text-white bg-red-600"><TiDeleteOutline></TiDeleteOutline></button>

                                        }
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherRequest;







// // import SectionTitle from "../Component/SectionTitle/SectionTitle";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// // import { useQuery } from "@tanstack/react-query";
// // import useAxiosSecure from "../Hooks/useAxiosSecure";
// import { FaTrashCan, FaUsers } from "react-icons/fa6";
// import swal from "sweetalert";
// import { TiDeleteOutline } from "react-icons/ti";
// import { useEffect, useState } from "react";
// // import swal from "sweetalert";


// const TeacherRequest = () => {
//     const [userState, setUserState] = useState(
//         JSON.parse(localStorage.getItem('userState')) || {}
//     );
//     const axiosSecure = useAxiosSecure();
//     const { data: users = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/teacherReq');
//             return res.data;
//         }
//     })

//     // Save userState to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem('userState', JSON.stringify(userState));
//     }, [userState]);

//     const handleMakeTeacher = user => {
//         axiosSecure.patch(`/teacherReq/teacher/${user._id}`).then(res => {
//             console.log(res.data);
//             if (res.data.modifiedCount > 0) {
//                 refetch();
//                 setUserState(prevState => ({
//                     ...prevState,
//                     [user._id]: 'teacher'
//                 }));
//                 swal({
//                     title: "Good job!",
//                     text: `${user.name} is a Teacher now`,
//                     icon: "success",
//                     button: "Okh..!",
//                 });
//             }
//         });
//     };

//     const handleRejectRequest = user => {
//         axiosSecure.patch(`/teacherReq/teacherReject/${user._id}`).then(res => {
//             console.log(res.data);
//             if (res.data.modifiedCount > 0) {
//                 refetch();
//                 setUserState(prevState => ({
//                     ...prevState,
//                     [user._id]: 'reject'
//                 }));
//                 swal({
//                     title: "Good job!",
//                     text: `You rejected ${user.name}'s request`,
//                     icon: "success",
//                     button: "Okh..!",
//                 });
//             }
//         });
//     };

    
//     return (
//         <div>
//             {/* <SectionTitle subHeading={} heading={}></SectionTitle> */}

//             <div className=" flex items-center my-7 justify-between">
//                 <h2 className="text-3xl font-bold">All users</h2>
//                 <h2 className="text-3xl font-bold">Totoal Requested user : {users.length}</h2>
//             </div>
//             <div>
//                 <div className="overflow-x-auto">
//                     <table className="table table-zebra">
//                         {/* head */}
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Rule</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 users.map((user, index) => <tr key={user._id}>
//                                     <th>{index + 1}</th>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>
//                                         {userState[user._id] === 'teacher' ? (
//                                             <span className="font-bold">Teacher</span>
//                                         ) : (
//                                             <button
//                                                 onClick={() => handleMakeTeacher(user)}
//                                                 className="btn btn-ghost text-white bg-[#d1a054]"
//                                                 disabled={userState[user._id] === 'reject'}
//                                             >
//                                                 <FaUsers></FaUsers>
//                                             </button>
//                                         )}
//                                     </td>
//                                     <td>
//                                         {userState[user._id] === 'reject' ? (
//                                             <span className="text-red-600 font-bold">Rejected</span>
//                                         ) : (
//                                             <button
//                                                 onClick={() => handleRejectRequest(user)}
//                                                 className="btn btn-ghost text-xl text-white bg-red-600"
//                                                 disabled={userState[user._id] === 'reject'}
//                                             >
//                                                 <TiDeleteOutline></TiDeleteOutline>
//                                             </button>
//                                         )}
//                                     </td>
//                                 </tr>)
//                             }


//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TeacherRequest;