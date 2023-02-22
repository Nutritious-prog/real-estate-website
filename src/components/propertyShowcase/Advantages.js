import React from "react";

import { FaHome, FaShieldAlt } from "react-icons/fa";

function Advantages() {
  return (
    <div className="w-full py-10 flex flex-col bg-[#FBF9F7]">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto">
        <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto">
          <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
            <span className="xl:text-lg text-[#C28563] text-md p-2 montserrat-font">
              DISCOVER OUR MODERN VILLA
            </span>
            <h2 className="xl:text-6xl text-4xl p-5 text-black">
              BUILDING EMPIRE STATE SUPREME RESIDENCE
            </h2>
          </div>
        </div>
        <div className="flex xl:w-[80%] w-[90%] mx-auto justify-between py-5 xl:flex-row flex-col">
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaHome />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">STARBUCKS BISTRO</p>
            <p className="text-lg text-[#666364]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
            </div>
          </div>
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaShieldAlt />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">PROFESSIONALS BILLIARDS</p>
            <p className="text-lg text-[#666364]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[80%] w-[90%] mx-auto justify-between pb-5 xl:flex-row flex-col">
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaHome />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">STARBUCKS BISTRO</p>
            <p className="text-lg text-[#666364]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
            </div>
          </div>
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaShieldAlt />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">PROFESSIONALS BILLIARDS</p>
            <p className="text-lg text-[#666364]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
