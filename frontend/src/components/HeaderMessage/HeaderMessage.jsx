/* eslint-disable prettier/prettier */

import React from "react";
import { Link } from "react-router-dom";
import NewMatch from "../NewMatch/NewMatch";
import ConversationRectangle from "../ConversationRectangle/ConversationRectangle";

function HeaderMessage() {
  return (
    <>
      <div className="">
        <Link to="/likedislike">
          <div className="ml-1 mb-1 flex justify-start items-center">
            <img
              className=" w-12 h-12"
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667512027/logoroselinebig_s618eb.svg"
              alt=""
            />
          </div>
        </Link>
        <img
          className="h-14 mt-[-50px]"
          src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667657100/Edate_rose_c5kji1.svg"
          alt=""
        />

        <div className="py-2 px-3 bg-[#7209B7] flex flex-row justify-between  items-center">
          <NewMatch />

          <div className="flex">
            <div className="ml-4 w-8 h-8 curxsor-pointer">
              <Link to="/message">
                <img
                  src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667742653/messages_m12n5f.png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="ml-4 opacity-80 w-6 h-6  cursor-pointer">
            <img
              className=" bg-blend-color-burn"
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667742910/more_yyib1x.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="py-2 px-2 bg-gradient-to-r from-[#3A0CA3] to-[#7209B7]">
        <input
          type="text"
          className="w-full px-2 py-2 text-sm"
          placeholder="Search or start new chat"
        />
        {/* <!-- Fenetres Messages --> */}
      </div>
      <ConversationRectangle />
    </>
  );
}

export default HeaderMessage;
