import React from 'react';
import SemiGaugeChart from './SemiGaugeChart'
import { motion } from 'framer-motion';

const SemiGaugeDashboard = () => {
  return (
    <>
        <div className='relative w-full md:h-[60vh] h-72 bg-gray-800'>
          <div className="absolute inset-0 flex flex-col md:top-24 top-10 items-center px-4 z-10">
            <h1 className='text-8xl font-bold text-white opacity-10'>AutLines</h1>
          </div>

          <motion.div 
        initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9, delay:0.2}}
        className='absolute inset-0 flex flex-col md:top-40 top-24 items-center px-4'>
          <h1 className='md:text-5xl text-2xl font-bold text-white'>EXPERTISE YOU CAN TRUST</h1>
          <p className='max-w-4xl mt-10 text-[#555555] text-center'>Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderits
          vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
        </motion.div>
        </div>
     

      <div className="bg-gray-800 md:flex justify-center items-center space-x-8 p-4 py-10">
        <SemiGaugeChart percentage={85} color="#19D3AE" />
        <SemiGaugeChart percentage={71} color="#FFBB00" />
        <SemiGaugeChart percentage={94} color="#19D3AE" />
        <SemiGaugeChart percentage={35} color="#FFBB00" />
      </div>
    </>

  );
};

export default SemiGaugeDashboard;
