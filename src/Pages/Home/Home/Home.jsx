import Banner from "../Banner/Banner";
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
            <Stats></Stats>
            <Review2></Review2>
        </div>
    );
};

export default Home;