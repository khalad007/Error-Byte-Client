import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const SingleClass = () => {

    const classes = useLoaderData();

    const { _id, Title, Name, Image, Price, ShortDescription, TotalEnrolment } = classes;
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();

    // console.log(user.email)
    const handleAddToCart = cls => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                Name,
                Image,
                Price,
                ShortDescription,
                TotalEnrolment,
                Title
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        swal({
                            title: "Good job!",
                            text: "You added the class to the cart!",
                            icon: "success",
                            button: "Aww yiss!",
                            timer: 1500
                            
                        });
                        navigate('/dashboard/payment')
                        refetch();
                    }
                })
        }
        else {
            swal({
                title: "You are not logged in",
                text: "Please Login to add to the cart..!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        const { pathname, search, hash } = window.location;
                        const currentLocation = { pathname, search, hash };

                        navigate('/login', { state: { from: currentLocation } });
                        // navigate('/login', { state: { from: location } })
                    }
                });
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">{Title}</h1>
                    {/* Food quantity */}
                    <p className="text-sm mb-5 ml-2 text-gray-500 mt-2">Price : <span className="font-bold">{Price}</span></p>

                    <div className="flex items-center mt-2 mb-5">
                        <p className="ml-2 text-sm font-bold mr-4">Posted : {Name}</p>
                        {/* <img className="w-20 mask mask-squircle" src={Image} alt="Donator Image" /> */}
                    </div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        onClick={() => handleAddToCart(classes)}
                        className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Add Cart

                        </button>

                    {/* <div className="mt-5">
                        <p>Note: For Payment Confirm go to --</p> <Link to="/dashboard/cart"> <button className="btn">My Cart</button></Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleClass;