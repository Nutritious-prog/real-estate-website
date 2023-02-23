import React from "react";

import dummyLogo from "../../assets/dummy-logo-1.jpeg";
import dummyLogo2 from "../../assets/dummy-logo-2.jpeg";
import dummyLogo3 from "../../assets/dummy-logo-3.jpeg";

function ClientsCarousel() {
  return (
    <div className="w-screen flex mt-10 pb-10 flex-col">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] flex text-center mx-auto flex-col pb-10">
        <h2 className="xl:text-6xl text-4xl p-5 lg:w-[65%] w-full mx-auto">
          OTO NASI KLIENCI
        </h2>
        <span className="block w-[10%] h-1 bg-[#C28563] mx-auto"></span>
      </div>
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex justify-between flex-row">
        <div className="w-1/5 opacity-50">
          <img className="w-full h-auto" src={dummyLogo} alt="" />
        </div>
        <div className="w-1/5 opacity-50">
          <img className="w-full h-auto" src={dummyLogo2} alt="" />
        </div>
        <div className="w-1/5 opacity-50">
          <img className="w-full h-auto" src={dummyLogo3} alt="" />
        </div>
        <div className="w-1/5 opacity-50">
          <img className="w-full h-auto" src={dummyLogo2} alt="" />
        </div>
        <div className="w-1/5 opacity-50">
          <img className="w-full h-auto" src={dummyLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ClientsCarousel;
