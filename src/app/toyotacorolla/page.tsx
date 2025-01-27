"use client";

import React from "react";
import Link from "next/link";

const ToyotaCorolla = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-8 px-4">
      {/* Header */}
      <h1 className="text-center text-2xl font-bold underline mb-6">
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img
          src="/toyotacorrolla.jpeg"
          alt="Toyota Corolla"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Book a test drive
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Request Bank Finance
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Visit Place
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Car Inspection
        </button>
      </div>

      {/* Vehicle Description */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Vehicle Description</h2>
        <div className="grid grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-sm">
          <p>
            <span className="font-semibold">Number of Doors:</span> 4
          </p>
          <p>
            <span className="font-semibold">Engine:</span> 1800 CC
          </p>
          <p>
            <span className="font-semibold">Condition:</span> 8.5 / 10
          </p>
          <p>
            <span className="font-semibold">Driven:</span> 9,500 KM
          </p>
          <p>
            <span className="font-semibold">Suspension Type:</span> Soft Suspension
          </p>
          <p>
            <span className="font-semibold">Avg:</span> 13 Km per ltr
          </p>
          <p>
            <span className="font-semibold">Transmission:</span> Automatic
          </p>
          <p>
            <span className="font-semibold">Fuel Type:</span> High Octane
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="text-center mb-8">
        <p className="text-green-600 text-2xl font-bold">PKR 50,00,000</p>
      </div>

      {/* Payment Button */}
      <div className="flex justify-center">
        
        <Link href = "/makepaymentform">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Make Payment
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default ToyotaCorolla;
