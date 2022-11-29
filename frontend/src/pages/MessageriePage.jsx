/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prettier/prettier */
import React from "react";
import HeaderMessage from "../components/HeaderMessage/HeaderMessage";
import MainChat from "../components/MainChat/MainChat";

function MessageriePage() {
  return (
    <>
      <div className="w-full h-32 bg-[#fefefe]" />

      <div className="container mx-auto mt-[-128px]">
        <div className="py-6 h-screen">
          <div className="flex border border-grey rounded shadow-lg h-full overflow-auto">
            <div className="hidden lg:flex w-1/3 border flex-col">
              <HeaderMessage />
            </div>
            <div className="w-full lg:w-2/3 border flex flex-col">
              <MainChat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageriePage;
