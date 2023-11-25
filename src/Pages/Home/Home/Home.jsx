import Banner from "../Banner/Banner";
import BecameTeacher from "../BecameTeacher/BecameTeacher";
import Collaborators from "../Collaborators/Collaborators";
import PopularClasses from "../PopularClasses/PopularClasses";
import Review2 from "../Review2/Review2";
import Stats from "../Stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collaborators></Collaborators>
            <PopularClasses></PopularClasses>
            <div className="mb-[340px] lg:mb-0">
                <Stats></Stats>
            </div>
            <div className="mb-72 lg:mb-0">
                <BecameTeacher></BecameTeacher>
            </div>
            <div>
                <Review2></Review2>
            </div>
        </div>
    );
};

export default Home;