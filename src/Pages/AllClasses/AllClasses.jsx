import React, { useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard";
import "aos/dist/aos.css";
import AOS from "aos";

const AllClasses = () => {
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('https://twelfth-assignment-server-steel.vercel.app/allClasses')
            .then(res => res.json())
            .then(data => {
                setAllClasses(data);
            });
        
        // Initialize AOS when the component mounts
        AOS.init({ duration: 1000, offset: 100, easing: 'ease-in-out' });
    }, []);

    return (
        <div>
            <h1 className="text-center mt-14 text-5xl font-bold">Available <span className="text-[#007CFF]">Classes</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 my-8">
                {
                    allClasses.map((classes, index) => (
                        <div key={classes._id} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                            <AllClassesCard
                                key={classes._id}
                                classes={classes}
                            ></AllClassesCard>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllClasses;
