import { Link } from 'react-router-dom';
import classes from '../../../assets/classes.jpg'
import people from '../../../assets/people.jpg'
import treq from '../../../assets/treq.jpg'
import useAuth from '../../../Hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <>
            <h1 className='text-3xl font-bold italic my-10'>
                Hi.... Welcom Back  {user?.displayName}
            </h1>
            <div className='flex justify-between my-8'>
                <div className='bg-gradient-to-r from-[#0155B7] to-[#007CFF] rounded-lg h-96 w-96 flex justify-center items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#0155B7] to-[#007CFF] rounded-xl h-96 w-96 text-center pt-28 text-white'>
                    <p className='text-xl font-bold mt-6'>Name : {user?.displayName}</p>
                    <p className='text-xl font-bold mt-6'>Email : {user?.email}</p>
                    <p className='text-xl font-bold mt-6'>Number : No Contact Number</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card  glass">
                    <figure><img className='w-60 h-60' src={classes} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">All Classes</h2>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/allClassForAdmin">
                                <button className="btn btn-primary">Go to!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img className='w-60 h-60' src={people} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Users</h2>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/users">
                                <button className="btn btn-primary">Go to!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img className='w-60 h-60' src={treq} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher Request</h2>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/teacherRequest">
                                <button className="btn btn-primary">Go to</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;