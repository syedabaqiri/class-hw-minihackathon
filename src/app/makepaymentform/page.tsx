"use client";

import React from "react";
import Link from "next/link";

const OrderForm = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-8">Enter your Details</h1>

      {/* Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Card Number Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <Link href="/thankyou">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Place your order
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
