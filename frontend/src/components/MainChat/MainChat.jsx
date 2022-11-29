/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PretenderMessage from "../PretenderMessage/PretenderMessage";
import UserMessage from "../UserMessage/UserMessage";
import Gifs from "../GifFolder/Gifs";

function MainChat() {
  const [messageUser, setMessageUser] = useState([]);
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);
  const [enter, setEnter] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [gifUser, setGifUser] = useState([]);
  const [selectedGif, setSelectedGif] = useState();

  const toggleShowGif = () => {
    setShowGif((current) => !current);
  };

  useEffect(() => {
    if (click) {
      setMessage("");
      setClick(false);
    }
  }, [click]);

  useEffect(() => {
    if (enter) {
      setMessage("");
      setEnter(false);
    }
  }, [enter]);

  const handleChange = (e) => setMessage(e.target.value);

  const handleClick = () => {
    // 👇️ push to end of state array
    setMessageUser((current) => [...current, message]);
    setClick(true);
  };

  const enterMessage = (event) => {
    if (event.which === 13) {
      setMessageUser((current) => [...current, message]);
      setEnter(true);
    } else {
      setEnter(false);
    }
  };

  return (
    <div className="h-screen">
      {/* <!-- Header --> */}
      <div className="py-2 px-3 bg-[#c0c0c02e] flex flex-row justify-between items-center">
        <div className="w-5 h-5 ml-4">
          <Link to="/messagerie">
            <img
              className=""
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667567196/left-arrow_f80g58.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668520088/Projet-2-WCS/photo-pretendants/robot2_jlmcfl.png"
            alt=""
          />

          <h1 className="ml-4 font-semibold">name</h1>
        </div>

        <div className="flex">
          <div className="ml-4 w-7 h-7">
            <img
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667567283/video_zwxosg.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <!-- Messages --> */}

      <div className="flex-1 overflow-auto bg-white h-[75vh]">
        <div className="py-2 px-3">
          <PretenderMessage />

          {messageUser.map((element, index) => (
            <UserMessage key={index} messageUser={element} />
          ))}

          {gifUser.map((element, index) => (
            <UserMessage
              key={index}
              gifUser={element}
              setSelectedGif={setSelectedGif}
            />
          ))}
        </div>
        {showGif ? (
          <Gifs
            setGifUser={setGifUser}
            selectedGif={selectedGif}
            setSelectedGif={setSelectedGif}
            setClick={setClick}
          />
        ) : null}
      </div>

      {/* <!-- Input --> */}
      <div className="bg-grey-lighter px-4 py-4 flex items-center">
        <div>
          <img
            className=" w-10 h-10 opacity-80 fill-red-300 cursor-pointer"
            src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667513126/gif_d6ruzg.png"
            alt=""
            onClick={toggleShowGif}
          />
        </div>
        <div className="flex-1 mx-4">
          <input
            className=" resize-none outline-none w-full border rounded px-2 py-2"
            placeholder="Ecris ton message ici..."
            type="text"
            value={message}
            onChange={handleChange}
            onKeyDown={enterMessage}
          />
        </div>
        <div>
          <button onClick={handleClick} type="submit">
            <img
              className="w-8 h-8 cursor-pointer"
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667566866/send_rpnwwl.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainChat;
