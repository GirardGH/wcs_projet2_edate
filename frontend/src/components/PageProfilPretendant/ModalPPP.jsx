/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Background from "../Background/Background";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

export default function modalPPP({
  robotName,
  robotPassion,
  robotDescription,
  robotPicture,
  robotPicture2,
  robotPicture3,
  robotDate,
  robotPlanete,
  robotTextToSpeech,
  robotMusiquePref1,
  robotMusiquePref2,
  robotMusiquePref3,
}) {
  const [showProfilPretrendant, setShowProfilPretendant] = useState("");
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = robotTextToSpeech;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`${showProfilPretrendant}  h-full absolute ml-[-90px] left-0 z-50 md:inset-0 h-modal md:h-full md:w-full justify-center items-center
      aria-hidden=true`}
    >
      <Background />
      <div className="relative max-h-full max-w-md">
        <div className="w-[150%] max-sm:w-[95%] max-sm:pl-[0] relative bg-white rounded-lg shadow">
          <div className="All bg-slate-180 ">
            <div className="w-[85%] text-left max-sm:ml-[-50px] pl-3 pr-3 pb-8">
              <Swiper
                effect="cube"
                grabCursor
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination
                loop
                modules={[EffectCube, Pagination]}
                className="SwiperPPP mt-[150px] w-[350px] "
              >
                <div className="imgCarrouselP">
                  <SwiperSlide className="picturePPP w-[50%]">
                    <img src={robotPicture} alt="robotpicture1" />
                  </SwiperSlide>
                  <SwiperSlide className="picturePPP w-[50%]">
                    <img src={robotPicture2} alt="robotpicture1" />
                  </SwiperSlide>
                  <SwiperSlide className="picturePPP w-[50%]">
                    <img src={robotPicture3} alt="robotpicture1" />
                  </SwiperSlide>
                </div>
              </Swiper>

              <h2 className="mb-5 text-3xl font-[monospace] text-center">
                {`${robotName}, ${robotDate}.`}
              </h2>
              <br />
              <div>
                <h2 className="mt-5 mb-5 text-xl  font-[serif]]">
                  <span className="underline">Planète:</span> {robotPlanete}
                </h2>
              </div>
              <div className="flex row start items-center">
                <h2 className="mt-5 mb-5 text-xl underline font-[serif]]">
                  Ecoute ma belle voix :
                </h2>
                <button onClick={() => speechHandler(msg)}>
                  <img
                    className="w-[100px]  ml-9"
                    src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668599307/Projet-2-WCS/logo/speack_ldwrp2.png"
                    alt="speack"
                  />
                </button>
              </div>
              <div>
                <h2 className="mt-5 mb-5 text-xl underline font-[serif]]">
                  {" "}
                  Mes passions :
                </h2>
                <ul className="">
                  <div className="flex space-x-4">
                    <li>{robotPassion}</li>
                  </div>
                </ul>
              </div>
              <div>
                <h2 className="mt-5 mb-5 text-xl underline font-[serif]]">
                  Description:{" "}
                </h2>
                <p>{robotDescription}</p>
              </div>

              <div>
                <h2 className="mt-5 mb-5 text-xl underline font-[serif]]">
                  Mes musiques préférées :
                </h2>
                <div className="grid grid-rows-1 grid-flow-col gap-4">
                  <img
                    className="w-[150px] "
                    src={robotMusiquePref1}
                    alt="sonpref"
                  />
                  <img
                    className="w-[150px] "
                    src={robotMusiquePref2}
                    alt="sonpref"
                  />
                  <img
                    className="w-[150px]"
                    src={robotMusiquePref3}
                    alt="sonpref"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowProfilPretendant("hidden")}
              data-modal-toggle="popup-modal"
              type="button"
              className="mb-8 text-white bg-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mt-5"
            >
              Super, merci !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
