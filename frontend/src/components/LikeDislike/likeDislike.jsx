/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilRobot from "../profilRobot/profilRobot";
import ModalLD from "./modalLD";
import ModalPPP from "../PageProfilPretendant/ModalPPP";
import Background from "../Background/Background";
import logoLike from "./like.webp";
import logoDislike from "./dislike.webp";
import logoReturn from "./return.webp";

export default function LikeDislikePage() {
  const [translate, setTranslate] = useState(0);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [countProfil, setCountProfil] = useState(0);
  const [showProfil, setShowProfil] = useState(false);
  const [changeId, setChangeId] = useState(0);

  const randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  useEffect(() => {
    if (count === 5) {
      setCount(0);
      setShowModal(true);
    }
  }, [count]);

  const match = () => {
    setCount(count + 1);
    setChangeId(changeId + 1);

    if (count === randomNumber) {
      setShowModal(false);
    }
    setTranslate(translate - 250);
  };

  const dislikeRobot = () => {
    setChangeId(changeId + 1);
    setTranslate(translate - 250);
  };

  const goBack = () => {
    setChangeId(changeId - 1);
    setTranslate(translate + 250);
  };

  useEffect(() => {
    if (countProfil === 1) {
      setShowProfil(true);
      setCountProfil(0);
    }
  }, [countProfil]);

  return (
    <>
      <Background />{" "}
      <div className="flex flex-row max-[500px]:mr-[70px] max-[740px]:mr-[40px]">
        {" "}
        <div className="LogoProfil w-[40px] max-[500px]:min-w-[40px] mt-5 ml-[85%] mb-8 h-8 cursor-pointer">
          <Link to="/profilperso">
            {" "}
            <img
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668608400/Projet-2-WCS/logo/Pngtree_user_avatar_login_interface_abstract_6796241_iysugs.png"
              alt="logoprofil"
            />{" "}
          </Link>
        </div>
        <Link to="/message">
          {" "}
          <div className="LogoMessage space-x-6  mt-6 ml-[85%] mb-8 w-8 h-8 cursor-pointer">
            {" "}
            <img
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667742653/messages_m12n5f.png"
              alt=""
            />{" "}
          </div>
        </Link>
      </div>
      <div className="w-[43%] bg-white bg-opacity-30 pb-1 pt-1 mt-[70px] max-[500px]:mt-[px] rounded-lg max-md:w-[60%] max-sm:w-[90%] max-sm:mb-[50px]">
        <h2 className="titleLikeDislike text-4xl mt-[50px] mb-[50px] font-[monospace]">
          A toi de jouer
        </h2>
        <div className="photoLikeDislike mt-90 w-[250px] flex overflow-x-hidden">
          {profilRobot.map((robots) => (
            <>
              <div
                className="photoPretendants flex-row"
                style={{ translate: `${translate}px` }}
              >
                <img
                  className="pictures max-w-none w-[250px] h-[250px] rounded-3xl "
                  src={robots.picture}
                  alt="robotPretendants"
                />
              </div>
              <div className="mt-[260px] absolute ml-[80px] font-ligth">
                <button
                  className="seeProfil border-solid border-2 pl-1 pb-1 pr-1 pt-1 border-black-100 rounded mt-6"
                  onClick={() => {
                    setCountProfil(countProfil + 1);
                    if (countProfil === 0) {
                      setShowProfil(false);
                    }
                  }}
                >
                  Voir le profil
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="buttons mt-[100px] mb-[30px] ">
          <button
            className="like h-[100px] w-[100px]"
            onClick={match}
            label="ok"
          >
            <img src={logoLike} alt="like" />
          </button>
          <button
            className="dislike h-[100px] w-[100px]"
            onClick={dislikeRobot}
          >
            <img src={logoDislike} alt="dislike" />
          </button>
          <button className="return h-[100px] w-[100px]" onClick={goBack}>
            <img src={logoReturn} alt="return" />
          </button>
        </div>
        {showProfil ? (
          <ModalPPP
            setShowProfil={setShowProfil}
            robotPicture={profilRobot[changeId].picture}
            robotPicture2={profilRobot[changeId].picture2}
            robotPicture3={profilRobot[changeId].picture3}
            robotName={profilRobot[changeId].name}
            robotPassion={profilRobot[changeId].passion}
            robotDescription={profilRobot[changeId].description}
            robotDate={profilRobot[changeId].date}
            robotPlanete={profilRobot[changeId].planete}
            robotTextToSpeech={profilRobot[changeId].textToSpeech}
            robotMusiquePref1={profilRobot[changeId].musiquepref1}
            robotMusiquePref2={profilRobot[changeId].musiquepref2}
            robotMusiquePref3={profilRobot[changeId].musiquepref3}
          />
        ) : null}
        {showModal ? <ModalLD setShowModal={setShowModal} /> : null}
      </div>
    </>
  );
}
