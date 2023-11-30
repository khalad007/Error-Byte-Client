import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";


const SeeProgress = () => {
    const { Title } = useLoaderData();
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
            {/* {
                clsForAdmin.map(itm => <h1 key={itm._id}>{itm.Title}</h1>)
            } */}

            {selectedClass ? (
                // Render the class data
                <div>
                    <h1>{selectedClass.Title}</h1>
                    {/* Render other class data here */}
                </div>
            ) : (
                // If no matching class is found
                <p>There are no reviews for this class.</p>
            )}
            
        </div>
    );
};

export default SeeProgress;