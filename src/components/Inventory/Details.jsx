import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const audi = [
    './audi1.jpg',
    './audi2.jpg',
    './audi3.jpg',
    './audi4.jpg',
    './audi5.jpg',
    './audi6.jpg',
]

const Details = () => {

    const [activeTab, setActiveTab] = useState('description'); // State to track active tab

    // State to track which image is displayed
    const [mainImage, setMainImage] = useState(audi[0]);

    // Function to change the main image when a thumbnail is clicked
    const handleImageClick = (image) => {
        setMainImage(image);
    };


    // Function to render the content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="space-y-4">
                        <p className="text-gray-700 max-w-4xl">
                            Edisipicing eiusmod tempor incididunt labore sed dolore magna aliqua enim ipsum ad minim veniam quis nostrud citation ullam laboris nisi ut aliquip laboris nisi ut aliquip ex ea commod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-gray-700 max-w-4xl">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ipsum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                        </p>
                        <div>
                            <h1 className='text-xl font-bold text-[#000000d5]'>Highlights of the new Audi S5 Sportback</h1>
                            <div className='mt-5'>
                                <div className='flex gap-4 mt-5'>
                                    <a href="#"><i className="ri-arrow-right-double-fill text-three"></i></a>
                                    <p className=''>Enim ipsum ad minim veniams quis nostrud citation ullam laboris nisi</p>
                                </div>
                                <div className='flex gap-4 mt-5'>
                                    <a href="#"><i className="ri-arrow-right-double-fill text-three"></i></a>
                                    <p className=''>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
                                </div>
                                <div className='flex gap-4 mt-5'>
                                    <a href="#"><i className="ri-arrow-right-double-fill text-three"></i></a>
                                    <p className=''>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                                <div className='flex gap-4 mt-5'>
                                    <a href="#"><i className="ri-arrow-right-double-fill text-three"></i></a>
                                    <p className=''>Laboris nisi ut aliquip ex ea comodo consequat duis aute irure dolor in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'features':
                return (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Features & Options</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <p><i className="ri-add-fill text-three"></i>ABS</p>
                            <p><i className="ri-add-fill text-three"></i>Alloy wheels</p>
                            <p><i className="ri-add-fill text-three"></i>ESP</p>
                            <p><i className="ri-add-fill text-three"></i>Parking sensors</p>
                            <p><i className="ri-add-fill text-three"></i>Air conditioning</p>
                            <p><i className="ri-add-fill text-three"></i>Cruise control</p>
                            <p><i className="ri-add-fill text-three"></i>Leather interior</p>
                            <p><i className="ri-add-fill text-three"></i>Xenon</p>
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Contact Information</h2>
                        <p className="text-gray-700">You can contact us at <a href="mailto:info@carcompany.com" className="text-blue-500">info@carcompany.com</a> or call us at (123) 456-7890.</p>
                    </div>
                );
            case 'reviews':
                return (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Customer Reviews</h2>
                        <p className="text-gray-700">See what our customers are saying about the Audi S5 Sportback. Customer reviews will be displayed here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

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

                <div className='md:flex gap-5 md:px-40 px-2'>
                    <section className='mt-10'>
                        <div>
                            <motion.h1
                                initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='text-xl font-normal text-[#292828c6]'>Sportiness at maximum power</motion.h1>
                            <motion.h1
                                initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='text-5xl font-bold mt-5'>Audi S5 Sportback</motion.h1>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                                className="flex flex-col space-y-4 mt-10">
                                {/* Main Image */}
                                <div className="w-full max-w-2xl">
                                    <img src={mainImage} alt="Car Interior" className="w-full h-auto rounded-lg shadow-md" />
                                </div>

                                {/* Thumbnail Images */}
                                <div className="flex flex-wrap space-x-2">
                                    {audi.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => handleImageClick(image)}
                                            className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-4 ${mainImage === image ? 'border-yellow-500' : 'border-transparent'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                                className='mt-10'>
                                <h1 className='text-4xl font-bold'>Vehicle Specifications</h1>
                                <div className="max-w-4xl mx-auto py-4">
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                                        {/* Left Column */}
                                        <div>
                                            <p><strong>Make:</strong> Audi </p>
                                            <p><strong>Stock status:</strong>In stock </p>
                                            <p><strong>Mileage:</strong> 22,000</p>
                                            <p><strong>Version:</strong>1.8 hdi </p>
                                            <p><strong>Engine, cm3:</strong>1900 </p>
                                            <p><strong>Transmission:</strong>Automatic </p>
                                            <p><strong>Condition:</strong>New</p>
                                            <p><strong>Seats:</strong>5</p>
                                            <p><strong>Interior Color:</strong>brown</p>
                                            <p><strong>Warranty:</strong>a</p>
                                        </div>

                                        {/* Right Column */}
                                        <div>
                                            <p><strong>Model:</strong>A4</p>
                                            <p><strong>Year:</strong>2019</p>
                                            <p><strong>VIN:</strong>1VXEDYROTER</p>
                                            <p><strong>Fuel:</strong>Electric</p>
                                            <p><strong>Horsepower (hp):</strong>230</p>
                                            <p><strong>Doors:</strong>2</p>
                                            <p><strong>Drive:</strong>Front</p>
                                            <p><strong>Color:</strong>blue</p>
                                            <p><strong>Price Type:</strong>Fixed</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="container mx-auto p-6 pb-24">
                                {/* Navigation */}
                                <nav className="flex space-x-4 border-b-2 border-gray-200">
                                    <button
                                        onClick={() => setActiveTab('description')}
                                        className={`pb-2 font-semibold ${activeTab === 'description' ? 'text-yellow-500 border-b-4 border-blue-400' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        Vehicle Description
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('features')}
                                        className={`pb-2 font-semibold ${activeTab === 'features' ? 'text-yellow-500 border-b-4 border-blue-400' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        Features & Options
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('contact')}
                                        className={`pb-2 font-semibold ${activeTab === 'contact' ? 'text-yellow-500 border-b-4 border-blue-400' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        Contact
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('reviews')}
                                        className={`pb-2 font-semibold ${activeTab === 'reviews' ? 'text-yellow-500 border-b-4 border-blue-400' : 'text-gray-500 hover:text-black'}`}
                                    >
                                        Reviews
                                    </button>
                                </nav>

                                {/* Content */}
                                <div className="mt-6">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='mt-10'>
                            <motion.div
                                initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='flex border bg-one px-20 py-6 gap-2 justify-center items-center'>
                                <h1 className='text-white '>Price</h1>
                                <p className='text-white text-xl font-bold'>$70,000</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='border bg-slate-200 px-20 py-6 gap-2 justify-center items-center text-center'>
                                <h1 className='text-[#363636]'>Included Taxes & Checkup*</h1>
                            </motion.div>
                            <motion.div
                                initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='flex border bg-white px-20 py-6 gap-2 justify-center items-center'>
                                <img src="./logotype-inner-car-1-min.png" alt="" />
                                <img src="./logotype-inner-car-2-min.png" alt="" />
                            </motion.div>
                            <motion.div
                                initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='flex border bg-three px-20 py-6 gap-2 justify-center items-center'>
                                <img src="./jane.png" alt="" />
                                <div>
                                    <h1 className='text-white text-xl font-bold'>Jane William</h1>
                                    <p className='text-white '>Member since: June 2019</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='border bg-white px-20 py-6 gap-2 justify-center items-center'>
                                <div className='flex'>
                                    <a href="#"><i className="ri-phone-line text-6xl text-three"></i></a>
                                    <div>
                                        <p className='text-[#100f0fc4]'>Contact Seller</p>
                                        <h1 className='text-xl font-bold'>1 (258) 403 7961</h1>
                                    </div>
                                </div>
                                <div className='flex gap-3 justify-center items-center mt-5'>
                                    <a href="#"><i className="ri-instagram-line text-[#5555]"></i></a>
                                    <a href="#"><i className="ri-twitter-line text-[#5555]"></i></a>
                                    <a href="#"><i className="ri-google-fill text-[#5555]"></i></a>
                                    <a href="#"><i className="ri-facebook-fill text-[#5555]"></i></a>
                                    <a href="#"><i className="ri-pinterest-line text-[#5555]"></i></a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
                                className='mt-10 border bg-[#f1f5fa] p-2'>
                                <h1 className='py-5 px-5 text-xl font-semibold'>Message Seller</h1>
                                <div className=''>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Your Name (required)</label>
                                        <input type="text" className='w-auto h-12 mt-2' />
                                    </div>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Your Email (required)</label>
                                        <input type="text" className='w-auto h-12 mt-2' />
                                    </div>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Your Message</label>
                                        <input type="text" className='w-auto h-32 mt-2' />
                                    </div>
                                    <div className='mt-5 px-5 py-2 border bg-one hover:bg-three cursor-pointer items-center text-center'>
                                        <button className='text-center'>SEND MESSAGE</button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                            initial={{x:100}} whileInView={{x:0}} transition={{duration:2}}
                            className='mt-10 border bg-[#f1f5fa] p-2'>
                                <h1 className='py-5 px-5 text-xl font-semibold'>Financing Calculator</h1>
                                <div className=''>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Vehicle price ($)</label>
                                        <input type="text" placeholder='70000' className='w-auto h-12 mt-2 p-2' />
                                    </div>
                                    <div className='flex '>
                                        <div className='flex flex-col px-5 mt-5'>
                                            <label className="text-base font-semibold">Interest rate (%)</label>
                                            <input type="text" placeholder='5' className='w-auto h-12 mt-2 p-2' />
                                        </div>
                                        <div className='flex flex-col px-5 mt-5'>
                                            <label className="text-base font-semibold">Period (month)</label>
                                            <input type="text" placeholder='36' className='w-auto h-12 mt-2 p-2' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Down Payment ($)</label>
                                        <input type="text" placeholder='10000' className='w-auto h-12 mt-2 p-2' />
                                    </div>
                                    <div className='mt-5 px-5 py-2 border bg-one hover:bg-three cursor-pointer items-center text-center'>
                                        <button className='text-center'>CALCULATE</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Details