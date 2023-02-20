import React from "react";
import { FaHandHoldingUsd, FaGreaterThan } from "react-icons/fa";

import "./Adventages.css";

function Advantages() {
  return (
    <div className="w-full flex content pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        {/* UP PART */}
        <div className="w-[75%] text-center mx-auto flex flex-col py-14">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">OUR ADVENTAGES</p>
          <h2 className="font-bold text-5xl py-4 text-white">FIND OUT ALL WAYS TO ENJOY RESIDENTIAL LIFE</h2>
        </div>
        {/* DOWN PART */}
        <div className="w-full flex bg-white xl:flex-row flex-col">
          <div className="xl:w-1/4 w-full text-center xl:text-left border-r-[1px] border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaHandHoldingUsd />
            </p>
            <h3 className="text-3xl py-2">RESIDENTIAL</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">Praesentium Voluptatum</li>
              <li className="py-2 text-xl">Atque Corrupti Quosgre</li>
              <li className="py-2 text-xl">Facilis St Eter Expedita</li>
            </ul>
            <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2 font-bold">MORE INFO</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
          </div>
          <div className="xl:w-1/4 w-full text-center xl:text-left border-r-[1px] border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaHandHoldingUsd />
            </p>
            <h3 className="text-3xl py-2">RESIDENTIAL</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">Praesentium Voluptatum</li>
              <li className="py-2 text-xl">Atque Corrupti Quosgre</li>
              <li className="py-2 text-xl">Facilis St Eter Expedita</li>
            </ul>
            <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2 font-bold">MORE INFO</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
          </div>
          <div className="xl:w-1/4 w-full text-center xl:text-left border-r-[1px] border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaHandHoldingUsd />
            </p>
            <h3 className="text-3xl py-2">RESIDENTIAL</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">Praesentium Voluptatum</li>
              <li className="py-2 text-xl">Atque Corrupti Quosgre</li>
              <li className="py-2 text-xl">Facilis St Eter Expedita</li>
            </ul>
            <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2 font-bold">MORE INFO</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
          </div>
          <div className="xl:w-1/4 w-full text-center xl:text-left border-r-[1px] border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaHandHoldingUsd />
            </p>
            <h3 className="text-3xl py-2">RESIDENTIAL</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">Praesentium Voluptatum</li>
              <li className="py-2 text-xl">Atque Corrupti Quosgre</li>
              <li className="py-2 text-xl">Facilis St Eter Expedita</li>
            </ul>
            <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
            <p className="p-2 font-bold">MORE INFO</p>
            <p className="p-3 font-thin">
              <FaGreaterThan />
            </p>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
