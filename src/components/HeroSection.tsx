//"use client"
import React from 'react'

const HeroSection = () => {
  return (
    
    <div className = "flex flex-col items-center bg-gray-100 p-6 ">
      
        <p className = "text-xl font-bold mb-8 text-center w-full">Sell Your Car on PakWheel and Get the Best Price</p>
        
        <div className="flex flex-wrap justify-center w-full space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Post your Ad on PakWheels</h2>
            <p className="mb-2">Post you Ad for free in 3 Easy Steps</p>
            <p className="mb-2">Get Genuin Offers from Verified Buyers</p>
            <p className="mb-4">Sell your car Fast at the Best Price</p>
            <button className= "bg-sky-900 text-white px-4 py-2 rounded"><a href="">Post Your Ad</a></button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Try PakWheels Sell It For Me</h2>
            <p className="mb-2">Dedicated Sales Expert To Sell Your Car</p>
            <p className="mb-2">We Bargain For you and share the Best Offer</p>
            <p className="mb-4">We ensure Safe & Secure Transaction</p>
            <button className= "bg-red-800 text-white px-4 py-2 rounded" ><a href="">Register Your Car</a></button>
            

        </div>
        </div>
    </div>
  )
}

export default HeroSection