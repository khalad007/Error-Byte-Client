// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../../Providers/AuthProvider";

// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const AddClass = () => {
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(user)

    // get user 
    const onSubmit = async (data) => {
        console.log(data)

        // send menu item to the server
        const addClasses = {
            Name: data.Name,
            ShortDescription: data.ShortDescription,
            Title: data.Title,
            Price: data.Price,
            Image: data.Image,
            email: user.email,
            statuss: 'pending'
            

        }
        // send data to the server and then db 
        const menuRes = await axiosSecure.post('/addClass', addClasses);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            //success
            swal({
                title: "Good job!",
                text: "Added Class success!",
                icon: "success",
                timer: 1500,
                button: "Aww yiss!",
            });
            navigate('/dashboard/myClass')
        }
    }

    return (
        <div className="my-7">
            <div>
                <div>
                    <div> <h1 className="text-5xl text-center my-5 font-bold">Add <span className="text-[#016FE6]">Class</span></h1></div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
                        <div className="form-control w-full my-5">
                            <label className="label">
                                <span className="label-text font-bold text-base">Name</span>
                            </label>
                            <input {...register('Name', { required: true })} defaultValue={user?.displayName} type="text" className="input input-bordered w-full " />

                        </div>

                        <div className="form-control w-full my-5">
                            <label className="label">
                                <span className="label-text font-bold text-base">Email</span>
                            </label>
                            <input {...register('email', { required: true })} defaultValue={user?.email} type="text" className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold text-base">Class Title</span>
                            </label>
                            <input {...register('Title', { required: true })} type="text" placeholder="Class Title" className="input input-bordered w-full " />

                        </div>

                        {/* price */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold text-base">Photo URL</span>
                            </label>
                            <input {...register('Image', { required: true })}  placeholder="PhotoURL" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-base">Price</span>
                        </label>
                        <input {...register('Price', { required: true })} placeholder="Price" type="number" className="input input-bordered w-full " />

                    </div>


                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold text-base">Description</span>

                        </label>
                        <textarea {...register('ShortDescription', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>
                    <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Add Class</button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;