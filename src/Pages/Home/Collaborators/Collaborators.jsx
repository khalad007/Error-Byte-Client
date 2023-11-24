import collab1 from '../../../assets/collab1.png'
import collab2 from '../../../assets/collab2.png'
import collab3 from '../../../assets/collab3.png'
import collab4 from '../../../assets/collab4.png'
import collab5 from '../../../assets/collab5.png'
import collab6 from '../../../assets/collab6.png'

const Collaborators = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 lg:ml-44 md:ml-32 ml-10 ">
            <div className="card w-40 h-52 bg-base-100 shadow-xl my-5">
                <figure className="px-10 pt-10">
                    <img src={collab4} alt="Shoes" className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Abbb!</h2>
                </div>
            </div>

            <div className="card w-40 h-52 bg-base-100 shadow-xl  my-5">
                <figure className="px-10 pt-10">
                    <img src={collab5} alt="Shoes" className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Abbb!</h2>
                </div>
            </div>

            <div className="card w-40 h-52 bg-base-100 shadow-xl  my-5">
                <figure className="px-10 pt-10">
                    <img src={collab6} alt="Shoes" className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Abbb!</h2>
                </div>
            </div>

            <div className="card w-40 h-52 bg-base-100 shadow-xl  my-5">
                <figure className="px-10 pt-10">
                    <img src={collab3} alt="Shoes" className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Abbb!</h2>
                </div>
            </div>

            <div className="card w-40 h-52 bg-base-100 shadow-xl  my-5">
                <figure className="px-10 pt-10">
                    <img src={collab2} alt="Shoes" className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Abbb!</h2>
                </div>
            </div>

            <div className="card w-40 h-52 bg-base-100 shadow-xl  my-5">
                <figure className="px-10 pt-10">
                    <img src={collab1} alt="Shoes" className="rounded-xl w-28 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Abbb!</h2>
                </div>
            </div>
        </div>
    );
};

export default Collaborators;