import caro1 from '../../../assets/caro1.jpg'
import caro2 from '../../../assets/caro2.jpg'
import caro3 from '../../../assets/caro3.jpg'
import caro4 from '../../../assets/caro4.jpg'

const Banner = () => {
    return (
        <div className='mt-5'>
            <div className="carousel w-full h-[70vh]">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={caro1} class="w-full" />
                    <div
                        class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <div>
                            <div class=" text-center">
                                <h1 class="text-lg lg:text-6xl text-white">Best Resource in <br /> your hand.. Bug Bounty
                                </h1>
                                <p class="mt-5 text-xs lg:text-base text-white">Bug Bounty: Turning Vulnerabilities into Strengths.
                                </p>
                                <button class="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] border-0 mt-11 lg:m-8 text-white">Enroll</button>
                            </div>

                        </div>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
                </div>

                <div id="slide2" class="carousel-item relative w-full">
                    <img src={caro2} class="w-full" />
                    <div
                        class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <div>
                            <div class=" text-center">
                                <h1 class="text-lg lg:text-6xl text-white">Best Resource in <br /> your hand.. Mern Stack
                                </h1>
                                <p class="mt-5 text-xs lg:text-base text-white">MERN Stack: Transforming Ideas into Applications.
                                </p>
                                <button class="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] border-0 mt-11 lg:m-8 text-white">Enroll</button>
                            </div>

                        </div>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={caro3} class="w-full" />
                    <div
                        class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <div>
                            <div class=" text-center">
                                <h1 class="text-lg lg:text-6xl text-white">Best Resource in <br /> your hand.. Cyber Security
                                </h1>
                                <p class="mt-5 text-xs lg:text-base text-white">Cyber Security: Protecting Today for a Secure Tomorrow.
                                </p>
                                <button class="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] border-0 mt-11 lg:m-8 text-white">Enroll</button>
                            </div>

                        </div>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={caro4} class="w-full" />
                    <div
                        class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <div>
                            <div class=" text-center">
                                <h1 class="text-lg lg:text-6xl text-white">Best Resource in <br /> your hand.. Python
                                </h1>
                                <p class="mt-5 text-xs lg:text-base text-white">Python: Where Ideas Come to Life.
                                </p>
                                <button class="btn bg-gradient-to-r from-[#0155B7] to-[#007CFF] border-0 mt-11 lg:m-8 text-white">Enroll</button>
                            </div>

                        </div>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;