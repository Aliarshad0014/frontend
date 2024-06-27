"use client";
import React, { useState, useCallback } from 'react';

function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const itemsPerStack = [
  ['Item 1', 'Item 2', 'Item 3'],
  ['Item 4', 'Item 5', 'Item 6'],
  ['Item 7', 'Item 8', 'Item 9']
];

type HotSaleProps = {
  data: { title: string; price: number; city: string; image: string }[];
};

const HotSale: React.FC<HotSaleProps> = ({ data }) => {
  const [stackIndices, setStackIndices] = useState([0, 0, 0]);

  const handleScroll = useCallback(debounce((event: React.WheelEvent<HTMLDivElement>, stackIndex: number) => {
    event.preventDefault();
    event.stopPropagation();
    const newIndices = [...stackIndices];
    if (event.deltaY > 0) {
      newIndices[stackIndex] = (stackIndices[stackIndex] + 1) % itemsPerStack[stackIndex].length;
    } else if (event.deltaY < 0) {
      newIndices[stackIndex] = (stackIndices[stackIndex] - 1 + itemsPerStack[stackIndex].length) % itemsPerStack[stackIndex].length;
    }
    setStackIndices(newIndices);
  }, 100), [stackIndices]);

  // Function to log name, price, location
  const logPropertyDetails = (index: number) => {
    const property = data[index];
    if (property) {
      console.log('Name:', property.title); // Assuming 'title' is the name field
      console.log('Price:', property.price);
      console.log('Location:', property.city);
    }
  };

  return (
    <div className="bg-white relative min-h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Blazing Deals!</h2>
          <div className="flex justify-center items-center w-full max-w-full mb-16">
            {itemsPerStack.map((stack, stackIndex) => (
              <div key={stackIndex} className="relative w-80 h-52 mx-8" onWheel={(e) => handleScroll(e, stackIndex)}>
                {stack.map((_, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 p-6 rounded-lg shadow-lg transition-transform duration-300 ${
                      index === stackIndices[stackIndex] ? 'transform translate-y-0 bg-gray-200' :
                      index === (stackIndices[stackIndex] + 1) % stack.length ? 'transform translate-y-16 bg-gray-300' :
                      'transform translate-y-32 bg-gray-400'
                    }`}
                    // onMouseEnter={() => logPropertyDetails(index)} // Log details on mouse enter
                  >
                    {/* Render property data dynamically */}
                    {data[stackIndex * stack.length + index] && (
                      <div>
                        <img src={data[stackIndex * stack.length + index].image} alt={data[stackIndex * stack.length + index].title} className="w-full h-full object-cover mb-4" />
                        <p className="text-lg font-semibold">{data[stackIndex * stack.length + index].title}</p>
                        <p className="text-sm">{data[stackIndex * stack.length + index].price}</p>
                        <p className="text-sm">{data[stackIndex * stack.length + index].city}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-16 z-10">
          <button className="bg-yellow-400 hover:bg-black transition-all duration-500 text-white py-2 px-4 rounded-full shadow-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotSale;
