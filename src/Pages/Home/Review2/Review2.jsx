import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
// import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quoteImg from "../../../assets/quote-left.svg"
import { Rating } from '@smastrom/react-rating';

const Review2 = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://twelfth-assignment-server-steel.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    })
    return (
        <section className="my-9">
            
            <h1 className="text-5xl text-center my-5 font-bold">Student <span className="text-[#007CFF]">Review's</span></h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col text-center items-center justify-center mx-28 my-7 space-y-5">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src={quoteImg} alt="" />
                            <p className="font-normal text-sm">{review.details}</p>
                            <h2 className="text-3xl font-medium text-[#007CFF] ">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Review2;
