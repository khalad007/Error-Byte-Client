import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-4">Payment <span className="text-[#0155B7]">Section</span></h1>
            <p className="text-2xl font-bold text-center my-2">Confirm Your Classes</p>

            <h3 className="text-error text-xl font-bold my-10">More Payment Method are Comming soon....</h3>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>



            <div className="mt-10">
                <h1 className="text-2xl font-bold text-center my-3 text-[#0155B7]">Example Card : </h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Brand</th>
                                <th>Number</th>
                                <th>CVC</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th className="text-xl"><FaCcVisa></FaCcVisa></th>
                                <th>VISA</th>
                                <td>4242424242424242</td>
                                <td>Any 3 Digit</td>
                                <td>Any Future Date</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th className="text-xl"><FaCcMastercard></FaCcMastercard></th>
                                <th>Mastercard</th>
                                <td>5555555555554444</td>
                                <td>Any 3 Digit</td>
                                <td>Any Future Date</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className="text-xl"><SiAmericanexpress></SiAmericanexpress></th>
                                <th>American Express</th>
                                <td>371449635398431</td>
                                <td>Any 4 Digit</td>
                                <td>Any Future Date</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payment;