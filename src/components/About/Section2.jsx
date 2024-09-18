import React,{useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Second = () => {

    const [onScroll, setOnScroll] = useState(false);


  return (
    <>
        <ScrollTrigger onEnter={() => setOnScroll(true)} onExit={() => setOnScroll(false)}
            className=' items-center justify-between md:mt-[30vh] mt-[40vh] px-10 py-20 bg-gray-800'>
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
    </>
  )
}

export default Second