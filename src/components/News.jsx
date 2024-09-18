import React from 'react'

const News = () => {
  return (
    <div className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('./car1.jpg')" }}
      ></div>
      
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-sm uppercase tracking-widest text-gray-300">
          New 2019 Model
        </p>
        <h1 className="text-6xl font-bold mt-2">HYBIRD</h1>
        <h2 className="text-5xl font-bold mt-4 text-yellow-400">DS3</h2>
      </div>

      {/* Car Image */}
      <div className="relative z-10 mt-10">
        <img 
          src="./car1.png" 
          alt="Car"
          className="w-auto h-80 md:h-96"
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
    </div>
  )
}

export default News