"use Client";
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

// import logo from "../Components/Images/logo.png";

const Header: React.FC = () => {
  const [navBar, setNavBar] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onNavClick = () => {
    setNavBar((prevState) => !prevState);
    setAnimate(!animate); // Toggle animate state
  };

  return (
      <nav
        style={{
          backgroundImage: `linear-gradient(to bottom, #1E1E1E, #121212)`,
        }}
        className="fixed top-0 left-0 right-0 flex items-center justify-between text-white lg:justify-around px-4 py-5 lg:space-x-6 shadow-teal-500 h-20 z-50"
      >
        <div className="flex items-center">
          {/* Logo */}
          <a href="#home">
            {/* <img src={logo} alt="Logo" className="w-12 h-12 mr-2 cursor-pointer" /> */}
          </a>
        </div>
        <div className="hidden lg:flex mr-24 space-x-4 font-light text-lg">
          {/* Your navigation buttons */}
          <a href="#about" className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            About
          </a>
          <a href="#services" className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            Services
          </a>
          <a href="#projects" className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            Contact
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
              About
            </a>
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#services"
              onClick={onNavClick}
            >
              Services
            </a>
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#projects"
              onClick={onNavClick}
            >
              Projects
            </a>
            <a
              className={`px-4 capitalize py-6 text-2xl ${
                animate ? "slideIn" : ""
              }`}
              href="#contact"
              onClick={onNavClick}
            >
              Contact
            </a>
          </ul>
        )}
      </nav>
  );
};

export default Header;
