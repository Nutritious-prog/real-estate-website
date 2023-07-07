import React from "react";

import vekaLogo from "../../assets/company-logos/veka.png";
import gminaBLogo from "../../assets/company-logos/gmina_b.png";
import gminaNLogo from "../../assets/company-logos/gmina_n.png";
import plkLogo from "../../assets/company-logos/plk.png";
import tomaszLogo from "../../assets/company-logos/tomaszewski.png";

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
        <div className="w-[15%]">
          <img className="w-full h-auto" src={vekaLogo} alt="" />
        </div>
        <div className="w-[15%]">
          <img className="w-full h-auto" src={gminaBLogo} alt="" />
        </div>
        <div className="w-[15%]">
          <img className="w-full h-auto" src={plkLogo} alt="" />
        </div>
        <div className="w-[15%]">
          <img className="w-full h-auto" src={gminaNLogo} alt="" />
        </div>
        <div className="w-[15%] flex">
          <img className="w-full my-auto" src={tomaszLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ClientsCarousel;
