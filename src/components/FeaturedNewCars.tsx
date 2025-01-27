"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'





const FeaturedCars = () => {
  return (
    <div className="bg-gray-100  py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Featured New Cars</h2>
          <a href="#" className="text-blue-600 text-sm">
            View All New Cars
          </a>
        </div>

        {/* Tab Section */}
        <div className="flex space-x-4 border-b mb-4">
          <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-semibold">
            Popular
          </button>
          <button className="pb-2 text-gray-500">Upcoming</button>
          <button className="pb-2 text-gray-500">Newly Launched</button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Toyota Corolla",
              price: "PKR 59.7 - 75.5 lacs",
              reviews: "621 Reviews",
              rating: 3,
              img: "/toyotacorrolla.jpeg", 
              link: '/toyotacorolla',
            },
            {
              name: "Suzuki Alto",
              price: "PKR 23.3 - 30.5 lacs",
              reviews: "199 Reviews",
              rating: 3,
              img: "/suzukialto.jpeg",
              link:"/suzukialto"
            },
            {
              name: "Honda City",
              price: "PKR 46.5 - 58.5 lacs",
              reviews: "458 Reviews",
              rating: 3,
              img: "/hondaCity.jpeg",
              link:"/hondacity",
            },
            {
              name: "Honda Civic",
              price: "PKR 86.6 - 99.0 lacs",
              reviews: "357 Reviews",
              rating: 3,
              img: "/hondacivic.jpeg",
              link:"/hondacivic",
            },
          ].map((car, index) => (
            <Link href={car.link ||  "#"} key={index}>
            <div
              
              className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="font-semibold text-sm">{car.name}</h3>
              <p className="text-green-600 text-sm">{car.price}</p>
              <div className="flex items-center text-orange-500 text-xs">
                {Array.from({ length: car.rating }, (_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
                {Array.from({ length: 5 - car.rating }, (_, i) => (
                  <span key={i} className="text-gray-300">
                    &#9733;
                  </span>
                ))}
                <span className="ml-2 text-gray-500">{car.reviews}</span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
