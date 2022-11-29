/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";

const date = new Date();
const hours = `${date.getHours()}:${date.getMinutes()}`;

function UserMessage({ messageUser, gifUser }) {
  return (
    <div className="flex-1 overflow-auto bg[#DAD3CC]">
      <div className="py-2 px-3">
        <div className="flex justify-end mb-2">
          <div className="rounded-2xl py-2 px-3 bg-[#f7d0ec]">
            <div>
              <img src={gifUser} alt="" />
            </div>
            <p className="text-sm mt-1">{messageUser}</p>
            <p className="text-right text-xs text-grey-dark mt-1">
              {hours.toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
