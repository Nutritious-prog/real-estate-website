import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as OuterLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

import Aos from "aos";
// import "aos/dist/aos.css";

import logo from "../assets/logo.png";

function Navigation() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    // whole nav
    <div className="w-screen flex bg-white border-b z-10">
      {/* container for logo, menu and button */}
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex justify-between py-3 font-bold tracking-widest">
        {/* logo */}
        <div className="w-[120px] md:w-[155px] ml-2 py-2 flex align-middle">
          <img src={logo} alt="" />
        </div>
        {/* menu */}
        <div className="w-[40%] mr-[4%] my-auto">
          <ul className="hidden xl:flex justify-around py-4">
            <li className="hover:cursor-pointer hover-underline-animation font-light group transition duration-300">
              <ScrollLink to="aboutBiorezonans" smooth={true} duration={500}>
                HOME
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </ScrollLink>
            </li>
            <li className="hover:cursor-pointer hover-underline-animation font-light group transition duration-300">
              <ScrollLink to="offer" smooth={true} duration={500}>
                OFFER
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </ScrollLink>
            </li>
            <li className="hover:cursor-pointer hover-underline-animation font-light group transition duration-300">
              <ScrollLink to="apparatus" smooth={true} duration={500}>
                APARTMENTS
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </ScrollLink>
            </li>
            <li className="hover:cursor-pointer hover-underline-animation font-light group transition duration-300">
              <ScrollLink to="opinions" smooth={true} duration={500}>
                CONTACT US
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </ScrollLink>
            </li>
          </ul>
        </div>
        {/* button */}
        <ScrollLink to="contact" smooth={true} duration={500}>
          <button
            className="xl:flex hidden bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]"
          >
            <p className="p-2">MORE INFO</p>
            <p className="p-3 font-thin"><FaGreaterThan /></p>
          </button>
        </ScrollLink>

        {/* burger menu buttons */}
        <div className="block xl:hidden mr-4 mt-2" onClick={handleClick}>
          {!nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000000"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000000"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
      {/* hidden nav */}
      <ul
      data-aos={
        !nav
          ? "none"
          : "fade-down"
      }
        className={
          !nav
            ? "hidden "
            : "absolute w-full px-8 mt-20 burgermenu pb-8 bg-white z-10"
        }
      >
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <ScrollLink to="home" smooth={true} duration={500}>
            HOME
          </ScrollLink>
        </li>
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <ScrollLink to="offer" smooth={true} duration={500}>
            OFFER
          </ScrollLink>
        </li>
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <ScrollLink to="opinions" smooth={true} duration={500}>
            APARTMENTS
          </ScrollLink>
        </li>
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <ScrollLink to="forKids" smooth={true} duration={500}>
            CONTACT US
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
