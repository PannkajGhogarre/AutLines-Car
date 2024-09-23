import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const audiR = [
    './r1.jpg',
    './r2.jpg',
    './r3.jpg',
    './r4.jpg',
    './r5.jpg',
    './r6.jpg',
]


const Booking = () => {


    // State to track which image is displayed
    const [mainImage, setMainImage] = useState(audiR[0]);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [activeTab, setActiveTab] = useState('description');

    // Function to change the main image when a thumbnail is clicked
    const handleImageClick = (image) => {
        setMainImage(image);
    };

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
                        className='md:text-6xl text-4xl font-bold text-[#ffff]'>Audi RS4 Avant</motion.h1>

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
                        <h3 className='text-base text-[#ffffff]'>A3</h3>
                        <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                        <h3 className='text-base text-[#ffffff]'>Audi RS4 Avant</h3>
                    </motion.div>
                </motion.div>

                <div className='md:flex gap-5 md:px-40 px-2'>
                    <section>
                        <div className='mt-10'>
                            <motion.h1
                                initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='text-xl font-normal text-[#292828c6]'>Sportiness at maximum power</motion.h1>
                            <motion.h1
                                initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='text-5xl font-bold mt-5'>Audi RS4 Avant</motion.h1>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                                className="flex flex-col space-y-4 mt-10">
                                {/* Main Image */}
                                <div className="w-full md:max-w-2xl max-w-4xl">
                                    <img src={mainImage} alt="Car Interior" className="w-auto h-auto rounded-lg shadow-md" />
                                </div>

                                {/* Thumbnail Images */}
                                <div className="flex flex-wrap space-x-2">
                                    {audiR.map((image, index) => (
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
                        </div>

                        <div className="flex flex-col py-10">
                            <h2 className="text-2xl font-semibold mb-4">Select a Date</h2>
                            <div className="p-4">
                                <Calendar
                                    onChange={setSelectedDate}
                                    value={selectedDate}
                                    className="text-center"
                                />
                            </div>
                            <p className="mt-4 text-lg text-gray-700">
                                Selected Date: {selectedDate.toLocaleDateString()}
                            </p>
                        </div>

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
                    </section>
                    <section>
                    <div className='mt-10'>
                            <motion.div
                                initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                                className='flex border bg-one px-20 py-6 gap-2 justify-center items-center'>
                                <h1 className='text-white text-xl font-bold '>$50</h1>
                                <p className='text-white text-xl font-bold'>/ IN DAY</p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}
                                className='border-none bg-[#f1f5fa] p-2'>
                                <div className=''>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Pick-up Location</label>
                                        <select name="" id="" className='w-80 h-10 mt-2'>
                                            <option value="">New York</option>
                                            <option value="">London</option>
                                            <option value="">Paris</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Drop-off Location</label>
                                        <select name="" id="" className='w-80 h-10 mt-2'> Slect Lov
                                            <option value="">New York</option>
                                            <option value="">London</option>
                                            <option value="">Paris</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Pick-up Date</label>
                                        <input type='date' className='w-80 h-10 mt-2' />
                                    </div>
                                    <div className='flex flex-col px-5 mt-5'>
                                        <label className="text-base font-semibold">Drop-off Date</label>
                                        <input type="date" className='w-80 h-10 mt-2' />
                                    </div>
                                </div>

                                <div className='px-5 mt-5'>
                                    <p className='text-sm font-light'>Save Up 25% to rental on 3 days</p>
                                    <p className='text-sm font-light'>Save Up 50% to rental on 6 days</p>
                                    <div className='mt-5'>
                                        <h1 className='text-xl font-bold'>Extra Resource</h1>
                                        <div className='flex items-center justify-between mt-5'>
                                            <div className='flex gap-5'>
                                                <input type="checkbox" />
                                                <h1>Child Seat</h1>
                                            </div>
                                            <p>£ 20 / Day </p>
                                        </div>
                                        <div className='flex items-center justify-between mt-5'>
                                            <div className='flex gap-5'>
                                                <input type="checkbox" />
                                                <h1>ADDITIONAL DRIVER</h1>
                                            </div>
                                            <p>£ 50 / Day </p>
                                        </div>
                                        <div className='flex items-center justify-between mt-5'>
                                            <div className='flex gap-5'>
                                                <input type="checkbox" />
                                                <h1> GPS NAVIGATION</h1>
                                            </div>
                                            <p>£ 30 / Day </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5 px-5 py-2 border bg-one hover:bg-three cursor-pointer items-center text-center'>
                                        <button className='text-center uppercase'>Booking this car</button>
                                    </div>
                            </motion.div>
                            
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Booking