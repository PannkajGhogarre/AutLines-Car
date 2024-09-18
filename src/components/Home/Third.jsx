import React from 'react'
import { motion } from 'framer-motion';

const cars = [
    {
        name: 'Audi RS4 Avant',
        price: '$50',
        image: './cars1.jpg',
        mil: <i class="ri-speed-up-fill"></i>,
        mileage: '20000',
        fu: <i class="ri-water-percent-line"></i>,
        fuel: 'Diesel',
        trans: <i class="ri-list-settings-line"></i>,
        transmission: 'Manual',
    },
    {
        name: 'Ford Focus ST',
        price: '$10,000',
        image: './cars2.jpg',
        mileage: '31500',
        fuel: 'Petrol',
        transmission: 'Automatic',
        mil: <i class="ri-speed-up-fill"></i>,
        fu: <i class="ri-water-percent-line"></i>,
        trans: <i class="ri-list-settings-line"></i>,
    },
    {
        name: 'Tesla Model Y',
        price: '$85,000',
        image: './cars3.jpg',
        mileage: '100',
        fuel: 'Electric',
        transmission: 'Automatic',
        mil: <i class="ri-speed-up-fill"></i>,
        fu: <i class="ri-water-percent-line"></i>,
        trans: <i class="ri-list-settings-line"></i>,
    },
    {
        name: 'Lamborghini Urus',
        price: '$155,000',
        image: './cars4.jpg',
        mileage: '20000',
        fuel: 'Petrol',
        transmission: 'Automatic',
        mil: <i class="ri-speed-up-fill"></i>,
        fu: <i class="ri-water-percent-line"></i>,
        trans: <i class="ri-list-settings-line"></i>,
    },
    {
        name: 'Peugeot 508 Sports',
        price: '$55,000',
        image: './cars5.jpg',
        mil: <i class="ri-speed-up-fill"></i>,
        mileage: '20000',
        fu: <i class="ri-water-percent-line"></i>,
        fuel: 'Diesel',
        trans: <i class="ri-list-settings-line"></i>,
        transmission: 'Manual',
    },
    {
        name: 'Mercedes AMG',
        price: '$122,555',
        image: './cars6.jpg',
        mileage: '31500',
        fuel: 'Petrol',
        transmission: 'Automatic',
        mil: <i class="ri-speed-up-fill"></i>,
        fu: <i class="ri-water-percent-line"></i>,
        trans: <i class="ri-list-settings-line"></i>,
    },
    {
        name: 'BMW 7 Series',
        price: '$15,000',
        image: './cars7.jpg',
        mileage: '100',
        fuel: 'Electric',
        transmission: 'Automatic',
        mil: <i class="ri-speed-up-fill"></i>,
        fu: <i class="ri-water-percent-line"></i>,
        trans: <i class="ri-list-settings-line"></i>,
    },
    {
        name: 'Ferrari F8 Tributo',
        price: 'From 15.500',
        image: './cars8.jpg',
        mileage: '20000',
        fuel: 'Petrol',
        transmission: 'Automatic',
        mil: <i class="ri-speed-up-fill"></i>,
        fu: <i class="ri-water-percent-line"></i>,
        trans: <i class="ri-list-settings-line"></i>,
    },
];

const Third = () => {
    return (
        <>
            <div className="relative bg-[url('./backside.jpg')] h-96 text-white py-16 px-8">
                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.h2
                     initial={{ opacity: 0, scale: 0, y: '100%' }} whileInView={{ opacity: 1, scale: 1, y: '0' }} transition={{ duration: 1 }}
                    className="text-3xl font-bold mb-4 mt-20">Recent Cars</motion.h2>
                    <motion.p 
                     initial={{ opacity: 0, scale: 0, y: '-100%' }} whileInView={{ opacity: 1, scale: 1, y: '0' }} transition={{ duration: 1 }}
                    className="max-w-2xl text-gray-400 mb-8">
                        Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderitis vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.
                    </motion.p>
                    <div className=" absolute top-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
                        {cars.map((car, index) => (
                            <motion.div key={index} 
                            initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{ease: "linear",duration:1.2,}} viewport={{once:false}}
                            className="overflow-hidden">
                                <img src={car.image} alt={car.name} className="w-full h-44 object-cover mt-5 rounded-md" />
                                <div className="p-4">
                                    <div className='flex justify-between'>
                                        <h3 className="text-base font-bold text-black">{car.name}</h3>
                                        <p className="text-teal-600 text-base font-bold">{car.price}</p>
                                    </div>
                                    <div className='border border-gray-300 mt-2'></div>
                                    <div className="flex items-center justify-between mt-5 text-gray-600">
                                        <div>
                                            <div className='text-base text-gray-400'>{car.mil}</div>
                                            <div className="mr-2 text-sm">{car.mileage}</div>
                                        </div>
                                        <div>
                                            <div className='text-base text-gray-400'>{car.fu}</div>
                                            <div className="mr-2 text-sm">{car.fuel}</div>
                                        </div>
                                        <div>
                                            <div className='text-base text-gray-400'>{car.trans}</div>
                                            <div className="mr-2 text-sm">{car.transmission}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            <motion.div
            whileHover={{background:'#22abc3'}} transition={{duration:0.6,ease: [0.075, 0.82, 0.165, 1]}}
            className='absolute lg:top-[145vh] top-[350vh] left-32 md:left-1/2 transform md:-translate-x-1/2 border border-gray-200 bg-one px-10 py-4'>
                <button>Show More</button>
            </motion.div>
            </div>
            {/* <div className="relative text-white py-16 px-8">
        <img src="./backside.jpg" alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-75">
        <h2 className="text-3xl font-bold mb-4 text-white">RECENT CARS</h2>
        <p className="max-w-xl text-gray-400 mb-8">
        Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderitis vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <div className='flex justify-between'>
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-teal-600 text-xl font-bold">{car.price}</p>
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <span className="mr-2">{car.mileage}</span>
                <span className="mr-2">{car.fuel}</span>
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}
        </>
    )
}

export default Third