import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";

class App extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
      <div className="mainContainer w-screen bg-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1">
            <select
              className="px-4 py-2 border border-gray-50 bg-white text-black rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Filter...</option>
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
              <option value="filter3">Filter 3</option>
            </select>
          </div>
          <div className="flex-1 text-right">
            <input
              type="text"
              placeholder="Search..."
              className="w-1/4 px-4 py-2 rounded-lg shadow-sm mr-4 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <h2 className="text-black font-bold text-xl mb-4">Market Rate Today</h2>
        <Slider {...settings}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="container">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
