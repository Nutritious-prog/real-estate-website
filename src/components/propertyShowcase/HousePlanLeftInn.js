import React from "react";

import plan from "../../assets/plans/Dół_Lewy_Wew.png";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import PhotoSlider from "./PhotoSlider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { houseImages } from "../../assets/houseImagesIndex.js";

function HousePlanLeftInn(props) {
  return (
    <div className="w-full flex py-10 flex-col">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] flex text-center mx-auto flex-col pb-10">
      <h2 className="xl:text-6xl text-4xl p-5 w-[65%] mx-auto">
        PLAN BUDYNKU {props.houseLetter.toUpperCase()}
      </h2>
      <span className="block w-[10%] h-1 bg-[#C28563] mx-auto"></span>
      </div>

      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col xl:flex-row ">
        {/* LEFT PART */}
        <div className="xl:w-1/2 w-full p-10">
          <PhotoSlider images={houseImages} />
        </div>
        {/* RIGHT PART */}
        <div className="xl:w-1/2 w-full">
          <Zoom>
            <img src={plan} alt="" />
            {/* <img src={require(`../assets/${props.fileName.toLowerCase()}`)} alt=''/> */}
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default HousePlanLeftInn;
