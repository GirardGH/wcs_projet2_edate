/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import profilRobot from "../profilRobot/profilRobot";

export default function NewMatch() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={2}
      slidesPerGroup={1}
      loop={false}
      breakpoints={{
        700: {
          slidesPerView: 8,
          slidesPerGroup: 1,
        },
        500: {
          slidesPerView: 6,
          slidesPerGroup: 1,
        },
        360: {
          slidesPerView: 4,
          slidesPerGroup: 1,
        },
        150: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      }}
      className="ChatSwiper"
    >
      <div>
        {profilRobot
          .filter((robot) => robot.id >= 25)
          .map((robots) => (
            <SwiperSlide className=" ">
              <div className=" bg-[#7209B7] mb-[-50px] mt-[-30px]">
                <img
                  className="rounded-full"
                  src={robots.picture}
                  alt="couples"
                />
              </div>
            </SwiperSlide>
          ))}
      </div>
    </Swiper>
  );
}
