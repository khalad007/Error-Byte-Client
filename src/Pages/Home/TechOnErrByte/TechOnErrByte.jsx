
// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";


const TechOnErrByte = () => {
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    console.log(user)

    const onSubmit = async (data) => {
        console.log(data)


        // send menu item to the server wiht img 
        const teacherRequest = {
            name: data.name,
            category: data.category,
            title: data.title,
            experience: data.experience,
            photoURL: data.photoURL
            
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

    return (
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
                    <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Apply </button>
                </form>
            </div>
        </div>
    );
};

export default TechOnErrByte;

