import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";


const SeeProgress = () => {
    const { Title, Name, email } = useLoaderData();
    console.log(Title)

    const axiosSecure = useAxiosSecure();
    const { data: clsForAdmin = [], refetch } = useQuery({
        queryKey: ['clsForAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allClassForAdminSeeReview');
            return res.data;
        }
    })

    console.log(clsForAdmin)

    const selectedClass = clsForAdmin.find((itm) => itm.Title === Title);


    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-6'>See Progress</h1>


            {selectedClass ? (

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Title : {selectedClass.Title}!</h2>
                            <p>Name : {selectedClass.name}</p>
                            <p>Review : {selectedClass.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={selectedClass.rating}
                                readOnly
                            />
                        </div>
                    </div>


                </div>
            ) : (

                <p>There are no reviews for this class.</p>
            )}

        </div>
    );
};

export default SeeProgress;