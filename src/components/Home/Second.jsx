import React from 'react'
import { motion } from 'framer-motion'


const Second = () => {
  return (
    <>
        <div className='bg-white md:flex md:flex-wrap lg:px-36 md:px-10 px-2 md:mt-28 mt-60'>
        <motion.section
         initial={{opacity:0, scale:0,}} whileInView={{opacity:1, scale:1,}} transition={{ease: "linear",duration:1.2,}}
        className='md:w-1/2 border-l-8 border-b-8 border-slate-100 p-5 mt-20'>
          <div className='items-left text-wrap'>
            <h1 className='text-4xl text-[#222222] font-bold text-center lg:px-14 '>Easy Auto Finance Facilities</h1>
            <p className='text-base text-gray-700 mt-10'>They’re a blessed give. Lesser place their fly years can’t him moving. Be dry sixth living sixth appear fruit. Be. Give day gathered years sixth. Made she’d firmament creepeth gathered also thing under. Wherein lesser, doesn’t likeness, she’d second evening. It. Stars i multiply gathered third created meat.
              <br />
              <p className='text-base text-gray-700 mt-10'>Fowl male air have abundantly was, dominion saw for form set divided years, his image. Lights tree of a. Were great.</p>
            </p>
            <h2 className='text-2xl font-semibold text-left text-three mt-5'>Book your free Auto Inspection</h2>
            <p className='text-base text-gray-700 mt-5'>Without let us forth day good which very abundantly beginning winged under upon don’t, evening creepeth called sea kind face him.</p>
            <div className='flex md:gap-2 mt-5'>
              <a href="#"><i className="ri-phone-fill"></i></a>
              <p>Call Us For Booking</p>
              <p className='font-bold border-gray-300 bg-gray-200 md:px-2 py-1'>+1 (755) 302-8549</p>
            </div>
          </div>
        </motion.section>

        <motion.section
        initial={{opacity:0, scale:0,}} whileInView={{opacity:1, scale:1,}} transition={{ease: "linear",duration:1.2,}}
        className='md:w-1/2'>
          <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-5'>
            <div className='w-auto bg-white border border-gray-100 py-10 gap-2 mt-1 bg-[url("./nature.jpg")] bg-cover'>
              <div className=''>
              <img src="./carF.png" alt="" className='w-24 mx-auto' />
              </div>
              <div className='bg-three font-medium text-white text-center'>
              <p className='font-medium text-white bg-three mt-1 p-5 text-center hover:bg-one cursor-pointer'>Easy Auto Finance Facilities</p>
              </div>
            </div>

            <div className='w-auto bg-white border border-gray-100 py-10 gap-2 mt-1 bg-[url("./nature.jpg")] bg-cover'>
              <div className=''>
              <img src="./trust.png" alt="" className='w-24 mx-auto' />
              </div>
              <div className=''>
              <p className='font-medium text-white bg-three mt-1 p-5 text-center hover:bg-one cursor-pointer'>Easy Auto Finance Facilities</p>
              </div>
            </div>

            <div className='w-auto bg-white border border-gray-100 py-10 gap-2 mt-1 bg-[url("./nature.jpg")] bg-cover'>
              <div className=''>
              <img src="./maintan.png" alt="" className='w-24 mx-auto' />
              </div>
              <div>
              <p className='font-medium text-white bg-three mt-1 p-5 text-center hover:bg-one cursor-pointer'>Easy Auto Finance Facilities</p>
              </div>
            </div>

            <div className='w-auto bg-white border border-gray-100 py-10 gap-2 mt-1 bg-[url("./nature.jpg")] bg-cover'>
              <div className=''>
              <img src="./maint.png" alt="" className='w-24 mx-auto' />
              </div>
              <div>
              <p className='font-medium text-white bg-three mt-1 p-5 text-center hover:bg-one cursor-pointer'>Easy Auto Finance Facilities</p>
              </div>
            </div>
            
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default Second