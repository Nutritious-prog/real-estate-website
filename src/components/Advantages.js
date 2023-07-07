import React from "react";
import {
  FaGreaterThan,
  FaDove,
  FaLocationArrow,
  FaCocktail,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import "./Advantages.css";

function Advantages() {
  return (
    <div className="w-full flex content pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        {/* UP PART */}
        <div className="w-[75%] text-center mx-auto flex flex-col py-14">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">
            TWOJE KORZYŚCI
          </p>
          <h2 className="font-bold xl:text-5xl py-4 text-white">
            SPRAWDŹ CO MOŻESZ ZYSKAĆ WYBIERAJĄC ZWIERZYNIECKA PARK!
          </h2>
        </div>
        {/* DOWN PART */}
        <div className="w-full flex bg-transparent xl:flex-row flex-col justify-between">
          <div className="xl:w-[30%] w-full text-center xl:text-left border-r-[1px] bg-white border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaLocationArrow />
            </p>
            <h3 className="text-3xl py-2">LOKALIZACJA</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">
                Dogodna lokalizacja blisko centrum
              </li>
              <li className="py-2 text-xl">
                Łatwy dostęp do głównych dróg i komunikacji miejskiej
              </li>
              <li className="py-2 text-xl">
                Sąsiedztwo atrakcyjnych terenów rekreacyjnych, parków i zieleni.
              </li>
            </ul>
            <ScrollLink to="houses" smooth={true} duration={500} offset={-50}>
              <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
                <p className="p-2 font-bold">OFERTA</p>
                <p className="p-3 font-thin">
                  <FaGreaterThan />
                </p>
              </button>
            </ScrollLink>
          </div>
          <div className="xl:w-[30%] w-full text-center xl:text-left border-r-[1px] bg-white border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaDove />
            </p>
            <h3 className="text-3xl py-2">SPOKÓJ</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">
                Cicha i spokojna okolica, idealna dla rodzin i poszukujących
                relaksu
              </li>
              <li className="py-2 text-xl">
                Zapewnione poczucie prywatności dzięki indywidualnym posesjom
              </li>
              <li className="py-2 text-xl">
                Monitorowana infrastruktura osiedla
              </li>
            </ul>
            <ScrollLink to="houses" smooth={true} duration={500} offset={-50}>
              <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
                <p className="p-2 font-bold">OFERTA</p>
                <p className="p-3 font-thin">
                  <FaGreaterThan />
                </p>
              </button>
            </ScrollLink>
          </div>
          <div className="xl:w-[30%] w-full text-center xl:text-left border-r-[1px] bg-white border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-5xl mx-auto xl:mx-0">
              <FaCocktail />
            </p>
            <h3 className="text-3xl py-2">WYGODA</h3>
            <ul className="px-4 dotted-ul">
              <li className="py-2 text-xl">
                Przestronne wnętrza i funkcjonalne układy pomieszczeń.
              </li>
              <li className="py-2 text-xl">
                Prywatne ogrody i tarasy, idealne na relaks.
              </li>
              <li className="py-2 text-xl">
                Wysokiej jakości wykończenia i materiały budowlane
              </li>
            </ul>
            <ScrollLink to="houses" smooth={true} duration={500} offset={-50}>
              <button className="flex w-fit mt-4 mx-auto xl:mx-0 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
                <p className="p-2 font-bold">OFERTA</p>
                <p className="p-3 font-thin">
                  <FaGreaterThan />
                </p>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
