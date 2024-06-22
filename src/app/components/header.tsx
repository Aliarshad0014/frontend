"use client"; // Correctly specify the use client directive
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../images/logo.png"; // Corrected the path from 'mages' to 'images'

const Header: React.FC = () => {
  const [navBar, setNavBar] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onNavClick = () => {
    setNavBar((prevState) => !prevState);
    setAnimate(!animate); // Toggle animate state
  };

  return (
    <header>
      <nav
        style={{
          background: `linear-gradient(to bottom, rgba(30, 30, 30, 0.0), rgba(18, 18, 18, 0.0))`,
        }}
        className="fixed top-0 left-0 right-0 flex items-center justify-between text-white px-4 py-5 lg:space-x-6 shadow-teal-500 h-20 z-50"
      >
        <div className="flex items-center">
          {/* Logo */}
          <a href="#home">
            {/* <img alt="Logo" className="w-12 h-12 mr-2 cursor-pointer" /> */}
          </a>
        </div>
        <div className="hidden lg:flex justify-center w-full space-x-8 font-light text-lg">
          {/* Centered navigation buttons */}
          <a href="#about" className="hover:text-yellow-500 font-bold h-9 rounded-md ease-in-out duration-500 transition-all text-black">
            PROPERTIES
          </a>
          <a href="#services" className="hover:text-yellow-500 h-9 font-bold rounded-md ease-in-out duration-500 transition-all text-black">
            SERVICES
          </a>
          <a href="#projects" className="hover:text-yellow-500 h-9 font-bold rounded-md ease-in-out duration-500 transition-all text-black">
            CORPORATE
          </a>
          <a href="#contact" className="hover:text-yellow-500 h-9 font-bold rounded-md ease-in-out duration-500 transition-all text-black">
            MATERIAL
          </a>
        </div>
        <div
          onClick={onNavClick}
          className="lg:hidden flex mt-1 top-0 z-50 text-gray-500 cursor-pointer"
        >
          {navBar ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
        </div>
        {navBar && (
          <ul
            className={`h-[100vh] text-teal-50 phone-view lg:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full bggradient ${
              animate ? "slideIn" : ""
            }`}
          >
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#about"
              onClick={onNavClick}
            >
              PROPERTIES
            </a>
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#services"
              onClick={onNavClick}
            >
              SERVICES
            </a>
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#projects"
              onClick={onNavClick}
            >
              CORPORATE
            </a>
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#contact"
              onClick={onNavClick}
            >
              MATERIAL
            </a>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
