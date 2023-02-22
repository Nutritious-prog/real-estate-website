import React from "react";
import { FaGreaterThan } from "react-icons/fa";


import logo from "../assets/logo-test-1-removebg.png";
import house from "../assets/house-one.jpeg";

function Footer() {
  return (
    <div className="w-full flex bg-[#1D1710] pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        <div className="w-full flex mx-auto mt-10">
          {/* links */}
          <div className="w-1/3 py-10 border-y-[1px] border-gray-600">
            <h2 className="font-bold text-3xl py-4 mt-2 text-white">USEFUL LINKS</h2>
            <div className="flex text-white text-xl">
              <ul className="pr-10 font-bold">
                
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>About us</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>FAQ</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Our Activity</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Partners</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Combined</li>
              </ul>
              <ul className="pr-10 font-bold">
                
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Property List</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Creative</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Cotact us</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Botanique</li>
                <li className="py-2 flex"><p className="text-xs p-2 text-[#C28563]"><FaGreaterThan /></p>Spaces</li>
              </ul>
            </div>
          </div>
          {/* info */}
          <div className="w-1/3 text-center flex flex-col py-10 bg-white">
            <div className="w-[120px] md:w-[155px] mx-auto py-2 flex align-middle">
              <img src={logo} alt="" />
            </div>
            <div>
              <h2 className="text-xl py-2 font-bold">LOKALIZACJA</h2>
              <p className="text-lg">Themeforest, Envato HQ 24 Fifth st.,</p>
              <p className="text-lg">Los Angeles, USA</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl py-2 font-bold">KONTAKT</h2>
              <p className="text-lg">+48 123 456 789</p>
              <p className="text-lg">jan.kowalski@gmail.com</p>
            </div>
          </div>
          {/* gallery */}
          <div className="w-1/3 py-10 border-y-[1px] border-gray-600">
            <h2 className="font-bold text-3xl py-4 mt-2 ml-4 text-white">GALERIA</h2>
            <div className="ml-4 flex flex-wrap">
              <div className="w-[125px] h-[125px] p-1 overflow-hidden border">
                <img className="h-full w-auto" src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
              <div className="w-1/3 h-auto p-1">
                <img src={house} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* credits */}
        <div>
          <h2 className="p-2 text-white">Copyright JSTAgency 2023 All Rights Reserved.</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
