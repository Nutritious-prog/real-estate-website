import React from "react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import plan from "../../assets/plans/Góra_Lewy_Wew.png";
import pdf_dol from "../../assets/pdfs/Dół_Lewy_Wew_Tech.pdf"
import pdf_gora from "../../assets/pdfs/Dół_Lewy_Wew_Tech.pdf"
import { FaGreaterThan } from "react-icons/fa";

import { Link as OuterLink } from "react-router-dom";

function HouseDescriptionLeftInn(props) {
  return (
    <div className="w-full flex py-10 flex-col">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] flex text-center mx-auto flex-col pb-10">
        <h2 className="xl:text-6xl text-4xl w-[65%] p-2 mx-auto">
          CO ZNAJDZIEMY W ŚRODKU?
        </h2>
        <span className="block w-[10%] h-1 bg-[#C28563] mx-auto"></span>
      </div>

      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col-reverse xl:flex-row ">
        {/* LEFT PART */}
        <div className="xl:w-1/2 w-full p-2">
          <Zoom>
            <img src={plan} alt="" />
          </Zoom>
        </div>
        {/* RIGHT PART */}
        <div className="xl:w-1/2 p-8 w-full tracking-widest bg-[#FBF9F7] h-fit my-auto">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">
            WITAJ W DOMU!
          </p>
          <h1 className="xl:text-6xl text-4xl">DETALE NASZYCH NIERUCHOMOŚCI</h1>
          <p className="tracking-normal text-xl py-3">
            Większość domów ma podobny układ, lecz każdy skrywa w sobie kilka
            elementów wyróniających go spośród reszty. Sprawdz jak prezentuje
            się wnętrze {props.houseName}!
          </p>

          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200">
            <p>Pokoje</p>
            <p>{props.roomsNumber}</p>
          </div>
          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200 ">
            <p>Powierzchnia użytkowa domu</p>
            <p>
              {props.homeSurface} m<sup>2</sup>
            </p>
          </div>
          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200">
            <p>Powierzchnia działki</p>
            <p>
              {props.lotSurface} m<sup>2</sup>
            </p>
          </div>
          <div className="flex w-full justify-between py-5 border-b-[1px] border-slate-200">
            <p>Łazienki</p>
            <p>2</p>
          </div>

          <OuterLink to="/kontakt">
            <button className="flex mt-4 bg-[#C28563] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]">
              <p className="p-2 font-bold">KONTAKT</p>
              <p className="p-3 font-thin">
                <FaGreaterThan />
              </p>
            </button>
          </OuterLink>
          <div className="mt-5  underline">
            <p className="">
              <a href={pdf_dol} target="_blank" rel="noreferrer">
                Rysunek techniczny Parter
              </a>
            </p>
            <p className="py-2">
              <a href={pdf_gora} target="_blank" rel="noreferrer">
                Rysunek techniczny Piętro
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDescriptionLeftInn;
