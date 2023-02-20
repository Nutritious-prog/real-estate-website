import React from "react";
import { Slide } from "react-slideshow-image";
import "./Hero.css";
import { FaGreaterThan } from "react-icons/fa";

import "react-slideshow-image/dist/styles.css";

function Hero() {
  return (
    <Slide>
      <div className="each-slide-effect xl:h-[100vh] h-[48vh] w-[100vw] flex">
        <div className="w-[100%] mx-auto flex justify-center text-center flex-col slide-one-bg text-white     text-container">
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
        </div>
      </div>

      <div className="each-slide-effect xl:h-[100vh] h-[48vh] w-[100vw] flex">
        <div className="w-[100%] mx-auto flex justify-center text-center flex-col slide-two-bg text-white     text-container">
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
        </div>
      </div>

      <div className="each-slide-effect xl:h-[100vh] h-[48vh] w-[100vw] flex">
        <div className="w-[100%] mx-auto flex justify-center text-center flex-col slide-three-bg text-white     text-container">
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
        </div>
      </div>
    </Slide>
  );
}

export default Hero;
