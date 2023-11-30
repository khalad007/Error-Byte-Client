import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import stats from "../../../assets/stats.jpeg"

const Stats = () => {

    const axiosSecure = useAxiosSecure();

    // for total user 
    const { data: clsForAdmin = [], refetch } = useQuery({
        queryKey: ['clsForAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get('/usersForHome');
            return res.data;
        }
    })
    console.log(clsForAdmin.length)
    // for total enrollment
    const { data: enrollment = [] } = useQuery({
        queryKey: ['enrollment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/enrollmentForHome');
            return res.data;
        }
    })
    console.log(enrollment.length)
    // for total enrollment
    const { data: totalClassForHome = [] } = useQuery({
        queryKey: ['totalClassForHome'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classesForHome');
            return res.data;
        }
    })
    console.log(totalClassForHome.length)
    return (
        <div>
            <h1 className="text-5xl text-center my-5 font-bold">Error Byte <span className="text-[#007CFF]">stat's</span></h1>
            <div className="hero h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={stats} className="max-w-sm rounded-lg shadow-2xl lg:ml-10" />
                    <div className="stats stats-vertical shadow">

                        <div className="stat">
                            <div className="stat-title">Total Real User</div>
                            <div className="stat-value">{clsForAdmin.length}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Classes</div>
                            <div className="stat-value">{totalClassForHome.length}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Real Enrollment</div>
                            <div className="stat-value">{enrollment.length}</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;