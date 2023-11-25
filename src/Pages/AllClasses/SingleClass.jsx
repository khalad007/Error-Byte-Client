import { useLoaderData } from "react-router-dom";


const SingleClass = () => {

    const classes = useLoaderData();

    const { _id, Title, Name, Image, Price, ShortDescription,  } = classes;

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">{Title}</h1>
                    {/* Food quantity */}
                    <p className="text-sm mb-5 text-gray-500 mt-2">Serves <span className="font-bold">{Price}</span> people</p>

                    <div className="flex items-center mt-2 mb-5">
                        <p className="ml-2 text-sm font-bold mr-4">Donor: {Name}</p>
                        {/* <img className="w-20 mask mask-squircle" src={Image} alt="Donator Image" /> */}
                    </div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                </div>
            </div>
        </div>
    );
};

export default SingleClass;