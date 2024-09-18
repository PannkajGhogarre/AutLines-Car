import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'


const img = [
  './back1.jpg',
  './back2.jpg',


]

const img1 = [
  {
    imge: './car1.png',
    model: 'New 2019 Model',
    m1: 'HYBIRD',
    m2: "DS3"

  },
  {
    imge: './car2.png',
    model: 'DRIVE THE FASTEST CAR',
    m1: 'expolre Now',
    m2: ""

  },
  {
    imge: './car1.png',
    model: 'New 2019 Model',
    m1: 'CITRON',
    m2: "DS3"

  }
]

const cars = [
  { title: 'audi' }, { title: 'bentely' }, { title: 'bmw' }, { title: 'dogde' },
]


const First = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currI, setCurrI] = useState(0);
  const sliderRef = useRef(null);
  const sliderRef1 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrI((prevIndex) => (prevIndex + 1) % img1.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef1.current) {
      sliderRef1.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef1.current.style.transform = `translateX(-${currI * 100}%)`;
      sliderRef1.current.style.hover = `translateX(-${currI * 100}%)`;
    }
  }, [currI]);

  return (
    <>
      <div className="relative w-full mx-auto overflow-hidden shadow-lg">
        <div className="flex w-full md:h-[80vh] h-[40vh]" ref={sliderRef}>
          {img.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex w-auto md:h-[50vh]" ref={sliderRef1}>
            {img1.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ ease: "linear", duration: 2, x: { duration: 2 } }}
                key={index} className="w-full flex-shrink-0">
                <img src={image.imge} alt={`Slide ${index}`} className="w-auto md:h-56 h-32 object-cover mx-auto md:mt-16" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <p className="text-sm uppercase tracking-widest text-gray-300"> {image.model} </p>
                  <h1 className="md:text-6xl text-3xl font-bold mt-2 text-three">{image.m1}</h1>
                  <h2 className="md:text-5xl text-xl font-bold mt-4 text-yellow-400">{image.m2}</h2>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 flex justify-between items-center">
            <button
              className="font-extrabold text-2xl text-white"
              onClick={() => setCurrI((currI - 1 + img1.length) % img.length)}
            >
              <a href="#"><i className="ri-arrow-left-s-line"></i></a>
            </button>
            <button
              className="font-extrabold text-2xl text-white"
              onClick={() => setCurrI((currI + 1) % img1.length)}
            >
              <a href="#"><i className="ri-arrow-right-s-line"></i></a>
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-96 bg-slate-300">
        <img src="./pavel.jpg" alt="Car background" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex justify-center items-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ ease: "backInOut", duration: 2, x: { duration: 2 } }}
            className='md:mt-5 text-center'>
            <img src="./logo-sm.png" alt="Logo" className='mx-auto' />
            <h1 className='text-3xl md:text-5xl font-light text-white md:mt-5'>Find Your Dream Car</h1>
          </motion.div>
        </div>
        <div className="absolute md:top-[45vh] h-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center px-4 mt-8 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
            className='md:flex gap-2 items-center justify-center border border-gray-200 bg-white md:px-14 md:py-10 p-4 shadow-2xl'>
            <div>
              <h1 className='text-gray-700 font-semibold'>Select Make</h1>
              <select name="All Makes" id="make" className='w-56 border px-10 py-4 uppercase bg-slate-200'>
                {cars.map((car, index) => (
                  <option value={car.title} key={index} className='hover:bg-one'>
                    {car.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h1 className='text-gray-700 font-semibold'>Select a Model</h1>
              <select name="All Models" id="model" className='w-56 border px-10 py-4 uppercase bg-slate-200'>
                <option value="Audi">All Models</option>
              </select>
            </div>
            <div>
              <h1 className='text-gray-700 font-semibold'>Select Purpose</h1>
              <select name="All Purposes" id="purpose" className='w-56 border px-10 py-4 uppercase bg-slate-200'>
                <option value="rent">rent</option>
                <option value="experience">experience</option>
                <option value="sell">sell</option>
              </select>
            </div>
            <motion.div
              whileHover={{ background: "#22abc3", scale: '1' }} transition={{ duration: '0.9' }}
              className='md:w-36 border bg-one px-6 py-4 mt-6 text-center'>
              <button className='text-white font-semibold'>Search</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

First.propTypes = {}

export default First