import React, { useState } from "react";

export default function modalLD() {
  const [montreModal, setMontreModal] = useState("");

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`${montreModal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center
      aria-hidden=true`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto mt-[170px]">
        <div className="relative bg-gray-300 rounded-lg shadow ">
          <div className="p-6 text-center mt-[150px] bg-slate-180">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-500">
              Vous avez un match, allez lui dire un mot !
            </h3>
            <button
              onClick={() => setMontreModal("hidden")}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Super, merci !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
