import Banner from "../Banner/Banner";
import BecameTeacher from "../BecameTeacher/BecameTeacher";
import Collaborators from "../Collaborators/Collaborators";
import ExtraSectionOne from "../ExtraSection1/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSection2/ExtraSectionTwo";
import Faq from "../Faq/Faq";
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
            <h1 className="text-5xl text-center my-10 font-bold">Subscribe <span className="text-[#007CFF]">newsletter</span></h1>
            <ExtraSectionTwo></ExtraSectionTwo>
            <h1 className="text-5xl text-center my-10 font-bold">Business with <span className="text-[#007CFF]">us</span></h1>
            <ExtraSectionOne></ExtraSectionOne>
            <h1 className="text-5xl text-center my-10 font-bold">Frequently Asked <span className="text-[#007CFF]">Questions</span></h1>
            <Faq></Faq>
            <div className="mt-10"></div>
        </div>
    );
};

export default Home;