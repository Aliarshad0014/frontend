import React, { useState } from 'react';

const itemsPerStack = [
  ['Item 1', 'Item 2', 'Item 3'],
  ['Item 4', 'Item 5', 'Item 6'],
  ['Item 7', 'Item 8', 'Item 9']
];

export default function HotSale() {
  const [stackIndices, setStackIndices] = useState([0, 0, 0]);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>, stackIndex: number) => {
    event.preventDefault();
    const newIndices = [...stackIndices];
    if (event.deltaY > 0) {
      newIndices[stackIndex] = (stackIndices[stackIndex] + 1) % itemsPerStack[stackIndex].length;
    } else if (event.deltaY < 0) {
      newIndices[stackIndex] = (stackIndices[stackIndex] - 1 + itemsPerStack[stackIndex].length) % itemsPerStack[stackIndex].length;
    }
    setStackIndices(newIndices);
  };

  return (
    <div className="bg-white relative min-h-screen w-screen flex items-center justify-center">
      {/* Hot Sale Section */}
      <div className="flex flex-col items-center">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Blazing Deals!</h2>
          <div className="flex justify-center items-center w-full max-w-full mb-16">
            {/* First Stack */}
            <div
              className="relative w-80 h-52 mx-8"
              onWheel={(e) => handleScroll(e, 0)}
            >
              {itemsPerStack[0].map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 rounded-lg shadow-lg transition-transform duration-300 ${
                    index === stackIndices[0] ? 'transform translate-y-0 bg-gray-200' :
                    index === (stackIndices[0] + 1) % itemsPerStack[0].length ? 'transform translate-y-16 bg-gray-300' :
                    'transform translate-y-32 bg-gray-400'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Second Stack */}
            <div
              className="relative w-80 h-52 mx-8"
              onWheel={(e) => handleScroll(e, 1)}
            >
              {itemsPerStack[1].map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 rounded-lg shadow-lg transition-transform duration-300 ${
                    index === stackIndices[1] ? 'transform translate-y-0 bg-gray-200' :
                    index === (stackIndices[1] + 1) % itemsPerStack[1].length ? 'transform translate-y-16 bg-gray-300' :
                    'transform translate-y-32 bg-gray-400'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Third Stack */}
            <div
              className="relative w-80 h-52 mx-8"
              onWheel={(e) => handleScroll(e, 2)}
            >
              {itemsPerStack[2].map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 rounded-lg shadow-lg transition-transform duration-300 ${
                    index === stackIndices[2] ? 'transform translate-y-0 bg-gray-200' :
                    index === (stackIndices[2] + 1) % itemsPerStack[2].length ? 'transform translate-y-16 bg-gray-300' :
                    'transform translate-y-32 bg-gray-400'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
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
}
