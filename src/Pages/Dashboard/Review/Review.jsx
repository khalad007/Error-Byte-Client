import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Review = () => {
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);

    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setAllClasses(data);

            });
    }, []);

    // console.log(allClasses)
    // console.log(allClasses[0]?.Title)

    const onSubmit = async (data) => {
        console.log(data)

        // send menu item to the server
        const addClasses = {
            name: data.name,
            details: data.details,
            Title: data.title,
            Price: data.Price,
            Image: data.Image,
            email: user.email,
            rating: 4


        }
        // send data to the server and then db 
        const menuRes = await axiosSecure.post('/addReview', addClasses);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            //success
            swal({
                title: "Good job!",
                text: "Review Added success!",
                icon: "success",
                timer: 1500,
                button: "Aww yiss!",
            });
            
        }
    }

    // get data from classes (all classes for taking there id and give a review )

    const classTitleOptions = allClasses.map((classItem) => (
        <option key={classItem._id} value={classItem.Title}>
            {classItem.Title}
        </option>
    ));

    return (
        <div>
            <div>
                <h1 className="text-5xl text-center my-5 font-bold">Give A <span className="text-[#007CFF]">Review</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-5">
                        {/* <label className="label">
                            <span className="label-text font-bold text-base">Name</span>
                        </label> */}
                        
                        <input {...register('name', { required: true })} type="hidden" defaultValue={user?.displayName} className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-base">Class Title</span>
                            </label>
                            
                            <select {...register("title", { required: true })} className="select select-bordered w-full">
                                <option value="" disabled selected>
                                    Select Class Title
                                </option>
                                {classTitleOptions}
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full ">
                            {/* <label className="label">
                                <span className="label-text font-bold text-base">Photo URL</span>
                            </label> */}
                            <input {...register('photoURL', { required: true })} type="hidden" defaultValue={user?.photoURL} placeholder="PhotoURL" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold text-base">Review Text</span>

                        </label>
                        <textarea {...register('details', { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                    </div>


                    <button className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Add Review </button>
                </form>
            </div>
        </div>
    );
};

export default Review;