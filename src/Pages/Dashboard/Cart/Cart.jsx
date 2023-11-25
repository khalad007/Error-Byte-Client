import { Link } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.Price, 0)
    
    return (
        <div>

            <div className='flex justify-evenly my-5'>
                <h2 className="text-3xl font-bold">Items: {cart.length}</h2>
                <h2 className="text-3xl font-bold ">Total Price: {totalPrice}</h2>
                {cart.length ?
                    <Link to="/dashboard/payment"><button className='btn bg-green-500 text-white'>Pay</button></Link>
                    :
                    <button disabled className='btn bg-green-500 text-white'>Pay</button>
                }
            </div>
            {
                cart.map(item => <div key={item._id} className="card my-3 card-side bg-base-100 shadow-xl">
                    <figure><img className='h-44' src={item.Image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.Title}</h2>
                        <p>{item.ShortDescription}</p>
                        <p>$ {item.Price}</p>
                       
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;

