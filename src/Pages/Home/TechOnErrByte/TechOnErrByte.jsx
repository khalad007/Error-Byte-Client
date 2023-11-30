import { useForm } from "react-hook-form";

import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAdmin from "../../../Hooks/useAdmin";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const TechOnErrByte = () => {
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const { user } = useAuth();
    console.log(user)
    const [isAdmin] = useAdmin();

    // get user 
    const onSubmit = async (data) => {
        console.log(data)

        // send menu item to the server wiht img 
        const teacherRequest = {
            name: data.name,
            category: data.category,
            title: data.title,
            experience: data.experience,
            photoURL: data.photoURL,
            email: user.email,
            role: 'pending'

        }
        // send data to the server and then db 
        const menuRes = await axiosSecure.post('/teacherReq', teacherRequest);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            //success
            swal({
                title: "Good job!",
                text: "Added item success!",
                icon: "success",
                timer: 1500,
                button: "Aww yiss!",
            });
        }
    }
    // const axiosSecuree = useAxiosSecure();

    const { data: statuss = [] } = useQuery({
        queryKey: ['statuss', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myApplyStatus/${user.email}`);
            return res.data;
        }
    });
    console.log(statuss)
    console.log(user)
    // console.log(statuss[0]["name"])
    console.log(statuss[0]?.name);
    console.log(statuss[0]?.role);




    return (
        <>
            {
                statuss[0]?.role === 'pending' ?
                    <div className="flex items-center justify-center"><span className="text-center text-4xl my-16">
                        Your application is pending .</span></div>

                    : statuss[0]?.role === 'teacher' ?

                        <div> <h1 className="text-5xl text-center my-10 font-bold">Congrates..! You are a <span className="text-[#007CFF]">Teacher Now</span></h1></div>

                        :
                        statuss[0]?.role === 'reject' ?

                            // this is rejected 

                            <div className="my-7">
                                <div>
                                    <div>
                                        <div> <h1 className="text-5xl text-center my-5 font-bold">You are <span className="text-warning">Rejected</span></h1></div>

                                    </div>
                                    <div className="flex justify-around items-center">
                                        <div> <h1 className="text-5xl text-center my-5 font-bold">Again Apply for <span className="text-[#007CFF]">Teaching</span></h1></div>
                                        <div><img className="w-24 h-24 rounded-xl " src={user.photoURL} alt="" /></div>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control w-full my-5">
                                            <label className="label">
                                                <span className="label-text font-bold text-base">Name</span>
                                            </label>
                                            <input {...register('name', { required: true })} defaultValue={user?.displayName} type="text" className="input input-bordered w-full " />

                                        </div>

                                        <div className="flex gap-5">
                                            <div className="form-control w-full ">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Class Title</span>
                                                </label>
                                                <input {...register('title', { required: true })} type="text" placeholder="Class Title" className="input input-bordered w-full " />

                                            </div>

                                            {/* price */}
                                            <div className="form-control w-full ">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Photo URL</span>
                                                </label>
                                                <input {...register('photoURL', { required: true })} defaultValue={user?.photoURL} placeholder="PhotoURL" className="input input-bordered w-full " />

                                            </div>
                                        </div>


                                        <div className="flex gap-5">
                                            {/* Select 1 */}
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Experience</span>
                                                </label>
                                                <select {...register('experience', { required: true })} className="select select-bordered w-full">
                                                    <option value="" disabled>Select an option</option>
                                                    <option value="Beginner">Beginner</option>
                                                    <option value="Intermediate">Intermediate</option>
                                                    <option value="Advanced">Advanced</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>

                                            {/* Select 2 */}
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Category</span>
                                                </label>
                                                <select {...register('category', { required: true })} className="select select-bordered w-full">
                                                    <option value="" disabled>Select an option</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="App Development">App Development</option>
                                                    <option value="Photography">Photography</option>
                                                    <option value="Cyber Security">Cyber Security</option>
                                                    <option value="Data Science">Data Science</option>
                                                    <option value="Programming">Programming</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                        </div>
                                        {/* {
                    payments[0].role === 'reject' ? <span>apply again</span> :
                        <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Apply </button>
                } */}
                                        <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Apply Again</button>
                                    </form>
                                </div>
                            </div>

                            : isAdmin ?



                                <div className="my-7">
                                    <div>
                                        <div>
                                            <div> <h1 className="text-5xl text-center my-5 font-bold">You are <span className="text-green-600">Admin</span></h1></div>

                                        </div>
                                        <div className="flex justify-around items-center">
                                            <div> <h1 className="text-3xl text-center my-5 font-bold">You can also Apply for <span className="text-[#007CFF]">Teaching </span>
                                             and Accept Your self <FaRegFaceLaughSquint></FaRegFaceLaughSquint>
                                            </h1></div>
                                            <div><img className="w-24 h-24 rounded-xl " src={user.photoURL} alt="" /></div>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-control w-full my-5">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Name</span>
                                                </label>
                                                <input {...register('name', { required: true })} defaultValue={user?.displayName} type="text" className="input input-bordered w-full " />

                                            </div>

                                            <div className="flex gap-5">
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Class Title</span>
                                                    </label>
                                                    <input {...register('title', { required: true })} type="text" placeholder="Class Title" className="input input-bordered w-full " />

                                                </div>

                                                {/* price */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Photo URL</span>
                                                    </label>
                                                    <input {...register('photoURL', { required: true })} defaultValue={user?.photoURL} placeholder="PhotoURL" className="input input-bordered w-full " />

                                                </div>
                                            </div>


                                            <div className="flex gap-5">
                                                {/* Select 1 */}
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Experience</span>
                                                    </label>
                                                    <select {...register('experience', { required: true })} className="select select-bordered w-full">
                                                        <option value="" disabled>Select an option</option>
                                                        <option value="Beginner">Beginner</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Advanced">Advanced</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>

                                                {/* Select 2 */}
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Category</span>
                                                    </label>
                                                    <select {...register('category', { required: true })} className="select select-bordered w-full">
                                                        <option value="" disabled>Select an option</option>
                                                        <option value="Web Development">Web Development</option>
                                                        <option value="App Development">App Development</option>
                                                        <option value="Photography">Photography</option>
                                                        <option value="Cyber Security">Cyber Security</option>
                                                        <option value="Data Science">Data Science</option>
                                                        <option value="Programming">Programming</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>
                                            </div>
              
                                            <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Apply Again</button>
                                        </form>
                                    </div>
                                </div>



                                :
                                // this is new user 
                                <div className="my-7">
                                    <div>
                                        <div className="flex justify-around items-center">
                                            <div> <h1 className="text-5xl text-center my-5 font-bold">Apply for <span className="text-[#007CFF]">Teaching</span></h1></div>
                                            <div><img className="w-24 h-24 rounded-xl " src={user.photoURL} alt="" /></div>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-control w-full my-5">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Name</span>
                                                </label>
                                                <input {...register('name', { required: true })} defaultValue={user?.displayName} type="text" className="input input-bordered w-full " />

                                            </div>

                                            <div className="flex gap-5">
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Title</span>
                                                    </label>
                                                    <input {...register('title', { required: true })} type="text" placeholder="Class Title" className="input input-bordered w-full " />

                                                </div>

                                                {/* price */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Photo URL</span>
                                                    </label>
                                                    <input {...register('photoURL', { required: true })} defaultValue={user?.photoURL} placeholder="PhotoURL" className="input input-bordered w-full " />

                                                </div>
                                            </div>


                                            <div className="flex gap-5">
                                                {/* Select 1 */}
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Experience</span>
                                                    </label>
                                                    <select {...register('experience', { required: true })} className="select select-bordered w-full">
                                                        <option value="" disabled>Select an option</option>
                                                        <option value="Beginner">Beginner</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Advanced">Advanced</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>

                                                {/* Select 2 */}
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-base">Category</span>
                                                    </label>
                                                    <select {...register('category', { required: true })} className="select select-bordered w-full">
                                                        <option value="" disabled>Select an option</option>
                                                        <option value="Web Development">Web Development</option>
                                                        <option value="App Development">App Development</option>
                                                        <option value="Photography">Photography</option>
                                                        <option value="Cyber Security">Cyber Security</option>
                                                        <option value="Data Science">Data Science</option>
                                                        <option value="Programming">Programming</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>
                                            </div>
                                            {/* {
                    payments[0].role === 'reject' ? <span>apply again</span> :
                        <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Apply </button>
                } */}
                                            <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Apply </button>
                                        </form>
                                    </div>
                                </div>



            }



        </>

    );
};

export default TechOnErrByte;

