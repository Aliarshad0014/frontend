import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat justo."
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Fusce convallis, metus quis tempor maximus, orci ex consequat lorem, nec tincidunt ligula lorem ac justo."
  },
  {
    id: 4,
    name: "Emily Brown",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Vivamus sodales auctor ante, vitae fringilla libero pretium id. Quisque sit amet sapien ac arcu tempor venenatis."
  },
  {
    id: 5,
    name: "Emily Brown",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Vivamus sodales auctor ante, vitae fringilla libero pretium id. Quisque sit amet sapien ac arcu tempor venenatis."
  }
];

const UserReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleSwipe = (direction: string) => {
    if (direction === "left") {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    } else if (direction === "right") {
      setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 p-6">
      <div className="relative lg:w-screen lg:h-3/4 bg-none rounded-lg">
        {/* Main Review */}
        <div className="relative w-full h-full flex items-start justify-center text-center p-6 bg-yellow-50 rounded-lg shadow-md ">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={reviews[currentReview].avatar}
              alt={reviews[currentReview].name}
              className="rounded-full h-24 w-24 border-4 border-white shadow-lg"
            />
          </div>
          <div className="mt-24 max-w-full">
            <p className="text-gray-600 mt-2 max-w-sm mx-auto mb-10">{reviews[currentReview].name}</p>
            <p className="text-gray-800 max-w-sm mx-auto">{reviews[currentReview].review}</p>
          </div>
        </div>

        {/* Arrow navigation for smaller screens */}
        <div className="absolute top-0 bottom-0 w-full flex justify-between items-center lg:hidden z-50">
          {/* Left Arrow */}
          <button
            className="left-arrow flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer"
            onClick={() => handleSwipe("left")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="right-arrow flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer"
            onClick={() => handleSwipe("right")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Full review navigation for larger screens */}
        <div className="absolute top-0 bottom-0 w-full flex justify-between space-x-4 p-4">
          {/* Left Review */}
          <div
            className="hidden w-1/3 h-full lg:flex items-center justify-center bg-white cursor-pointer transition-transform transform hover:scale-105 rounded-lg shadow-md"
            onClick={() => handleSwipe("right")}
          >
            <div className="text-center p-4"> {/* Added padding */}
              <img
                src={reviews[currentReview === 0 ? reviews.length - 1 : currentReview - 1].avatar}
                alt={reviews[currentReview === 0 ? reviews.length - 1 : currentReview - 1].name}
                className="rounded-full h-24 w-24 mx-auto mb-2" 
              />
              <p className="text-gray-600 text-lg">{reviews[currentReview === 0 ? reviews.length - 1 : currentReview - 1].name}</p> {/* Increased text size */}
            </div>
          </div>

          {/* Right Review */}
          <div
            className=" hidden w-1/3 h-full lg:flex items-center justify-center bg-white cursor-pointer transition-transform transform hover:scale-105 rounded-lg shadow-md"
            onClick={() => handleSwipe("left")}
          >
            <div className="text-center p-4">
              <img
                src={reviews[currentReview === reviews.length - 1 ? 0 : currentReview + 1].avatar}
                alt={reviews[currentReview === reviews.length - 1 ? 0 : currentReview + 1].name}
                className="rounded-full h-24 w-24 mx-auto mb-2"
              />
              <p className="text-gray-600 text-lg">{reviews[currentReview === reviews.length - 1 ? 0 : currentReview + 1].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
