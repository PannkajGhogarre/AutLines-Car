import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
};

const para =[
    {
        title:'Norem ipsum dolor sit amet consectetur adipisicing elit aliqua enim veniam quis nostrud exercita duis aute irure dolor krep rehenderit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip irure dolor.',
        img:'./dialog.png',
        name:'Lester Williams',
        cust:'customer'
    }
]

const Six = () => {
  return (
    <>
    <div>
    <div className='relative w-full md:h-[60vh] h-72 top-[55vh] bg-gray-600 mb-96'>
                <div className="absolute inset-0 flex flex-col top-10 items-center px-4 z-10">
                    <h1 className='text-8xl font-bold text-white opacity-10'>What People Says...</h1>
                </div>
                
                <motion.div 
                initial={{x:100}} whileInView={{x:0}} transition={{duration:1}}
                className="absolute w-full md:px-44 top-20">
                        {/* <Slider {...settings}>
                            {para.map((s, index) => (
                                <div key={index}>
                                    <div className='text-center p-5'>
                                        <h1 className='md:text-xl max-w-4xl font-bold mt-5'>{s.title}</h1>
                                        <img src={s.img} alt="" className='md:w-10 mx-auto' />
                                        <h1 className='md:text-base font-normal text-[#555555]'>{s.name}</h1>
                                        <h1 className='md:text-base font-normal text-[#555555]'>{s.cust}</h1>
                                    </div>
                                </div>
                            ))}
                        </Slider> */}
                        <div className='text-center mt-16'>
                        <p className='text-xl font-semibold text-white'>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua enim veniam quis nostrud exercita duis aute irure dolor krep rehenderit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip irure dolor.</p>
                        <img src="./dialog.png" alt="" className='w-14 mx-auto mt-5' />
                        <h1 className='mt-5 text-xl font-bold'>Lester Williams</h1>
                        <h2 className='text-base font-medium text-[#2a2929]'>customer</h2>
                        </div>
                    </motion.div>
                
            </div>
    </div>
    </>
  )
}

export default Six