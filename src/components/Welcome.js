import React from "react";
import { FaGreaterThan, FaHome, FaShieldAlt } from "react-icons/fa";

import home_one from "../assets/lux-home-one.jpeg";
import home_two from "../assets/lux-home-two.jpeg";

function Welcome() {
  return (
    <div className="w-screen flex mt-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex justify-between">
        {/* left */}
        <div className="w-[45%] p-3 relative">
          <div>
            <img src={home_two} alt="" />
          </div>
          <div className="absolute bottom-0 right-0 w-[65%] h-auto">
            <img className="w-full h-auto" src={home_one} alt="" />
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 p-3 tracking-widest">
          <p className="text-[#C28563] py-2 text-xl font-bold">
            WELCOME TO PROPATY
          </p>
          <h1 className="font-bold text-5xl py-4">
            BEST DEAL WITH OUR PROPATY
          </h1>
          <p className="tracking-normal text-xl py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look.
          </p>

          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200">
            <div className="flex">
              <p className="pr-4 text-[#C28563] text-5xl">
                <FaHome />
              </p>
              <p className="text-lg">ATRACTIVE DESIGN LOCATION</p>
            </div>
            <div className="flex">
              <p className="pr-4 text-[#C28563] text-5xl">
                <FaShieldAlt />
              </p>
              <p className="text-lg">ECO WINDOW CONSTRUCTION</p>
            </div>
          </div>

          <h2 className="text-[#C28563] py-4 text-xl font-bold mt-3">
            ROYAL TOUCH PAINT SPRING SECQURITY
          </h2>
          <p className="tracking-normal text-xl py-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>

          <button className="xl:flex hidden bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2">MORE INFO</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
