/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Navigation } from "swiper";
import profilRobot from "../../profilRobot/profilRobot";

export default function carrouselPagePretendants() {
  return (
    <Swiper
      className="w-[320px] h-[320px] mt-[100px]"
      effect="cube"
      grabCursor
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectCube, Navigation]}
      navigation
      loop
    >
      {profilRobot.map((robots, id) => (
        <>
          <SwiperSlide className="bg-cover bg-center block">
            <img className="block w-[100%]" src={robots.picture} alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="block w-[100%]" src={robots.pictures} alt="photo" />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
