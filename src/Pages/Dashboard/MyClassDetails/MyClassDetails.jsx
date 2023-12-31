import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import swal from "sweetalert";
import assImg from "../../../assets/assImg.webp"
import assProg from "../../../assets/assProg.jpeg"
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const MyClassDetails = () => {


    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const { user } = useAuth();

    // console.log(user)

    let id = useParams()
    console.log(id)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addAssignment');
            return res.data;
        }
    })
    // for Per day ass 
    const { data: userss = [] } = useQuery({
        queryKey: ['userss'],
        queryFn: async () => {
            const res = await axiosSecure.get('/perDayAss');
            return res.data;
        }
    })
    console.log(userss)

    const onSubmit = async (data) => {
        console.log(data)



        // send menu item to the server

        const addAss = {
            ClassID: id.id,
            Title: data.Title,
            Description: data.Description,
            Deadline: data.Deadline,
            statuss: 'pending'
        }
        console.log(addAss)
        // send data to the server and then db 
        const menuRes = await axiosSecure.post('/addAssignment', addAss);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            //success
            swal({
                title: "Good job!",
                text: "Added Assignment success!",
                icon: "success",
                button: "Aww yiss!",
            });
            refetch();
        }
    }
    return (
        <>
            <div>
                {/* class progress section  */}
                <h1 className="text-3xl font-bold my-4 ">Class Progress <span className="text-[#007CFF]">Section</span> </h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className="card h-[80vh] bg-base-100 shadow-xl">
                        <figure><img className="h-56 w-full" src={assProg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Total Enrollment</h2>
                        </div>
                    </div>

                    <div className="card h-[80vh] bg-base-100 shadow-xl">
                        <figure><img className="h-56 w-full" src={assProg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Total Assignment : <span className="text-red-600">{users.length}</span></h2>

                        </div>
                    </div>

                    <div className="card h-[80vh] bg-base-100 shadow-xl">
                        <figure><img className="h-56 w-full" src={assProg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <h2 className="card-title">Per Day Assignment Submitted : <span className="text-red-600">{userss.length}</span></h2>
                            <h2 className="card-title">First Assignment Submitted Time :

                                {
                                    userss.map(usr => <span key={usr._id} className="text-red-600">{new Date(usr.submissionTime).toLocaleString()}</span>)
                                }

                            </h2>
                        </div>
                    </div>
                </div>


                <div className="divider my-10"></div>



                {/* class Assignment section  */}
                <div>
                    <h1 className="text-3xl font-bold my-4 ">Class Assignment <span className="text-[#007CFF]">Section</span></h1>
                    <div className="card w-96 h-[80vh] bg-base-100 shadow-xl">
                        <figure><img className="h-56 w-full" src={assImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Give A Assignment For Student</h2>

                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Create</button> */}
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn bg-[#007CFF] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Create</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Add Assignment.!</h3>




                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div className="form-control w-full my-5">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Title</span>
                                                </label>
                                                <input {...register('Title', { required: true })} placeholder="Title" type="text" className="input input-bordered w-full " />

                                            </div>

                                            <div className="form-control w-full my-5">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Description</span>
                                                </label>
                                                <input {...register('Description', { required: true })} placeholder='Description' type="text" className="input input-bordered w-full " />

                                            </div>

                                            <div className="form-control w-full my-5">
                                                <label className="label">
                                                    <span className="label-text font-bold text-base">Deadline</span>
                                                </label>
                                                <input {...register('Deadline', { required: true })} placeholder='Deadline' type="datetime-local" className="input input-bordered w-full " />

                                            </div>

                                            <button className="btn my-4 bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">
                                                Create</button>
                                        </form>




                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyClassDetails;

