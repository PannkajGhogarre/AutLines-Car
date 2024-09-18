import React, { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cars = [
    {
        name: 'Citron C4',
        price: 'MSRP $38,300',
        image: './slider1.png',
        mil: <i class="ri-speed-up-fill"></i>,
        mileage: '48k mi',
        fu: <i class="ri-water-percent-line"></i>,
        fuel: '28/35',
        trans: <i class="ri-list-settings-line"></i>,
        transmission: 'Automatic',
        carr: <i class="ri-car-fill"></i>,
        year: '2017'
    },
    {
        name: 'Lexus RX',
        price: 'MSRP $60,400',
        image: './slider2.png',
        mil: <i class="ri-speed-up-fill"></i>,
        mileage: '35k mi',
        fu: <i class="ri-water-percent-line"></i>,
        fuel: '38/45',
        trans: <i class="ri-list-settings-line"></i>,
        transmission: 'Manual',
        carr: <i class="ri-car-fill"></i>,
        year: '2019'
    },

]

const Four = () => {

    const [onScroll, setOnScroll] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex + 1) % cars.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const sliders = [
        {
            img: "./carF.png",
            title: "AUTO REPAIRS",
            desc: "A proin urna orci per et vivamus pretium habitasse fermentum habitant lacinia volutpat facilisi dui Ultrices imperdiet quisque felis sem sollicitudin senectus sollicitudin laoreet rhoncus mollis hac.",
            hoverImg: "./offers1.jpg"
        },
        {
            img: "./maintan.png",
            title: "AUTO FINANCE",
            desc: "Adipisicing eiusmod tempor incidids labore dolore magna aliqa ust enim ad minim veniams quis nostrud sed citation ullam co laboris nisit aliquip in culpa qui officia deserunt mollit anim.",
            hoverImg: "./offers2.jpg"
        },
        {
            img: "./trust.png",
            title: "BUY SELL CARS",
            desc: "Lectus justo sagittis urna pulvinar turpis quam tristique per dolor eros proin nostra, quisque sociis accumsan pellentesque senectus. Semper mi nec malesuada donec varius amet habitant.",
            hoverImg: "./offers3.jpg"
        },
    ]
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#22abc3" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#22abc3" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <>
            <ScrollTrigger onEnter={() => setOnScroll(true)} onExit={() => setOnScroll(false)}
            className=' items-center justify-between md:mt-[110vh] mt-[320vh] px-10 py-20 bg-gray-800'>
                {onScroll &&
                    <div className='flex'>
                        <motion.div
                        initial={{x:-100}} animate={{x:0}} transition={{duration:2}}
                        className='hidden md:block'>
                            <img src="./four.png" alt="" />
                        </motion.div>
                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 mx-auto'>
                            <div className='items-center justify-center text-center'>
                                <h1 className='text-5xl text-white font-bold'>
                                    <CountUp start={0} end={3884} duration={5} />
                                </h1>
                                <p className='text-sm text-white font-medium mt-2'>VEHICLES STOCK</p>
                            </div>
                            <div className='items-center justify-center text-center'>
                                <h1 className='text-5xl text-white font-bold'>
                                    <CountUp end={300} duration={5} />
                                    +
                                </h1>
                                <p className='text-base text-white font-medium mt-2'>DEALERS SERVED</p>
                            </div>
                            <div className='items-center justify-center text-center'>
                                <h1 className='text-5xl text-white font-bold'>
                                    <CountUp end={1454} duration={5} />
                                    +
                                </h1>
                                <p className='text-base text-white font-medium mt-2'>VEHICLES ON SALE</p>
                            </div>
                            <div className='items-center justify-center text-center'>
                                <h1 className='text-5xl text-white font-bold'>
                                    <CountUp end={6419} duration={5} />
                                </h1>
                                <p className='text-base text-white font-medium mt-2'>HAPPY CUSTOMERS</p>
                            </div>
                        </div>

                        <motion.div
                        initial={{x:100}} animate={{x:0}} transition={{duration:2}}
                        className='hidden md:block'>
                            <img src="four1.png" alt="" />
                        </motion.div>
                    </div>
                }
            </ScrollTrigger>

            <div className=' bg-gray-800'>
                <motion.h1
                    initial={{ opacity: 0, scale: 0, y: '100%' }} whileInView={{ opacity: 1, scale: 1, y: '0' }} transition={{ duration: 2, stiffness: '0.5s' }}
                    className='text-6xl font-bold text-center text-white py-20'>Deals Of The Weeks</motion.h1>
                <div className="relative w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2, }}
                        className="grid grid-cols-1 md:grid-cols-2 mx-auto overflow-hidden">
                        {cars.map((car, index) => (
                            <div className="overflow-hidden" key={index}>
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="mx-auto w-1/2 h-auto object-cover mt-5"
                                />
                                <div className="p-4">
                                    <div className="md:mx-28 flex justify-between">
                                        <h3 className="text-2xl font-bold text-teal-600">{car.name}</h3>
                                        <p className="text-one text-xl font-bold">{car.price}</p>
                                    </div>
                                    <div className="border border-gray-300 mt-2 md:mx-28"></div>
                                    <div className="flex items-center justify-between mt-5 text-white md:mx-28">
                                        <div className="rounded-full border-4 text-center border-[#8ed1fc] p-4">
                                            <div className="text-sm font-bold">{car.mil}</div>
                                            <div className="mr-2 text-sm font-bold">{car.mileage}</div>
                                        </div>
                                        <div className="rounded-full border-4 text-center border-[#f6d26d] p-4">
                                            <div className="text-sm font-bold">{car.fu}</div>
                                            <div className="mr-2 text-sm font-bold">{car.fuel}</div>
                                        </div>
                                        <div className="rounded-full border-4 text-center border-[#8ed1fc] p-4">
                                            <div className="text-sm font-bold">{car.trans}</div>
                                            <div className="mr-2 text-sm font-bold">{car.transmission}</div>
                                        </div>
                                        <div className="rounded-full border-4 text-center border-[#f6d26d] p-4">
                                            <div className="text-sm font-bold">{car.carr}</div>
                                            <div className="mr-2 text-sm font-bold">{car.year}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </motion.div>

                    {/* Dots */}
                    {/* <div className="flex justify-center mt-6 space-x-2">
        {cars.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-teal-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div> */}
                </div>

            </div>

            <div className='bg-gray-800'>
                <div className="relative w-full h-[70vh] mx-auto">

                    <div className="absolute inset-0 flex flex-col top-28 items-center px-4 z-10">
                        <h1 className='text-8xl font-bold text-white opacity-5'>AutLines</h1>
                    </div>
                    <motion.div
                    initial={{ opacity: 0, scale: 0, y: '100%' }} whileInView={{ opacity: 1, scale: 1, y: '0' }} transition={{ duration: 1 }}
                    className="absolute inset-0 flex flex-col top-5 items-center px-4 z-10 mt-40 text-center">
                        <h1 className='text-5xl font-bold text-white'>WHAT WE OFFER</h1>
                        <p className="max-w-2xl text-gray-400 mb-8">Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </motion.div>
                    <div className="absolute md:top-[40vh] mt-8 w-full md:px-36 hidden md:block">
                        <Slider {...settings}>
                            {sliders.map((s, index) => (
                                <div key={index}>
                                    <div className='text-center bg-white p-5'>
                                        <img src={s.img} alt="" className='md:w-24 mx-auto' />
                                        <h1 className='md:text-3xl font-normal mt-5'>{s.title}</h1>
                                    </div>

                                    <div className='relative md:mt-5 bg-three group h-72'>
                                        <p className='max-w-2xl text-white mb-8 px-10 py-5 flex justify-center bg-three'>{s.desc}</p>
                                        <img src={s.hoverImg} alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Four