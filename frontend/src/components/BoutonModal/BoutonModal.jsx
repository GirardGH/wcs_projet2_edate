/* eslint-disable react/button-has-type */
import { useState } from "react";
import Modal from "../Modal/Modal";
import dataPlanet from "../../data/dataPlanet";

function BoutonModal() {
  const [showModal, setShowModal] = useState(false);
  const [icon, setIcon] = useState(dataPlanet[1].imgPlanet);
  return (
    <>
      <div className="navbar__planet ml-[50px] w-[150px]">
        <button
          className="bg-transparent outline-none focus:outline-none cursor-auto"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <img
            src={icon}
            alt="planet"
            className="w-8 h-8 md:mr-52 md:w-9 md:h-9 max-sm:w-[60px] max-sm:h-[50px] hover:opacity-60 cursor-pointer"
          />
        </button>
      </div>
      {showModal ? (
        <Modal setShowModal={setShowModal} setIcon={setIcon} />
      ) : null}
    </>
  );
}

export default BoutonModal;
