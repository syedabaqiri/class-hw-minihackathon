"use client"

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">PAKWHEELS</h3>
            <p className="text-sm mt-1">Sell your Car.</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-sm hover:text-gray-400">Home</a>
            <a href="#" className="text-sm hover:text-gray-400">About</a>
            <a href="#" className="text-sm hover:text-gray-400">Services</a>
            <a href="#" className="text-sm hover:text-gray-400">Contact</a>
          </div>
          <div className="text-sm">
            <p>&copy; 2024 PAKWHEELS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
