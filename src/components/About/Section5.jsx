import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick';




const cars = [
    'galley-image-1-min.jpg',
    'galley-image-2-min.jpg',
    'galley-image-3-min.jpg',
    'galley-image-4-min.jpg',
    'galley-image-5-min.jpg',
    'galley-image-6-min.jpg',
    'galley-image-7-min.jpg',
    'galley-image-8-min.jpg',
]

const imgs = [
    {
        imgs:'./team-image-1.jpg',
        name:'Alexander Rayan',
        profile:'Wrap Stylist',
        t:<i class="ri-twitter-line"></i>,
        b:<i class="ri-behance-line"></i>,
        f:<i class="ri-facebook-fill"></i>,
        i:<i class="ri-instagram-line"></i>
    },
    {
        imgs:'./team-image-2.jpg',
        name:'David Hamilton',
        profile:'Sales Manager',
        t:<i class="ri-twitter-line"></i>,
        b:<i class="ri-behance-line"></i>,
        f:<i class="ri-facebook-fill"></i>,
        i:<i class="ri-instagram-line"></i>
    },
    {
        imgs:'./team-image-3.jpg',
        name:'Matthew Crawford',
        profile:'Lead Designer',
        t:<i class="ri-twitter-line"></i>,
        b:<i class="ri-behance-line"></i>,
        f:<i class="ri-facebook-fill"></i>,
        i:<i class="ri-instagram-line"></i>
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
};

const Five = () => {
    return (
        <>
            <div className='text-center'>
                <div className="flex flex-col top-28 items-center px-4 z-10">
                    <h1 className='text-8xl font-bold text-gray-800 opacity-5'>AutLines</h1>
                    <h1 className='text-5xl font-medium'>Picture Gallery</h1>
                </div>

                <div className='grid md:grid-cols-4 grid-cols-2 gap-5 max-w-8xl mx-auto mt-10 p-2'>
                    {cars.map((cr, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                            className='overflow-hidden'>
                            <img src={cr} alt="" className="w-full h-44 object-cover mt-5 rounded-md" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='relative w-full md:h-[60vh] h-72'>
                <div className="absolute inset-0 flex flex-col top-10 items-center px-4 z-10">
                    <h1 className='text-8xl font-bold opacity-10'>AutLines</h1>
                </div>
                <div className='absolute inset-0 flex flex-col md:top-28 top-28 items-center px-4'>
                <h1 className='md:text-5xl text-2xl font-bold'>EXPERTISE YOU CAN TRUST</h1>
                <div className="absolute md:top-[20vh] mt-20 w-full md:px-36">
                        <Slider {...settings}>
                            {imgs.map((s, index) => (
                                <div key={index} className='border-none bg-gray-100 py-4 px-2 hover:bg-white shadow-xl transition-shadow duration-300'>
                                    <div className='text-center p-5'>
                                        <img src={s.imgs} alt="" className='md:w-auto mx-auto' />
                                        <h1 className='md:text-xl font-bold mt-5'>{s.name}</h1>
                                        <h1 className='md:text-base font-normal text-[#555555]'>{s.profile}</h1>
                                    </div>
                                    <div className='md:flex items-center justify-center gap-4'>
                                        <a href="#" className='text-[#555555] text-xl hover:text-one'>{s.t}</a>
                                        <a href="#" className='text-[#555555] text-xl hover:text-one'>{s.b}</a>
                                        <a href="#" className='text-[#555555] text-xl hover:text-one'>{s.f}</a>
                                        <a href="#" className='text-[#555555] text-xl hover:text-one'>{s.i}</a>
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

export default Five