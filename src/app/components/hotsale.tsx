import React from 'react';

type HotSaleProps = {
  data: { title: string; price: number; city: string; image_url: string }[];
};

const HotSale: React.FC<HotSaleProps> = ({ data }) => {

  return (
    <div className="bg-gray-100 min-h-screen w-screen flex items-center justify-center mb-40">
      <div className="flex flex-col items-center">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Blazing Deals!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
            {data.slice(0, 4).map((property, index) => (
              <div key={index} className="relative p-6 rounded-lg shadow-lg bg-white hover:bg-yellow-500 duration-500 cursor-pointer transition-all hover:scale-105">
                <img src={property.image_url} alt={property.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                <p className="text-lg font-semibold text-black">{property.title}</p>
                <p className="text-sm text-black">Price: {property.price}</p>
                <p className="text-sm text-black">Location: {property.city}</p>
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
