import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Product = () => {

    const [activeTab, setActiveTab] = useState('description');
    
    const [count, setCount] = useState(1);

    const incre = () => {
        setCount(prev => prev + 1);
    }

    const decre = () => {
        setCount(prev => prev - 1);
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="space-y-4">
                        <p className="text-gray-700 max-w-4xl">
                            Edisipicing eiusmod tempor incididunt labore sed dolore magna aliqua enim ipsum ad minim veniam quis nostrud citation ullam laboris nisi ut aliquip laboris nisi ut aliquip ex ea commod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                    </div>
                );
            case 'reviews':
                return (
                    <div className="space-y-4">
                        <div className='flex'>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}
                className="flex flex-col items-center justify-center bg-[url('./back1.jpg')] bg-cover py-32">

                <motion.h1
                    initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                    className='md:text-5xl text-4xl font-bold text-[#ffff]'>BaBy ChaIr</motion.h1>

                <motion.div
                    initial={{ x: 200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                    className='flex md:gap-2 mt-5'>
                    <NavLink to='/'>
                        <h1 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Home</h1>
                    </NavLink>
                    <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                    <NavLink to='/shop'>
                        <h3 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>shop</h3>
                    </NavLink>
                    <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                    <NavLink to=''>
                        <h3 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>interior</h3>
                    </NavLink>
                    <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                    <h3 className='text-base text-[#ffffff]'>Baby Chair</h3>
                </motion.div>
            </motion.div>

            <div className='mt-10'>
                <div className='md:flex gap-10 md:px-40 px-2 py-20'>
                    <motion.div
                    initial={{x:-100}} whileInView={{x:0}} transition={{duration:2}}>
                        <img src="./shop12.jpg" alt="" className='border border-gray-200' />
                    </motion.div>
                    <motion.div
                    initial={{x:100}} whileInView={{x:0}} transition={{duration:2}}>
                        <div className='flex'>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                            <a href="#"><i className="ri-star-fill text-xl text-one"></i></a>
                        </div>
                        <h2 className='mt-5 text-xl font-bold text-[#1b1a1adc]'>£55.00</h2>
                        <p className='text-balance max-w-4xl mt-5'>Morning hath for and under greater form there fruitful to form multiply sixth appear night, morning rule. Whales upon meat fourth great made above unto living them. Every god image. One deep creeping darkness of. And moveth also one Divide blessed make moveth created deep likeness.</p>

                        <div className='md:flex mt-10 gap-10'>
                            <div className='flex items-center justify-between gap-9 border px-4 py-2'>
                                <p className='text-xl cursor-pointer' onClick={decre}>-</p>
                                <p>{count}</p>
                                <p className='text-xl cursor-pointer' onClick={incre}>+</p>
                            </div>
                            <div className='items-center justify-center border px-4 py-2 bg-one hover:bg-three'>
                                <button className='font-bold text-white'>ADD TO CART</button>
                            </div>
                        </div>
                        <div className='flex mt-10 gap-2'>
                            <a href="#"><i className="ri-heart-line"></i></a>
                            <p className='font-bold text-[#555] text-sm'> Add to wishlist</p>
                        </div>
                        <div className='flex mt-5 items-center'>
                            <h1 className='text-base'>Category:</h1>
                            <h1 className='text-xs'>Interior</h1>
                        </div>
                        <div className='flex mt-5 gap-2'>
                            <p className='border px-2 py-1 bg-[#f1f5fa] hover:bg-white cursor-pointer'>MOTOR</p>
                            <p className='border px-2 py-1 bg-[#f1f5fa] hover:bg-white cursor-pointer'>PARTS</p>
                        </div>
                    </motion.div>

                </div>
                    <div className="container mx-auto p-6 pb-24 md:px-40 px-2 ">
                                {/* Navigation */}
                                <nav className="flex space-x-4 border-b-2 border-gray-200">
                                    <button
                                        onClick={() => setActiveTab('description')}
                                        className={`pb-2 font-semibold ${activeTab === 'description' ? 'text-yellow-500 border-b-4 border-blue-400' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        Description
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('reviews')}
                                        className={`pb-2 font-semibold ${activeTab === 'reviews' ? 'text-yellow-500 border-b-4 border-blue-400' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        Reviews
                                    </button>
                                </nav>

                                {/* Content */}
                                <div className="mt-6">
                                    {renderContent()}
                                </div>
                            </div>
            </div>
        </>
    )
}

export default Product