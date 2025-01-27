"use client"
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-6 flex justify-between items-center ">
        <div>
          <h1 className="text-xl font-bold"><a href="#">PAKWHEELS.COM</a></h1>
          <p className="text-xs"><a href="">PAKISTAN AUTOMOBILE WEBSITE</a></p>
        </div>
        <div className ="flex space-x-6 text-sm">
          <a href = "#" className="hover:text-gray-400">Used Cars</a>
          <a href = "#" className="hover:text-gray-400">New Cars</a>
          <a href = "#" className="hover:text-gray-400">Bikes</a>
          <a href = "#" className="hover:text-gray-400">Auto Store</a>
          <a href = "#" className="hover:text-gray-400">Videos</a>
          <a href = "#" className="hover:text-gray-400">Forums</a>
          <a href = "#" className="hover:text-gray-400">Blog</a>
          <a href = "#" className="hover:text-gray-400">More</a>
          
          </div>
        
        <div className ="flex items-center space-x-4">
          <button className = "text-sm hover:text-gray-400">Sign in</button>
          <button className = "text-sm hover:text-gray-400">Sign up</button>
          <button className = "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Post an Ad</button>


        </div>
      </nav>
    </div>
  )
}

export default NavBar