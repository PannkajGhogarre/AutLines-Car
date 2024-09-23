import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Cart = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}
                className="flex flex-col items-center justify-center bg-[url('./back1.jpg')] bg-cover py-32">

                <motion.h1
                    initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                    className='md:text-6xl text-4xl font-bold text-[#ffff]'>CART</motion.h1>

                <motion.div
                    initial={{ x: 200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                    className='flex md:gap-2 mt-5'>
                    <NavLink to='/'>
                        <h1 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Home</h1>
                    </NavLink>
                    <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                    <div>
                        <h3 className='text-base text-[#ffffff]'>cart</h3>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Cart