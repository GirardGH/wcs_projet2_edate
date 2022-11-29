/* eslint-disable prettier/prettier */
import React from "react";

const date = new Date();
const hours = `${date.getHours()}:${date.getMinutes()}`;

function PretenderMessage() {
  return (
    <div className="flex mb-2">
      <img
        className=" w-10 rounded-full mb-auto"
        src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668520088/Projet-2-WCS/photo-pretendants/robot2_jlmcfl.png"
        alt="fsfsd"
      />

      <div className="rounded-2xl ml-3 py-2 px-3 bg-[#F2F2F2]">
        <p className="text-sm mt-1">Salut tu connais un mec sympa ?</p>
        <p className="text-right text-xs text-grey-dark mt-1">
          {hours.toString()}
        </p>
      </div>
    </div>
  );
}

export default PretenderMessage;
