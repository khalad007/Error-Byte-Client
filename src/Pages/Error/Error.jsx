// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error.jpg"


const Error = () => {
    return (
        <div>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Error</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
            <div className="flex justify-center">
                <img className="h-[80vh]" src={errorImg} alt="Error" />
            </div>
            <div className="flex justify-center">
                <Link to="/"><button className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error; 