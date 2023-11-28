
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MyEnrollAss = () => {
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addAssignment');
            return res.data;
        }
    })
    console.log(users)


    const onSubmit = async (data) => {
        console.log(data)

        // send menu item to the server 
        const teacherRequest = {
            assignment: 1,
            submissionTime: new Date().toISOString(),

        }
        // send data to the server and then db 
        const menuRes = await axiosSecure.post('/assignmentPerDay', teacherRequest);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            //success
            swal({
                title: "Good job!",
                text: "Assignment Submit success!",
                icon: "success",
                timer: 1500,
                button: "Aww yiss!",
            });
        }
    }

    return (
        <div>
            <div className='my-14 flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Review Classes</h1>
                <Link to="/dashboard/review">
                    <button className='btn btn-wide bg-[#0070E8] text-white'>TER</button>
                </Link>
                
            </div>
            <h1 className='text-4xl font-bold text-center my-5'>Submit Your <span className='text-[#007CFF]'>Assignment</span></h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id} className="bg-base-200">
                                <th>1</th>
                                <td>{user.Title}</td>
                                <td>{user.Description}</td>
                                <td>{new Date(user.Deadline).toLocaleString()}</td>
                                <td>
                                    <button onClick={handleSubmit(onSubmit)} className='btn btn-neutral'>Submit</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrollAss;