import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormulaireConnexion from "./FormulaireConnexion";

export default function ModalConnexion() {
  const [montreModal, setMontreModal] = useState("");

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`${montreModal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center
      aria-hidden=true`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto max-[600px]:mr-[10%] max-[600px]:w-[90%] max-[600px]:pr-[30px]">
        <div className="relative bg-black opacity-90 rounded-lg shadow w-[120%]">
          <div className="p-6 text-center mt-[150px] bg-slate-180">
            <h3 className="mb-5 text-lg font-normal text-gray-400 dark:text-gray-400">
              <FormulaireConnexion />
            </h3>
            <Link to="/captcha">
              <button
                onClick={() => setMontreModal("hidden")}
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Let's go !
              </button>
            </Link>
            <button
              onClick={() => setMontreModal("hidden")}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ml-5"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
