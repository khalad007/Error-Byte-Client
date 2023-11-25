import { useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard";


const AllClasses = () => {

    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setAllClasses(data);
                // setSortedFoods(data);
            });
    }, []);


    return (
        <div>
            <h1 className="text-center mt-14 text-5xl font-bold">Available <span className="text-[#007CFF]">Classes</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 my-8">
                {/* {sortedFoods.map(allFood => <AvailableFoodsCard key={allFood._id} allFood={allFood} />
                )} */}
                {
                    allClasses.map(classes => <AllClassesCard
                        key={classes._id}
                        classes={classes}
                    ></AllClassesCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;