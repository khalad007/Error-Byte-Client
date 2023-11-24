import { useContext } from "react";
import login from "../../assets/login.jpg"
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";
// import SocialLogin from "../../Component/SocialLogin/SocialLogin";
const Login = () => {
  

    // const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                swal("Good job!", "You clicked the button!", "success");
                navigate(from, { replace: true })
            })
    }


    return (
        <div className="hero min-h-screen " >
            {/* style={backgroundImageStyle} */}
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-5">
                            <input className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] border-0 mt-11 lg:m-8 text-white" type="submit" value="Login" />
                        </div>

                        <Link to="/register"><p className="font-bold text-sm text-[#0155B7] text-center">New here? Create a New Account</p></Link>
                        <div className="divider">
                            <p className="font-medium text-sm text-center">or sign in with</p></div>
                        {/* <SocialLogin></SocialLogin> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;