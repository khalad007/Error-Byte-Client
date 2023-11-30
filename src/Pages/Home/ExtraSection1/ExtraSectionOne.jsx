import busImg from "../../../assets/bus.webp"

const ExtraSectionOne = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={busImg} className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get Business with us.!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary mr-7">ErrByte Business</button>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;