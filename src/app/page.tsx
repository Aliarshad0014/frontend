"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [allPropertiesChecked, setAllPropertiesChecked] = useState(false);
  const [rentalChecked, setRentalChecked] = useState(false);
  const [saleChecked, setSaleChecked] = useState(false);

  const handleAllPropertiesChange = () => {
    setAllPropertiesChecked(!allPropertiesChecked);
    setRentalChecked(false);
    setSaleChecked(false);
  };

  const handleRentalChange = () => {
    setRentalChecked(!rentalChecked);
    setAllPropertiesChecked(false);
  };

  const handleSaleChange = () => {
    setSaleChecked(!saleChecked);
    setAllPropertiesChecked(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background slider image */}
      <div className="absolute inset-0 z-0">
        {/* You can use multiple images or a single slider library here */}
        <Image
          src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Navigation and search bar */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-6xl mx-auto text-center w-full">
          <h1 className="text-3xl font-bold mb-4">Find Your Location</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Location dropdown (example) */}
            <select className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 text-black focus:ring-blue-500">
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
              {/* Add more options as needed */}
            </select>

            {/* City dropdown (example) */}
            <select className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              {/* Add more options as needed */}
            </select>

            {/* Search button */}
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center justify-center mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={allPropertiesChecked}
                onChange={handleAllPropertiesChange}
              />
              <span className="ml-2">All Properties</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={rentalChecked}
                onChange={handleRentalChange}
              />
              <span className="ml-2">Rental</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={saleChecked}
                onChange={handleSaleChange}
              />
              <span className="ml-2">Sale</span>
            </label>
          </div>
        </div>

        {/* Additional content or components */}
        <div className="mt-8">
          {/* Add your other content here */}
        </div>

      </div>
    </div>
  );
}
