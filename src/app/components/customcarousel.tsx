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

const CustomCarousel: React.FC = () => {
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
        <div className="relative carousel-item h-full text-white">
          <div className='absolute inset-0 w-full bg-transparent'>
            <div className='w-full h-full flex justify-start items-center pl-20'>
              <div className='flex flex-col items-start space-y-10 pb-52'>
                <p className='integral-bold text-6xl'>TRAIN LIKE THE PROS</p>
                <p className='text-xl'>Chiefs Kingdom, are you ready to Train Like The Pros? Sign up to receive the latest news!</p>
                <div className='px-1 py-1 cursor-pointer flex justify-center transform -skew-x-12 primary-text-color primary-background'>
                  <p className='w-full p-4 text-lg lg:text-2xl text-center tungsten-light text-white transform skew-x-12 uppercase'>FREE PASS</p>
                </div>
              </div>
            </div>
          </div>
          <img className='w-full h-full' src='./images/carousel-1.jpg' alt=''/>
        </div>
        <div className="relative carousel-item h-full text-white">
          <div className='absolute inset-0 w-full bg-transparent'>
            <div className='w-full h-full flex justify-start items-center pl-20'>
              <div className='flex flex-col items-start space-y-10 pt-20 pb-52'>
                <p className='integral-bold text-6xl'>ELEVATE YOUR WELLNESS. FUEL YOUR</p>
                <p className='integral-bold text-6xl'>LIFESTYLE.</p>
                <p className='text-xl'>Liquid Mobile IV delivers you the nutrients your body needs.</p>
                <div className='px-1 py-1 cursor-pointer flex justify-center transform -skew-x-12 primary-text-color primary-background'>
                  <p className='w-full p-4 text-lg lg:text-2xl text-center tungsten-light text-white transform skew-x-12 uppercase'>LEARN MORE</p>
                </div>
              </div>
            </div>
          </div>
          <img className='w-full h-full' src='./images/carousel-2.jpg' alt=''/>
        </div>
        <div className="relative carousel-item h-full text-white">
          <div className='absolute inset-0 w-full bg-transparent'>
            <div className='w-full h-full flex justify-start items-center pl-20'>
              <div className='flex flex-col items-start space-y-10 pt-20 pb-52'>
                <p className='integral-bold text-6xl'>JOIN OUR COMMUNITY, CONNECT WITH YOUR</p>
                <p className='integral-bold text-6xl'>FAVORITE TEAM</p>
                <p className='text-xl'>Enjoy Exclusive Member-Only Benefits</p>
                <div className='px-1 py-1 cursor-pointer flex justify-center transform -skew-x-12 primary-text-color primary-background'>
                  <p className='w-full p-4 text-lg lg:text-2xl text-center tungsten-light text-white transform skew-x-12 uppercase'>JOIN NOW</p>
                </div>
              </div>
            </div>
          </div>
          <img className='w-full h-full' src='./images/carousel-3.jpg' alt=''/>
        </div>
      </Carousel>
      <ul className="custom-dots"></ul>
    </div>
  );
};

export default CustomCarousel;
