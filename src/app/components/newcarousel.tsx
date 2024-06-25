import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../globals.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface CustomDotProps {
  onClick: () => void;
  active: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <li
      className={`custom-dot ${active ? 'active' : ''}`}
      onClick={() => onClick()}
    />
  );
};

const CustommCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        showDots
        customDot={<CustomDot onClick={() => {}} active={false} />} // You can handle the state and props accordingly
        infinite
        autoPlay
        autoPlaySpeed={4000}
        renderButtonGroupOutside
      >
        <div className="relative carousel-item min-h-screen text-white">
          <img className='w-full h-full' src='./images/carousel-1.jpg' alt=''/>
          <div className='absolute top-0 right-0 bg-red-500 text-white px-4 py-2 m-2 rounded-lg z-10'>
            10% off
          </div>
          <div className='absolute inset-0 w-full flex justify-center items-center'>
            <form className='bg-yellow-100 w-1/2 bg-opacity-70 p-6 rounded-lg shadow-md space-y-4'>
              <input type="text" placeholder="Full Name" className='w-full p-2 border rounded'/>
              <input type="text" placeholder="Phone Number" className='w-full p-2 border rounded'/>
              <textarea placeholder="Detail" className='w-full p-2 border rounded h-24 resize-none'></textarea>
              <div className='flex justify-center'>
                <button type="submit" className='w-1/2 p-2 bg-black hover:bg-yellow-500 transition-all duration-500 text-white rounded'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative carousel-item h-full text-white">
          <img className='w-full h-full' src='./images/carousel-2.jpg' alt=''/>
          <div className='absolute top-0 right-0 bg-red-500 text-white px-4 py-2 m-2 rounded-lg z-10'>
            20% off
          </div>
          <div className='absolute inset-0 w-full flex justify-center items-center'>
            <form className='bg-yellow-100 w-1/2 bg-opacity-70 p-6 rounded-lg shadow-md space-y-4'>
              <input type="text" placeholder="Full Name" className='w-full p-2 border rounded'/>
              <input type="text" placeholder="Phone Number" className='w-full p-2 border rounded'/>
              <textarea placeholder="Detail" className='w-full p-2 border rounded h-24 resize-none'></textarea>
              <div className='flex justify-center'>
                <button type="submit" className='w-1/2 p-2 bg-black hover:bg-yellow-500 transition-all duration-500 text-white rounded'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative carousel-item h-full text-white">
          <img className='w-full h-full' src='./images/carousel-3.jpg' alt=''/>
          <div className='absolute top-0 right-0 bg-red-500 text-white px-4 py-2 m-2 rounded-lg z-10'>
            10% off
          </div>
          <div className='absolute inset-0 w-full flex justify-center items-center'>
            <form className='bg-yellow-100 w-1/2 bg-opacity-70 p-6 rounded-lg shadow-md space-y-4'>
              <input type="text" placeholder="Full Name" className='w-full p-2 border rounded'/>
              <input type="text" placeholder="Phone Number" className='w-full p-2 border rounded'/>
              <textarea placeholder="Detail" className='w-full p-2 border rounded h-24 resize-none'></textarea>
              <div className='flex justify-center'>
                <button type="submit" className='w-1/2 p-2 bg-black hover:bg-yellow-500 transition-all duration-500 text-white rounded'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Carousel>
      <ul className="custom-dots"></ul>
    </div>
  );
};

export default CustommCarousel;
