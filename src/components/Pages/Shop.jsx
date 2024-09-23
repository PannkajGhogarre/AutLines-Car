import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const shop = [
    {
        img: './shop/shop1.jpg',
        title: 'Baby Chair',
        product: 'interior',
        price: '$55.00'
    },
    {
        img: './shop/shop2.jpg',
        title: 'Alloy Wheels Two',
        product: 'Wheels',
        price: '$221.00'
    },
    {
        img: './shop/shop3.jpg',
        title: 'Audio Bass Car Set',
        product: 'Music, Video',
        price: '$123.00'
    },
    {
        img: './shop/shop4.jpg',
        title: 'Alloy Wheels',
        product: 'Wheels',
        price: '$221.00'
    },
    {
        img: './shop/shop5.jpg',
        title: 'Record Player',
        product: 'Music, Video',
        price: '$123.00'
    },
    {
        img: './shop/shop6.jpg',
        title: 'Titanium Wheels',
        product: 'Wheels',
        price: '$221.00'
    },
    {
        img: './shop/shop7.jpg',
        title: 'Test motor filter',
        product: 'Engine Oil Filter',
        price: '$122.00'
    },
    {
        img: './shop/shop8.jpg',
        title: 'Sports Seats',
        product: 'interior',
        price: '$55.00'
    },
    {
        img: './shop/shop9.jpg',
        title: 'Engine Oil Filter',
        product: 'Engine Oil Filter',
        price: '$122.00'
    },
]

const Shop = () => {
    return (
        <>
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}
                    className="flex flex-col items-center justify-center bg-[url('./back1.jpg')] bg-cover py-32">

                    <motion.h1
                        initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                        className='md:text-6xl text-4xl font-bold text-[#ffff]'>SHop</motion.h1>

                    <motion.div
                        initial={{ x: 200 }} whileInView={{ x: 0 }} transition={{ duration: 2 }}
                        className='flex md:gap-2 mt-5'>
                        <NavLink to='/'>
                            <h1 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Home</h1>
                        </NavLink>
                        <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
                        <div>
                            <h3 className='text-base text-[#ffffff]'>Shop</h3>
                        </div>
                    </motion.div>
                </motion.div>

                <div className='md:flex justify-between md:px-32 px-4 mt-10'>
                    <h1>showwing 1-8 of 9 Results</h1>
                    <select name="" id="" className='border border-gray-300 px-4 py-1'>
                        <option value="">Default Sorting</option>
                        <option value="">Sort by Latest</option>
                        <option value="">Sort by Popularity</option>
                        <option value="">Sort by ang rating</option>
                    </select>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:px-32 px-4 py-20">
                    {shop.map((shops, index) => (
                        <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}
                            key={index}
                            className="relative text-center bg-white rounded-lg shadow-lg overflow-hidden group"
                        >
                            {/* Product Image */}
                            <img
                                src={shops.img}
                                alt={shops.title}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Product Info */}
                            <div className="p-4">
                                <h1 className="text-xl font-bold mt-3">{shops.title}</h1>
                                <h2 className="text-gray-600 mt-3">{shops.product}</h2>
                                <h2 className="text-lg font-bold mt-3">{shops.price}</h2>
                            </div>
                            {/* Add to Cart Button - Shows on Hover */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="w-full bg-three text-white py-2 rounded-lg font-semibold hover:bg-yellow-600">
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop