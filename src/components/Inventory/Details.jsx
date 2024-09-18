import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Details = () => {
    return (
        <>
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}
                    className="flex flex-col items-center justify-center bg-[url('./back1.jpg')] bg-cover py-32">

                    <motion.h1
                        initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                        className='md:text-6xl text-4xl font-bold text-[#ffff]'>Audi S5 Sportback</motion.h1>

                    <motion.div
                        initial={{ x: 200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                        className='flex md:gap-2 mt-5'>
                        <NavLink to='/'>
                            <h1 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Home</h1>
                        </NavLink>
                        <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                        <NavLink to='/inventory-grid'>
                            <h3 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>vehicle Listing</h3>
                        </NavLink>
                        <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                        <NavLink to='/inventory-grid'>
                            <h3 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Audi</h3>
                        </NavLink>
                        <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                        <h3 className='text-base text-[#ffffff]'>A4</h3>
                        <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                        <h3 className='text-base text-[#ffffff]'>Audi S5 Sportback</h3>
                    </motion.div>
                </motion.div>

                <div className='md:flex items-center justify-center gap-5'>
                    <section className='mt-10'>
                        <div>
                            <h1 className='text-xl font-normal'>Sportiness at maximum power</h1>
                            <h1 className='text-5xl font-bold mt-5'>Audi S5 Sportback</h1>
                            <div className='mt-10'>
                                <img src="./audi1.jpg" alt="" />
                            </div>
                        </div>
                    </section>
                    <section></section>
                </div>
            </div>
        </>
    )
}

export default Details