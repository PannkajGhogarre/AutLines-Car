import React from 'react'
import { motion } from 'framer-motion'

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

const Five = () => {
    return (
        <>
            <div className='md:mt-96 text-center'>
                <div className="flex flex-col top-28 items-center px-4 z-10">
                    <h1 className='text-8xl font-bold text-gray-800 opacity-5'>AutLines</h1>
                    <h1 className='text-5xl font-medium'>Picture Gallery</h1>
                </div>

                <div className='grid md:grid-cols-4 grid-cols-2 gap-5 max-w-8xl mx-auto mt-10 p-2'>
                    {cars.map((cr, index) => (
                        <motion.div key={index} 
                        initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}}
                        className='overflow-hidden'>
                            <img src={cr} alt="" className="w-full h-44 object-cover mt-5 rounded-md" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='mt-24'>
                <motion.div 
                initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}}
                className="flex flex-col top-28 items-center px-4 z-10 py-10">
                    <h1 className='text-8xl font-bold text-gray-800 opacity-5'>AutLines</h1>
                    <h1 className='text-5xl font-medium'>How It Works</h1>
                </motion.div>
                <motion.div 
                initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}}
                className='md:flex items-center justify-center gap-2 md:px-24 px-10 py-10 md:py-24 text-center mt-10'>
                    <div>
                        <h1 className='text-8xl font-bold opacity-10'>01</h1>
                        <h2 className='text-xl font-medium text-three mt-10'>Search Our Inventory</h2>
                        <p className='text-base text-gray-600'>Orci eu quisque est magna hac consequat aptent erat integer, lorem est eu habitasse, consequat id.</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium text-three'>Search Our Inventory</h2>
                        <p className='text-base text-gray-600'>Orci eu quisque est magna hac consequat aptent erat integer, lorem est eu habitasse, consequat id.</p>
                        <h1 className='text-8xl font-bold opacity-10 mt-10'>02</h1>
                    </div>
                    <div>
                        <h1 className='text-8xl font-bold opacity-10'>03</h1>
                        <h2 className='text-xl font-medium text-three mt-10'>Search Our Inventory</h2>
                        <p className='text-base text-gray-600'>Orci eu quisque est magna hac consequat aptent erat integer, lorem est eu habitasse, consequat id.</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium text-three'>Search Our Inventory</h2>
                        <p className='text-base text-gray-600'>Orci eu quisque est magna hac consequat aptent erat integer, lorem est eu habitasse, consequat id.</p>
                        <h1 className='text-8xl font-bold opacity-10 mt-10'>04</h1>
                    </div>
                </motion.div>
            </div>

            <div className='md:flex items-center justify-center w-full bg-gray-100'>
                <motion.div 
                initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}}
                className='md:flex items-center justify-between bg-three h-72'>
                    <div className='absolute left-5'>
                    <img src="./action-figur-1.png" alt="" className='w-96 h-44 mt-36 hidden md:block' />
                    </div>

                    <div className='relative md:text-right px-5 py-10'>
                        <a href="#"><i className="ri-arrow-left-line text-white text-4xl font-light"></i></a>
                        <h1 className='text-white text-4xl font-semibold mt-10'>ARE YOU LOOKING</h1>
                        <h2 className='text-white text-4xl font-semibold'>TO BUY A CAR?</h2>
                        <p className='text-balance text-white mt-5 w-96'>Let’s start searching our inventory that includes 2000+ cars</p>
                    </div>
                </motion.div>

                <motion.div 
                initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}}
                className='md:flex items-center justify-between bg-[#0c4852] h-72'>
                    <div className='relative px-5 py-10'>
                        <a href="#"><i className="ri-arrow-right-line text-white text-4xl font-light"></i></a>
                        <h1 className='text-white text-4xl font-semibold mt-10'>ARE YOU LOOKING</h1>
                        <h2 className='text-white text-4xl font-semibold'>TO SELL A CAR?</h2>
                        <p className='text-balance text-white mt-5 w-96'>Add your vehicle to our inventory & reach 5k potential buyers</p>
                    </div>

                    <div className='absolute right-5'>
                    <img src="./action-figur-2.png" alt="" className='w-96 h-44 md:mt-36 hidden md:block' />
                    </div>
                </motion.div>
            </div>

            {/* <div className='bg-gray-800'>
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
                    <div className="absolute md:top-[40vh] top-[40vh] mt-8 w-full md:px-36 hidden md:block">
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
            </div> */}

        </>
    )
}

export default Five