import React from 'react'

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import plan from "../../assets/house-plan.jpeg";
import { FaGreaterThan, FaHome, FaShieldAlt } from "react-icons/fa";


function HouseDescription() {
  return (
    <div className="w-full flex py-10 flex-col">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] flex text-center mx-auto flex-col pb-10">
      <h2 className="xl:text-6xl text-4xl p-5 w-[65%] mx-auto">
        CO ZNAJDZIEMY W ŚRODKU?
      </h2>
      <span className="block w-[10%] h-1 bg-[#C28563] mx-auto"></span>
      </div>

      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col-reverse xl:flex-row ">
        {/* LEFT PART */}
        <div className="xl:w-1/2 w-full p-8">
          <Zoom>
            <img src={plan} alt="" />
          </Zoom>
        </div>
        {/* RIGHT PART */}
        <div className="xl:w-1/2 p-8 w-full tracking-widest bg-[#FBF9F7]">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">
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

          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200 xl:flex-row flex-col">
            <p>Pokoje</p>
            <p>5</p>
          </div>
          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200 xl:flex-row flex-col">
            <p>Powierzchnia domu</p>
            <p>117 m<sup>2</sup></p>
          </div>
          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200 xl:flex-row flex-col">
            <p>Powierzchnia działki</p>
            <p>285 m<sup>2</sup></p>
          </div>
          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200 xl:flex-row flex-col">
            <p>Łazienki</p>
            <p>2</p>
          </div>


          <button className="flex mt-4 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2 font-bold">MORE INFO</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HouseDescription