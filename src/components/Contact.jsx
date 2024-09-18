import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const cars = [
  { title: 'audi' }, { title: 'bentely' }, { title: 'bmw' }, { title: 'dogde' },
]

const fuel = [
  { title: 'Petrol' }, { title: 'Deisel' }, { title: 'Hybrid' }, { title: 'Elrctric' }, { title: 'Petrol+CNG' }, { title: 'LPG' },
]

const autos = [
  { title: '9 Autos' }, { title: '12 Autos' }, { title: '15 Autos' }, { title: '18 Autos' }, { title: '21 Autos' }, { title: '24 Autos' }, { title: 'All Autos' },
]

const sort = [
  { title: 'Sort By Last Added' }, { title: 'Sort By First Added' }, { title: 'Sort By Cheap First' }, { title: 'Sort By Expensive First' }, { title: 'Sort By LA-Z' },
]

const cars1 = [
  {
    name: 'Audi RS4 Avant',
    price: '$50',
    image: './cars1.jpg',
    desc:'Stock#: 45098ES – 4 door, White, 2.5L, FWD,Automatic 6-Speed, 2.5L 5 cyls, Florida CA',
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
  {
    name: 'Ferrari F8 Tributo',
    price: 'From 15.500',
    image: './galley-image-3-min.jpg',
    mileage: '20000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mil: <i class="ri-speed-up-fill"></i>,
    fu: <i class="ri-water-percent-line"></i>,
    trans: <i class="ri-list-settings-line"></i>,
  },
  {
    name: 'Ferrari F8 Tributo',
    price: 'From 15.500',
    image: './galley-image-1-min.jpg',
    mileage: '20000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mil: <i class="ri-speed-up-fill"></i>,
    fu: <i class="ri-water-percent-line"></i>,
    trans: <i class="ri-list-settings-line"></i>,
  },
  {
    name: 'Ferrari F8 Tributo',
    price: 'From 15.500',
    image: './galley-image-2-min.jpg',
    mileage: '20000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mil: <i class="ri-speed-up-fill"></i>,
    fu: <i class="ri-water-percent-line"></i>,
    trans: <i class="ri-list-settings-line"></i>,
  },
  {
    name: 'Audi RS4 Avant',
    price: '$50',
    image: './galley-image-4-min.jpg',
    mil: <i class="ri-speed-up-fill"></i>,
    mileage: '20000',
    fu: <i class="ri-water-percent-line"></i>,
    fuel: 'Diesel',
    trans: <i class="ri-list-settings-line"></i>,
    transmission: 'Manual',
  },
];

const Contact = () => {


  return (
    <>
      <div>
        <motion.div 
        initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:2}}
        className="flex flex-col items-center justify-center bg-[url('./back1.jpg')] bg-cover py-32">

          <motion.h1 
          initial={{x:-200}} whileInView={{x:0}} transition={{duration:2}}
          className='md:text-6xl text-4xl font-bold text-[#ffff]'>Vehicle Listings</motion.h1>

          <motion.div 
          initial={{x:200}} whileInView={{x:0}} transition={{duration:2}}
          className='flex gap-2 mt-5'>
            <NavLink to='/'>
              <h1 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Home</h1>
            </NavLink>
            <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
            <h3 className='text-base text-[#ffffff]'>vehicle Listing</h3>
          </motion.div>
        </motion.div>

        <div className='md:px-32 md:flex mt-10'>
          <section className='md:w-72'>
            <div className='flex items-center justify-center gap-5 py-3 px-8 border-gray-200 bg-black'>
              <motion.h1 
                initial={{x:-100}} whileInView={{x:0}} transition={{duration:2}}
              className='text-xl text-[#ffff] font-bold'>Search Options</motion.h1>
              <motion.a 
                initial={{x:100}} whileInView={{x:0}} transition={{duration:2}}
                href="#"><i className="ri-roadster-fill text-5xl text-white"></i></motion.a>
            </div>
            <div className='bg-[#abb8c3] py-10'>
              <div className='px-5'>
                <h1 className='text-base font-bold'>By Make</h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
                  className='items-center justify-center mt-5'>
                  <div>
                    <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-slate-200'>
                      {cars.map((car, index) => (
                        <option value={car.title} key={index} className='hover:bg-one'>
                          {car.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='mt-5'>
                    <select name="All Models" id="model" className='md:w-60 w-full border px-10 py-2 uppercase bg-slate-200'>
                      <option value="Audi">All Models</option>
                    </select>
                  </div>
                </motion.div>
              </div>

              <div className='mt-10 px-5'>
                <h1 className='text-xl font-semibold'>Price Range</h1>
                <input type="range" name="" id="" className='mt-5 md:w-60 w-full' />
                <div className='flex items-center justify- gap-8 text-center'>
                  <p className='border px-4 bg-white w-56'>0</p>
                  <p className='text-3xl font-light'>-</p>
                  <p className='border px-4 bg-white w-56'>1000</p>
                </div>
              </div>

              <div className='mt-10 px-5'>
                <h1 className='text-xl font-semibold'>Vehicle Body Type</h1>
                <motion.div 
                initial={{x:-100}} whileInView={{x:0}} transition={{duration:2}}
                className='grid grid-cols-2 items-center justify-center gap-5 uppercase text-center'>
                  <div>
                    <img src="./grid/car.png" alt="" className='w-20 mx-auto' />
                    <span>convertible</span>
                  </div>
                  <div>
                    <img src="./grid/car1.png" alt="" className='w-20 mx-auto' />
                    <h1>Coupe</h1>
                  </div>
                  <div>
                    <img src="./grid/car2.png" alt="" className='w-20 mx-auto' />
                    <h1>Mini Car</h1>
                  </div>
                  <div>
                    <img src="./grid/car3.png" alt="" className='w-20 mx-auto' />
                    <h1>Pick Up</h1>
                  </div>
                  <div>
                    <img src="./grid/car4.png" alt="" className='w-20 mx-auto' />
                    <h1>Seden</h1>
                  </div>
                  <div>
                    <img src="./grid/car5.png" alt="" className='w-20 mx-auto' />
                    <h1>Super Car</h1>
                  </div>
                </motion.div>
              </div>

              <div className='px-5 mt-10'>
                <h1 className='text-base font-bold'>FUEL TYPE</h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
                  className='items-center justify-center mt-5'>
                  <div>
                    <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-slate-200'>
                      {fuel.map((fuels, index) => (
                        <option value={fuels.title} key={index} className='hover:bg-one'>
                          {fuels.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              </div>
              <div className='mt-5 flex items-center justify-center'>
                <button className='text-white text-center border px-20 py-2 bg-one'>RESET FILTER</button>
              </div>

            </div>
          </section>

          <section>
            <div className='md:flex items-center gap-96 px-5'>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
                className='items-center justify-center'>
                <div>
                  <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-gray-50'>
                    {autos.map((auto, index) => (
                      <option value={auto.title} key={index} className='hover:bg-one'>
                        {auto.title}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
              <div className='flex items-center gap-5'>
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
                  className='items-center justify-center'>
                  <div>
                    <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-gray-50'>
                      {sort.map((sorts, index) => (
                        <option value={sorts.title} key={index} className='hover:bg-one'>
                          {sorts.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
                <a href="#"><i class="ri-menu-line text-xl "></i></a>
                <a href="#"><i className="ri-microsoft-fill text-xl text-three"></i></a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl px-5">
              {cars1.map((car, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ ease: "linear", duration: 1.2, }} viewport={{ once: false }}
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
          </section>
        </div>
      </div>
    </>

    // <>
    //   <div>
    //     <motion.div 
    //     initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:2}}
    //     className="flex flex-col items-center justify-center bg-[url('./back1.jpg')] bg-cover py-32">

    //       <motion.h1 
    //       initial={{x:-200}} whileInView={{x:0}} transition={{duration:2}}
    //       className='md:text-6xl text-4xl font-bold text-[#ffff]'>Vehicle Listings</motion.h1>

    //       <motion.div 
    //       initial={{x:200}} whileInView={{x:0}} transition={{duration:2}}
    //       className='flex gap-2 mt-5'>
    //         <NavLink to='/'>
    //           <h1 className='text-base text-[#ffffff] hover:text-three cursor-pointer'>Home</h1>
    //         </NavLink>
    //         <a href="#"><i className="ri-arrow-right-double-line text-three"></i></a>
    //         <h3 className='text-base text-[#ffffff]'>vehicle Listing</h3>
    //       </motion.div>
    //     </motion.div>

    //     <div className='md:px-32 md:flex mt-10'>
    //       <section className='md:w-72'>
    //         <div className='flex items-center justify-center gap-5 py-3 px-8 border-gray-200 bg-black'>
    //           <motion.h1 
    //             initial={{x:-100}} whileInView={{x:0}} transition={{duration:2}}
    //           className='text-xl text-[#ffff] font-bold'>Search Options</motion.h1>
    //           <motion.a 
    //             initial={{x:100}} whileInView={{x:0}} transition={{duration:2}}
    //             href="#"><i className="ri-roadster-fill text-5xl text-white"></i></motion.a>
    //         </div>
    //         <div className='bg-[#abb8c3] py-10'>
    //           <div className='px-5'>
    //             <h1 className='text-base font-bold'>By Make</h1>
    //             <motion.div
    //               initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
    //               className='items-center justify-center mt-5'>
    //               <div>
    //                 <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-slate-200'>
    //                   {cars.map((car, index) => (
    //                     <option value={car.title} key={index} className='hover:bg-one'>
    //                       {car.title}
    //                     </option>
    //                   ))}
    //                 </select>
    //               </div>
    //               <div className='mt-5'>
    //                 <select name="All Models" id="model" className='md:w-60 w-full border px-10 py-2 uppercase bg-slate-200'>
    //                   <option value="Audi">All Models</option>
    //                 </select>
    //               </div>
    //             </motion.div>
    //           </div>

    //           <div className='mt-10 px-5'>
    //             <h1 className='text-xl font-semibold'>Price Range</h1>
    //             <input type="range" name="" id="" className='mt-5 md:w-60 w-full' />
    //             <div className='flex items-center justify- gap-8 text-center'>
    //               <p className='border px-4 bg-white w-56'>0</p>
    //               <p className='text-3xl font-light'>-</p>
    //               <p className='border px-4 bg-white w-56'>1000</p>
    //             </div>
    //           </div>

    //           <div className='mt-10 px-5'>
    //             <h1 className='text-xl font-semibold'>Vehicle Body Type</h1>
    //             <motion.div 
    //             initial={{x:-100}} whileInView={{x:0}} transition={{duration:2}}
    //             className='grid grid-cols-2 items-center justify-center gap-5 uppercase text-center'>
    //               <div>
    //                 <img src="./grid/car.png" alt="" className='w-20 mx-auto' />
    //                 <span>convertible</span>
    //               </div>
    //               <div>
    //                 <img src="./grid/car1.png" alt="" className='w-20 mx-auto' />
    //                 <h1>Coupe</h1>
    //               </div>
    //               <div>
    //                 <img src="./grid/car2.png" alt="" className='w-20 mx-auto' />
    //                 <h1>Mini Car</h1>
    //               </div>
    //               <div>
    //                 <img src="./grid/car3.png" alt="" className='w-20 mx-auto' />
    //                 <h1>Pick Up</h1>
    //               </div>
    //               <div>
    //                 <img src="./grid/car4.png" alt="" className='w-20 mx-auto' />
    //                 <h1>Seden</h1>
    //               </div>
    //               <div>
    //                 <img src="./grid/car5.png" alt="" className='w-20 mx-auto' />
    //                 <h1>Super Car</h1>
    //               </div>
    //             </motion.div>
    //           </div>

    //           <div className='px-5 mt-10'>
    //             <h1 className='text-base font-bold'>FUEL TYPE</h1>
    //             <motion.div
    //               initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
    //               className='items-center justify-center mt-5'>
    //               <div>
    //                 <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-slate-200'>
    //                   {fuel.map((fuels, index) => (
    //                     <option value={fuels.title} key={index} className='hover:bg-one'>
    //                       {fuels.title}
    //                     </option>
    //                   ))}
    //                 </select>
    //               </div>
    //             </motion.div>
    //           </div>
    //           <div className='mt-5 flex items-center justify-center'>
    //             <button className='text-white text-center border px-20 py-2 bg-one'>RESET FILTER</button>
    //           </div>

    //         </div>
    //       </section>

    //       <section>
    //         <div className='md:flex items-center gap-96 px-5'>
    //           <motion.div
    //             initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
    //             className='items-center justify-center'>
    //             <div>
    //               <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-gray-50'>
    //                 {autos.map((auto, index) => (
    //                   <option value={auto.title} key={index} className='hover:bg-one'>
    //                     {auto.title}
    //                   </option>
    //                 ))}
    //               </select>
    //             </div>
    //           </motion.div>
    //           <div className='flex items-center gap-5'>
    //             <motion.div
    //               initial={{ opacity: 0, scale: 0, y: "100%" }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ ease: "linear", duration: 1.2, }}
    //               className='items-center justify-center'>
    //               <div>
    //                 <select name="All Makes" id="make" className='md:w-60 w-full border px-10 py-2 uppercase bg-gray-50'>
    //                   {sort.map((sorts, index) => (
    //                     <option value={sorts.title} key={index} className='hover:bg-one'>
    //                       {sorts.title}
    //                     </option>
    //                   ))}
    //                 </select>
    //               </div>
    //             </motion.div>
    //             <a href="#"><i class="ri-menu-line text-xl "></i></a>
    //             <a href="#"><i className="ri-microsoft-fill text-xl text-three"></i></a>
    //           </div>
    //         </div>

    //         <div className="mt-10 px-5">
    //           {cars1.map((car, index) => (
    //             <motion.div key={index}
    //               initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ ease: "linear", duration: 1.2, }} viewport={{ once: false }}
    //               className="md:flex overflow-hidden">
    //               <img src={car.image} alt={car.name} className="w-72 h-44 object-cover mt-5 rounded-md" />
    //               <div className="p-4">
    //                 <div className='flex justify-between gap-52'>
    //                  <div>
    //                  <h3 className="text-xl font-bold text-black">{car.name}</h3>
    //                  <div className='text-base text-gray-600'>{car.desc}</div>
    //                  </div>
    //                   <div>
    //                   <h3 className="text-base font-bold text-black">{car.name}</h3>
    //                   <p className="text-white text-base font-bold border px-5 py-2 bg-[#22abc3]">{car.price}</p>
    //                   </div>
    //                 </div>
    //                 <div>
    //                 </div>
    //                 {/* <div className='border border-gray-300 mt-2'></div> */}
    //                 <div className="flex items-center justify-between mt-5 text-gray-600">
    //                 <div>
    //                     <div className='text-base text-gray-400'>{car.year}</div>
    //                     <div className="mr-2 text-sm">{car.years}</div>
    //                   </div>
    //                   <div>
    //                     <div className='text-base text-gray-400'>{car.mil}</div>
    //                     <div className="mr-2 text-sm">{car.mileage}</div>
    //                   </div>
    //                   <div>
    //                     <div className='text-base text-gray-400'>{car.fu}</div>
    //                     <div className="mr-2 text-sm">{car.fuel}</div>
    //                   </div>
    //                   <div>
    //                     <div className='text-base text-gray-400'>{car.trans}</div>
    //                     <div className="mr-2 text-sm">{car.transmission}</div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </motion.div>
    //           ))}
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </>
  )
};

export default Contact