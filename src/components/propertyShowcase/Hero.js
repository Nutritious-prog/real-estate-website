import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as OuterLink } from "react-router-dom";

import home_one from "../../assets/bedroom_vis.png";
import home_two from "../../assets/liv_room_vis.png";

import "./Hero.css";
function Hero() {
  return (
    <div className="w-screen flex brick-bg">
      <div className="w-[100%] mx-auto flex justify-between xl:flex-row flex-col py-5 text-white">
        {/* left */}
        <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
          <span className="xl:text-lg text-[#C28563] text-md p-2 montserrat-font">
            ODKRYJ NASZE NOWOCZESNE DOMY!
          </span>
          <h2 className="xl:text-6xl text-4xl p-5">
            TWORZYMY NIERUCHOMOŚCI DLA CIEBIE!
          </h2>
          <div className="flex w-full xl:w-[60%] justify-evenly xl:p-5 mx-auto">
            <ScrollLink to="info" smooth={true} duration={500} offset={-70}>
              <button className="flex bg-[#C28563] text-white tracking-widest xl:p-3 p-1 ease-in duration-500 hover:bg-[#19130B] mr-1">
                <p className="p-2">DALEJ</p>
                <p className="p-3 font-thin">
                  <FaGreaterThan />
                </p>
              </button>
            </ScrollLink>
            <OuterLink to="/kontakt">
              <button className="flex bg-slate-100 text-[#19130B] tracking-widest xl:p-3 p-1 ease-in duration-500 hover:text-slate-100 hover:bg-[#C28563] ml-1">
                <p className="p-2">KONTAKT</p>
                <p className="p-3 font-thin">
                  <FaGreaterThan />
                </p>
              </button>
            </OuterLink>
          </div>
        </div>
        {/* right */}
        <div className="xl:w-[45%] w-[95%] p-5 xl:mr-5 relative">
          <div className="xl:w-[90%] w-[75%] h-auto">
            <img className="w-full h-auto" src={home_two} alt="" />
          </div>
          <div className="absolute xl:bottom-10 bottom-0 right-0 w-[55%] h-auto">
            <img className="w-full h-auto" src={home_one} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
