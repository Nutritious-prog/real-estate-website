import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";

import './PhotoSlider.scss'

function PhotoSlider(props) {
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb  && !activeThumb.destroyed ? activeThumb : null}}
        onSlideChange={() => console.log('slide change')}
        className="product-images-slider"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PhotoSlider;
