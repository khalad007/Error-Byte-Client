import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyEnrollClass = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {payments.map((payment, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Enrolled Class {index + 1}:</h2>
                        <ul>
                            {payment.cartTitle.map((title, i) => (
                                <li key={i}>
                                    <strong>Title:</strong> {title}
                                    <br />
                                    <strong>Name:</strong> {payment.cartName[i]}
                                    <br />
                                    <img className="h-56 w-full" src={payment.cartImage[i]} alt={`Enrolled Class ${index + 1}`} />
                                    <hr />
                                </li>
                            ))}
                        </ul>
                        <p>Transaction ID: {payment.transactionId}</p>
                        <p>Price: ${payment.Price}</p>
                        <p>Date: {new Date(payment.date).toLocaleString()}</p>
                    </div>
                    <Link to={`/dashboard/enrollClass/${payment._id}`}>
                        <button className="btn btn-wide bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">
                            Continue</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MyEnrollClass;
