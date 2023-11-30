import collab1 from '../../../assets/collab1.png'
import collab2 from '../../../assets/collab2.png'
import collab3 from '../../../assets/collab3.png'
import collab4 from '../../../assets/collab4.png'
import collab5 from '../../../assets/collab5.png'
import collab6 from '../../../assets/collab6.png'

const Collaborators = () => {
    return (
        <>
            <h1 className="text-5xl text-center my-7 font-bold">Site <span className="text-[#007CFF]">Collaborator's</span></h1>

            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 lg:ml-44 md:ml-32 ml-10 "> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={collab3} alt="Shoes" className="rounded-xl w-60 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">IBM!</h2>
                        <p>Innovate with Intelligence, Transform with IBM.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={collab2} alt="Shoes" className="rounded-xl w-60 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Microsoft!</h2>
                        <p>Empowering Every Person, Every Organization, with Microsoft.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={collab1} alt="Shoes" className="rounded-xl w-60 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">z Security!</h2>
                        <p>Guarding Tomorrow, Securing Today.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={collab4} alt="Shoes" className="rounded-xl w-60 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Samsung!</h2>
                        <p>Inspire the World, Create the Future.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={collab5} alt="Shoes" className="rounded-xl w-60 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cisco!</h2>
                        <p>Bridging Possibilities, Connecting Tomorrows.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={collab6} alt="Shoes" className="rounded-xl w-60 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Twitter!</h2>
                        <p>Bridging Possibilities, Connecting Tomorrows.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collaborators;