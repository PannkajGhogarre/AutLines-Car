import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  // Configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Car data to be displayed
  const cars = [
    {
      name: 'Citroen C4',
      price: '$38,300',
      image: './slider1.png', // replace with actual image path
      miles: '48k mi',
      fuel: '28/35',
      transmission: 'Automatic',
      year: 2017,
    },
    {
      name: 'Lexus RX',
      price: '$60,400',
      image: './slider2.png', // replace with actual image path
      miles: '35k mi',
      fuel: '38/45',
      transmission: 'Manual',
      year: 2019,
    },
    // Add more cars here if needed
  ];

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Slider {...settings}>
        {cars.map((car, index) => (
          <div key={index} className="bg-gray-900 text-white p-8 rounded-lg">
            <img src={car.image} alt={car.name} className="w-1/2 h-auto object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
            <p className="text-lg text-yellow-400 mb-4">MSRP {car.price}</p>
            <div className="flex justify-between">
              <div className="text-center">
                <p>{car.miles}</p>
                <p className="text-sm">Mileage</p>
              </div>
              <div className="text-center">
                <p>{car.fuel}</p>
                <p className="text-sm">MPG</p>
              </div>
              <div className="text-center">
                <p>{car.transmission}</p>
                <p className="text-sm">Transmission</p>
              </div>
              <div className="text-center">
                <p>{car.year}</p>
                <p className="text-sm">Year</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page;