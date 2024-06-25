"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import HotSale from "./components/hotsale";
import CustomCarousel from "./components/customcarousel";
import VideoShorts from "./components/shorts";
import CustommCarousel from "./components/newcarousel";
import UserReviews from "./components/review";

const images = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType === activeButton ? null : buttonType);
  };

  const handleNext = () => {
    console.log("Next clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    console.log("Prev clicked");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white">
      {/* Background slider image */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Background Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* Content overlay */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen inset-y-48">
        {/* Search Box */}
        <div className="absolute lg:bottom-16 bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-lg w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
            What are you looking for?
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <select className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 text-black focus:ring-blue-500 text-sm sm:text-base">
              <option value="country1">Country</option>
            </select>
            <select className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
              <option value="city1">City</option>
            </select>
            <button className="flex items-center justify-center w-14 h-14 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FaSearch />
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button
              className={`px-3 md:px-4 py-2 rounded-full ${
                activeButton === "allProperties"
                  ? "bg-black text-white"
                  : "bg-yellow-500 text-black"
              } text-xs md:text-sm lg:text-base`}
              onClick={() => handleButtonClick("allProperties")}
            >
              All Properties
            </button>
            <button
              className={`px-3 md:px-4 py-2 rounded-full ${
                activeButton === "rental"
                  ? "bg-black text-white"
                  : "bg-yellow-500 text-black"
              } text-xs md:text-sm lg:text-base`}
              onClick={() => handleButtonClick("rental")}
            >
              Rental
            </button>
            <button
              className={`px-3 md:px-4 py-2 rounded-full ${
                activeButton === "sale"
                  ? "bg-black text-white"
                  : "bg-yellow-500 text-black"
              } text-xs md:text-sm lg:text-base`}
              onClick={() => handleButtonClick("sale")}
            >
              Sale
            </button>
          </div>
        </div>
      </div>

      <div className="absolute mt-40">
        <HotSale />
        <CustomCarousel />
        <VideoShorts/>
        <CustommCarousel/>
        <UserReviews/>
      </div>
    </div>
  );
}
