import React from "react";
import { FaGreaterThan } from "react-icons/fa";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import logo from "../assets/logo-white-letters-removebg-cropped.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="w-full flex bg-[#1D1710] pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        <div className="w-full flex mx-auto mt-10 flex-col xl:flex-row">
          {/* links */}
          <div className="xl:w-1/3 w-full py-10 border-y-[1px] border-[#443F39]">
            <h2 className="font-bold text-3xl py-4 mt-2 text-white ml-4">
              PRZYDATNE LINKI
            </h2>
            <div className="flex text-white text-xl ml-4">
              <ul className="pr-10 font-bold">
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  O nas
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  FAQ
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Nasze inwestycje
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Partnerzy
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Podsumowanie
                </li>
              </ul>
              <ul className="pr-10 font-bold">
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Lista Nieruchomości
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Sekcja Kreatywna
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Kontakt
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Botanika
                </li>
                <li className="py-2 flex">
                  <p className="text-xs p-2 text-[#C28563]">
                    <FaGreaterThan />
                  </p>
                  Przestrzenie
                </li>
              </ul>
            </div>
          </div>
          {/* info */}
          <div className="xl:w-1/3 w-full text-center flex flex-col py-10 border-[1px] border-[#443F39] text-white">
            <div className="w-[120px] md:w-[155px] mx-auto py-2 flex align-middle">
              <img src={logo} alt="" />
            </div>
            <div>
              <h2 className="text-xl py-2 font-bold">LOKALIZACJA</h2>
              <p className="text-lg">Zwierzyniecka 5 i 9</p>
              <p className="text-lg">Skierniewice, Polska</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl py-2 font-bold">KONTAKT</h2>
              <p className="text-lg">
                <a href="tel:507800077">+48 507 800 077</a>
              </p>
              <p className="text-lg">
                <a href="mailto:biuro@zwierzynieckapark.com.pl">
                  biuro@zwierzynieckapark.pl
                </a>
              </p>
            </div>
          </div>
          {/* gallery */}
          <div className="xl:w-1/3 w-full py-10 border-y-[1px] border-[#443F39]">
            <h2 className="font-bold text-3xl py-4 mt-2 ml-4 text-white">
              GALERIA
            </h2>
            <div className="ml-4 flex flex-wrap">
              <div className="w-[30%] h-[125px] my-2 mx-1 overflow-hidden">
                <Zoom>
                  <div
                    aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                    role="img"
                    className="tile-background h-[215px] w-[215px] -m-10"
                  ></div>
                </Zoom>
              </div>
              <div className="w-[30%] h-[125px] my-2 mx-1 overflow-hidden">
                <Zoom>
                  <div
                    aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                    role="img"
                    className="tile-background-two h-[215px] w-[215px] -m-10"
                  ></div>
                </Zoom>
              </div>
              <div className="w-[30%] h-[125px] my-2 mx-1 overflow-hidden">
                <Zoom>
                  <div
                    aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                    role="img"
                    className="tile-background-three h-[215px] w-[215px] -m-10"
                  ></div>
                </Zoom>
              </div>
              <div className="w-[30%] h-[125px] my-2 mx-1 overflow-hidden">
                <Zoom>
                  <div
                    aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                    role="img"
                    className="tile-background-four h-[215px] w-[215px] -m-10"
                  ></div>
                </Zoom>
              </div>
              <div className="w-[30%] h-[125px] my-2 mx-1 overflow-hidden">
                <Zoom>
                  <div
                    aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                    role="img"
                    className="tile-background-five h-[215px] w-[215px] -m-10"
                  ></div>
                </Zoom>
              </div>
              <div className="w-[30%] h-[125px] my-2 mx-1 overflow-hidden">
                <Zoom>
                  <div
                    aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                    role="img"
                    className="tile-background-six h-[215px] w-[215px] -m-10"
                  ></div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
        {/* credits */}
        <div>
          <h2 className="p-2 text-white">
            Copyright JSTAgency 2023 All Rights Reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
