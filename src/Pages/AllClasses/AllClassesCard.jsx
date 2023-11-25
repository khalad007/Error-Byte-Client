import React from 'react';

const AllClassesCard = ({ classes }) => {


    const { _id, Title, Name, Image, Price, ShortDescription, TotalEnrolment } = classes;

    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-52 w-full" src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p className='text-sm mt-2'>Total Enrolment : <span className='font-bold'>{TotalEnrolment}</span></p>
                <p className='text-sm mt-2'>Description : <span className='font-bold'>{ShortDescription}</span></p>
                <p className='text-sm mt-2'>Price : <span className='font-bold'>$ {Price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] text-white">Enroll</button>
                </div>
            </div>
        </div>

    );
};

export default AllClassesCard;