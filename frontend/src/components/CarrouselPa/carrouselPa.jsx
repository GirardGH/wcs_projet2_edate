/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import "./CarrouselPa.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import robotsPa from "./robots-pa";

// import required modules
export default function Carrousel() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        loopFillGroupWithBlank
        breakpoints={{
          550: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          360: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="swiperPA"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <div>
          {robotsPa.map((robots, i) => (
            <SwiperSlide>
              <div className="BlockText">
                <img src={robots.picture} alt="couples" />
                <h2 key={i}> {robots.coupleName} </h2>
                <p>{robots.returnExperience}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
