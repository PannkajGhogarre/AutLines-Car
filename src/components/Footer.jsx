import React from 'react'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <>
    <div className='bg-gray-800 pt-10'>
        <div className='relative grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-8 md:px-40 md:py-28 py-16 md:text-left text-center'>
            <div className=''>
                <img src="./footer-logo.png" alt="" className='w-60 mx-auto' />
                <p className='mt-6 text-gray-400'>Ceipisicing elit sed do eiusmod tempor laboe dolore magna aliqa Ut enim ad minim veniam quis nostrud exercitation ullam co laboris nis aliquip comsecd sed ipsum.</p>
                <hr className='mt-10' />
                <div className='mt-5'>
                    <h1 className='text-xl font-semibold text-white'>Subscribe Newsletter</h1>
                    <div className='flex mt-5 border bg-white justify-between p-3'>
                        <input type="text" placeholder='YOUR MAIL...' className='border-none outline-none'/>
                        <i className="ri-mail-line text-xl hover:text-three cursor-pointer"></i>
                    </div>
                </div>               
            </div>

            <div>
                <h1 className='text-xl font-medium text-white'>Dealer Information</h1>
                <div className='mt-6'>
                    <h1 className='text-base font-bold text-white'>Sales Hours</h1>
                    <p className='text-base font-medium text-gray-400'>Mon - Fri: 09:00 am to 06:00 pm</p>
                    <p className='text-base font-medium text-gray-400'>Sat: 10:00am to 05:00 pm</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-base font-bold text-white'>Sales Hours</h1>
                    <p className='text-base font-medium text-gray-400'>Mon - Fri: 09:00 am to 06:00 pm</p>
                    <p className='text-base font-medium text-gray-400'>Sat: 10:00am to 05:00 pm</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-base font-bold text-white'>Sales Hours</h1>
                    <p className='text-base font-medium text-gray-400'>Mon - Fri: 09:00 am to 06:00 pm</p>
                    <p className='text-base font-medium text-gray-400'>Sat: 10:00am to 05:00 pm</p>
                </div>
            </div>

            <div>
                <h1 className='text-xl font-medium text-white'>About Autlines</h1>
                <ul className='text-base font-medium text-gray-400 mt-4'>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Home</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Services</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>About Us</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Inventory</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Parts Shop</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Contact Us</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Buy Or Sell Cars</li>
                    <li className='mt-4 hover:text-three cursor-pointer'><i className="ri-arrow-right-s-line hover:text-one cursor-pointer"></i>Featured Vehicles</li>
                </ul>
            </div>

            <div className='mx-auto'>
                <h1 className='text-xl font-medium text-white'>Get In Touch</h1>
                <div className='mt-10'>
                    <div className='flex gap-2 mt-2'>
                        <a href="#"><i className="ri-map-pin-2-line text-white"></i></a>
                        <p className='text-base font-medium text-gray-400'>Fairview Ave, El Monte, CA 91732</p>
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <a href="#"><i className="ri-mail-line text-white"></i></a>
                        <p className='text-base font-medium text-gray-400 hover:text-three'>support@example.com</p>
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <a href="#"><i className="ri-customer-service-line text-white"></i></a>
                        <p className='text-base font-medium text-gray-400'>Phone: <span className='text-lg font-semibold text-white hover:text-three'>+1 755 302 8549</span></p>
                    </div>
                </div>
                <hr className='mt-6'/>

                <div className='mt-6'>
                    <ul className='flex gap-8 mt-5 text-white'>
                        <li><i className="ri-twitter-line text-xl hover:text-three cursor-pointer"></i></li>
                        <li><i className="ri-behance-fill text-xl hover:text-three cursor-pointer"></i></li>
                        <li><i className="ri-facebook-fill text-xl hover:text-three cursor-pointer"></i></li>
                        <li><i className="ri-instagram-line text-xl hover:text-three cursor-pointer"></i></li>
                        <li><i className="ri-youtube-line text-xl hover:text-three cursor-pointer"></i></li>
                    </ul>
                </div>

                <div className='mt-14'>
                    <button className='border px-8 py-6 text-center text-white text-xs font-bold hover:bg-white hover:text-three'>TAKE A TEST DRIVE</button>
                </div>
            </div>
            
            <motion.img src="./footer-img.png" alt="" 
            initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}} viewport={{once:false}}
            className='absolute -inset-36 left-0 hidden md:block w-80' />
        </div>

            <hr />
            <p className='text-base font-medium text-gray-400 text-center py-8'>(c) 2019 AUTLINES - Auto Dealer Theme. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer