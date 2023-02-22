import React from 'react'
import { FaGreaterThan, FaHome, FaShieldAlt } from "react-icons/fa";

import home_one from "../../assets/lux-home-one.jpeg";
import home_two from "../../assets/lux-home-two.jpeg";

import './Hero.css'
function Hero() {
  return (
    <div className="w-screen flex brick-bg">
      <div className="w-[100%] mx-auto flex justify-between xl:flex-row flex-col py-5 text-white">
        {/* left */}
        <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
        <span className="xl:text-lg text-[#C28563] text-md p-2 montserrat-font">DISCOVER OUR MODERN VILLA</span>
          <h2 className="xl:text-6xl text-4xl p-5">BUILDING EMPIRE STATE SUPREME RESIDENCE</h2>
          <div className="flex w-full xl:w-[60%] justify-evenly xl:p-5 mx-auto">
            <button className="flex bg-[#C28563] text-white tracking-widest xl:p-3 p-1 ease-in duration-500 hover:bg-[#19130B] mr-1">
              <p className="p-2">MORE INFO</p>
              <p className="p-3 font-thin">
                <FaGreaterThan />
              </p>
            </button>
            <button className="flex bg-slate-100 text-[#19130B] tracking-widest xl:p-3 p-1 ease-in duration-500 hover:text-slate-100 hover:bg-[#C28563] ml-1">
              <p className="p-2">MORE INFO</p>
              <p className="p-3 font-thin">
                <FaGreaterThan />
              </p>
            </button>
          </div>
        </div>
        {/* right */}
        <div className="xl:w-[45%] w-full p-3 relative ml-auto">
          <div className="xl:w-[90%] w-[75%] h-auto">
            <img className="w-full h-auto" src={home_two} alt="" />
          </div>
          <div className="absolute xl:bottom-10 bottom-0 right-0 w-[65%] h-auto">
            <img className="w-full h-auto" src={home_one} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero