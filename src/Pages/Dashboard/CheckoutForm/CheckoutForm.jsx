

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe ();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTranssactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.Price, 0)
    console.log(totalPrice)
    // const cT = cart.map(item => item.Title)
    // const cN = cart.map(item => item.Name)
    // const cI = cart.map(item => item.Image)
    // console.log(cI,cT,cN)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { Price : totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment err', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError)
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTranssactionId(paymentIntent.id);

                // save payment history to the db

                const payment = {
                    email: user.email,
                    Price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    cartTitle: cart.map(item => item.Title),
                    cartName: cart.map(item => item.Name),
                    cartImage: cart.map(item => item.Image),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment save', res.data);
                if (res.data?.paymentResult?.insertedId) {
                    swal("Good job!", "Payment Successe...!", "success");
                }
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-accent mt-7 text-white' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-error'>{error}</p>
            {
                transactionId && <p className='text-green-500 font-bold'> Your transaction id : {transactionId}</p> && navigate('/dashboard/enrollClass')
                
            }
        </form>
    );
};

export default CheckoutForm;