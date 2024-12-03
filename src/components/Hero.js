import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Hero.css";
import { FaGreaterThan } from "react-icons/fa";

import "react-slideshow-image/dist/styles.css";

function Hero() {
  return (
    <div>
      <div className="each-slide-effect xl:h-[100vh] h-[48vh] w-[100vw] flex">
        <div className="w-[100%] mx-auto flex justify-center text-center flex-col slide-one-bg text-white     text-container">
          <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
            <span className="xl:text-lg text-[#C28563] text-md p-2 montserrat-font">
              Twoje marzenia, nasza niezawodność
            </span>
            <h2 className="xl:text-6xl text-2xl p-5">
              Nieruchomości idealne dla Ciebie w Zwierzyniecka Park!
            </h2>
            <div className="flex w-full xl:w-[60%] justify-evenly xl:p-5 mx-auto">
              <ScrollLink to="houses" smooth={true} duration={500} offset={-50}>
                <button className="flex bg-[#C28563] text-white tracking-widest xl:p-3 p-1 ease-in duration-500 hover:bg-[#19130B] mr-1">
                  <p className="p-2">OFERTA</p>
                  <p className="p-3 font-thin">
                    <FaGreaterThan />
                  </p>
                </button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-200}>
                <button className="flex bg-slate-100 text-[#19130B] tracking-widest xl:p-3 p-1 ease-in duration-500 hover:text-slate-100 hover:bg-[#C28563] ml-1">
                  <p className="p-2">KONTAKT</p>
                  <p className="p-3 font-thin">
                    <FaGreaterThan />
                  </p>
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
