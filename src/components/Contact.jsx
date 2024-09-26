import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
    <div className='relative items-center justify-center'>
        <img src="./contact3.jpg" alt="" className='w-full h-96 blur-sm' />

        <motion.div
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className='absolute inset-0 flex flex-col items-center justify-center text-center'>
          <h1 className='text-white md:text-7xl text-3xl font-bold'>Get Your Car New Style</h1>
          <h2 className='text-[#ffffff] text-xl font-medium mt-5'>CHOOSE FROM HUNDREDS OF STYLES & COLORS</h2>
          <p className='text-2xl font-semibold text-one mt-5'>Explore Services</p>
        </motion.div>
      </div>
    </>
  )
}

export default Contact