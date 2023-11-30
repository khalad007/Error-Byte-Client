import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/caro1.jpg"
import useClasses from '../../../Hooks/useClasses';



const PopularClasses = () => {

    const [classes] = useClasses();
    console.log(classes)
    return (
        <section>
            <h1 className="text-5xl text-center my-7 font-bold">Popular <span className="text-[#007CFF]">Classes's</span></h1>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                {
                    classes.map(classs => <SwiperSlide key={classs._id}><img className='w-72 h-96' src={classs.Image} alt="" />
                        <h3 className='text-xl font-semibold mt-14  text-center'>{classs.Title}
                        </h3></SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default PopularClasses;

