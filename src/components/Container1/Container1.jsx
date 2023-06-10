import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import './Container1.css'

function Container1() {
  return (
    <div className='what_we_offer_container'>
        <div className="what_we_offer">What we Offer</div>
        <div>
        <Swiper
            slidesPerView={3}
            spaceBetween={100}
            freeMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="slide">Book a 1:1 Session with trainer <span className='italic-text-13'>(online/offline)</span></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">Consultancy Call <span className='italic-text-13'>(With Experts)</span></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">Book a Group Session <span className='italic-text-13'>(For Organization)</span></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">Online Course</div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Container1