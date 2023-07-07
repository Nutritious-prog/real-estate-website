import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as OuterLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

import Aos from "aos";
// import "aos/dist/aos.css";

import logo from "../assets/logo-test-1.png";

function Navigation() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    // whole nav
    <div className="w-screen flex bg-white z-10 sticky top-0 shadow-md">
      {/* container for logo, menu and button */}
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex justify-between py-3 font-bold tracking-widest">
        {/* logo */}
        <div className="w-[120px] md:w-[155px] ml-2 py-2 flex align-middle">
          <OuterLink to="/">
            <img src={logo} alt="" />
          </OuterLink>
        </div>
        {/* menu */}
        <div className="w-[50%] mr-[4%] my-auto montserrat-font text-md">
          <ul className="hidden xl:flex justify-around py-4 list-none">
            <li className="hover:cursor-pointer hover-underline-animation font-normal group transition duration-300 hover:text-[#C28563]">
              <OuterLink to="/">
                HOME
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </OuterLink>
            </li>

            <li className="hover:cursor-pointer hover-underline-animation font-normal group transition duration-300 hover:text-[#C28563]">
              <OuterLink to="/domy">
                OFERTA
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </OuterLink>
            </li>
            <li className="hover:cursor-pointer hover-underline-animation font-normal group transition duration-300 hover:text-[#C28563]">
              <OuterLink to="/o-nas">
                O NAS
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </OuterLink>
            </li>
            <li className="hover:cursor-pointer hover-underline-animation font-normal group transition duration-300 hover:text-[#C28563]">
              <OuterLink to="/kontakt">
                KONTAKT
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C28563]"></span>
              </OuterLink>
            </li>
          </ul>
        </div>
        {/* button */}
        <ScrollLink to="houses" smooth={true} duration={500}>
          <button className="xl:flex hidden mt-2 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2">WIĘCEJ INFORMACJI</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
        </ScrollLink>

        {/* burger menu buttons */}
        <div className="block xl:hidden mr-4 my-auto" onClick={handleClick}>
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
        data-aos={!nav ? "none" : "fade-down"}
        className={
          !nav
            ? "hidden "
            : "absolute w-full px-8 mt-20 burgermenu pb-8 bg-white z-10"
        }
      >
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <OuterLink to="/">HOME</OuterLink>
        </li>
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <OuterLink to="/domy">OFERTA</OuterLink>
        </li>
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <OuterLink to="/o-nas">O NAS</OuterLink>
        </li>
        <li className="border-b-2 border-[#C28563] w-full p-4 hover:cursor-pointer hover-underline-animation">
          <OuterLink to="/kontakt">KONTAKT</OuterLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
