// import SectionTitle from "../Component/SectionTitle/SectionTitle";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import swal from "sweetalert";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal({
                        title: "Good job!",
                        text: `${user.name} is an Admin now`,
                        icon: "success",
                        button: "Okh..!",
                    });
                }
            })
    }
   
    return (
        <div>

            <div className="flex justify-between my-10 text-4xl font-bold">
                <h2>All users</h2>
                <h2>Total user : {users.length}</h2>
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
                                <th>Photo</th>
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
                                            user.role === 'admin' ? <span className="font-bold">Admin</span> :
                                                <button onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost text-white bg-[#007CFF]"><FaUsers></FaUsers></button>
                                        }

                                    </td>
                                    <td>
                                        <img className="w-9 rounded-full" src={user.photoURL} alt="" />
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

export default AllUsers;
