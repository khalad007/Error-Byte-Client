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
                    classes.map(classs => <SwiperSlide key={classs._id}><img src={classs.Image} alt="" /> <h3 className='text-2xl  text-center'>{classs.Title}
                    </h3></SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default PopularClasses;

