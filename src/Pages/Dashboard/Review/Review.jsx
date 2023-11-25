import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";


const Review = () => {
    const { register, handleSubmit } = useForm()
    const { user } = useContext(AuthContext);

    const onSubmit = async (data) => {
        console.log(data)
        
        if (res.data.success) {
            // send menu item to the server wiht img 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // send data to the server and then db 
            // const menuRes = await axiosSecure.post('/menu', menuItem);
            // console.log(menuRes.data)
            // if (menuRes.data.insertedId) {
            //     //success
            //     swal({
            //         title: "Good job!",
            //         text: "Added item success!",
            //         icon: "success",
            //         timer: 1500,
            //         button: "Aww yiss!",
            //     });
            // }
        }
        console.log(res.data)
    }

    return (
        <div>
            <div>
                <h1 className="text-5xl text-center my-5 font-bold">Give A <span className="text-[#007CFF]">Review</span></h1>
                <form>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text font-bold text-base">Name</span>
                        </label>
                        <input {...register('name', { required: true })} type="text" disabled defaultValue={user.displayName} className="input input-bordered w-full " />

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
                            <input {...register('photoURL', { required: true })} defaultValue={user.photoURL} disabled placeholder="PhotoURL" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold text-base">Review Text</span>

                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>


                    <button className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Add Review </button>
                </form>
            </div>
        </div>
    );
};

export default Review;