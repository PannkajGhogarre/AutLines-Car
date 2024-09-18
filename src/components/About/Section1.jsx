import React from 'react'
import { motion } from 'framer-motion'

const First = () => {
  return (
    <>
      <div className='relative items-center justify-center'>
        <img src="./carrs6.avif" alt="" className='w-full h-96 blur-sm' />

        <motion.div
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className='absolute inset-0 flex flex-col items-center justify-center text-center'>
          <h1 className='text-white md:text-7xl text-3xl font-bold'>Get Your Car New Style</h1>
          <h2 className='text-[#ffffff] text-xl font-medium mt-5'>CHOOSE FROM HUNDREDS OF STYLES & COLORS</h2>
          <p className='text-2xl font-semibold text-one mt-5'>Explore Services</p>
        </motion.div>
      </div>

      <div className='relative w-full h-[60vh]'>
        <div className="absolute inset-0 flex flex-col md:top-24 top-10 items-center px-4 z-10">
          <h1 className='text-8xl font-bold text-gray-900 opacity-10'>AutLines</h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className='absolute inset-0 flex flex-col md:top-52 top-24 items-center px-4'>
          <h1 className='md:text-5xl text-2xl font-bold'>We Provide Variety Of High-End</h1>
          <h2 className='md:text-5xl text-2xl font-bold'>Auto Customizations</h2>
          <p className='max-w-5xl mt-10 text-[#555555] break-words'>Eorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat. Non proident sunt ind culpa qudesa officia deserunt mollit anim est laboru unde omnis iste natus.</p>
        </motion.div>
      </div>

      <div className='md:flex items-center justify-center gap-10 mb-5 px-5 mt-10 text-center'>
        <motion.div
          initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}
        >
          <p className='text-three text-xl font-medium'>Get Painting or Styling Estimation</p>
        </motion.div>
        <motion.div
          initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}
          className='md:flex items-center justify-center gap-5'>
          <div className='flex gap-2 border-none bg-gray-100 px-6 py-1'>
            <a href="#"><i className="ri-phone-line text-xl"></i></a>
            <p className=''>Call us Today <span className='text-xl font-bold'>+1 755 302 8549</span></p>
          </div>
        </motion.div>
      </div>

      <div className='md:flex items-center justify-center gap-10 mt-20 md:px-44 py-10 px-5'>
        <motion.div
          initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
          className='flex items-center justify-center gap-5'>
          <img src="./worker2.png" alt="" className='text-[#e2b71c] w-16' />
          <div>
            <h1 className='text-xl font-bold'>We are team of creative designers and artists</h1>
            <p className='mt-5 py-2 text-[#555555]'>Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
          className='flex items-center justify-center gap-5'>
          <img src="./worker1.png" alt="" className='text-[#e2b71c] w-16' />
          <div>
            <h1 className='text-xl font-bold'>We are team of creative designers and artists</h1>
            <p className='mt-5 py-2 text-[#555555]'>Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
          className='flex items-center justify-center gap-5'>
          <img src="./worker.png" alt="" className='text-[#e2b71c] w-16' />
          <div>
            <h1 className='text-xl font-bold'>We are team of creative designers and artists</h1>
            <p className='mt-5 py-2 text-[#555555]'>Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</p>
          </div>
        </motion.div>
      </div>

      <div className=' py-10'>
        <div className='relative items-center justify-center'>
          <img src="./about-us-image.jpg" alt="" className='mx-auto' />

          <div className='absolute flex items-center justify-center md:px-52 md:top-[45vh] top-5'>
            <motion.div
              initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
              className='mt-24 border-none md:px-5 py-16 text-center'>
              <h1 className='text-3xl font-bold'>Premium Wraps Styles</h1>
              <p className='max-w-xs text-[#555555] mt-10'>Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip consequat eiusmod tempor incididunt labore dolore magna enim sed veniams.</p>
            </motion.div>

            <motion.div
              initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
              className='mt-10 border-none bg-[#9b51e0] md:px-5 py-16 text-center'>
              <h1 className='text-3xl font-bold text-white'>Custom Car Wraps</h1>
              <p className='mt-10 text-white'>Adipisicing eiusmod tempor incidis</p>
            </motion.div>

            <motion.div
              initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
              className=' border-none bg-three md:px-5 py-16 text-center'>
              <h1 className='text-3xl font-bold text-white'>Color Change Wraps</h1>
              <p className='mt-10 text-white'>Adipisicing eiusmod tempor incidis</p>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  )
}

export default First


