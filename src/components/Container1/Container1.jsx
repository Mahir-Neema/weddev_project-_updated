import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import './Container1.css'

function Container1() {
  const [isMobile, setIsMobile] = useState(3000); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth); // Adjust the threshold value as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='what_we_offer_container'>
        <div className="what_we_offer">What we Offer</div>
        <div className='what_we_offer_cards'>
        <Swiper
            slidesPerView={isMobile>900 ? 3: isMobile>660 ? 2:1}
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