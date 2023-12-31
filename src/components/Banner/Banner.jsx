import React from "react";
import { BannerImages } from "./Bannerimages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Banner.css";

function Banner() {
  return (
    <section className="Banner_section">
      <div className="image_slider">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {BannerImages.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="banner_sliderImg"
                  src={items.url}
                  alt={items.des}
                ></img>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="Banner_des">
        <div className="head">
          <h1>Judo Pal</h1>
        </div>
        <div className="text">
          Prepare for the Unexpected
          <br /> Transform your mindset
          <br /> Embrace a new era of self defense
        </div>
      </div>
    </section>
  );
}

export default Banner;
