/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import dataPlanet from "../../data/dataPlanet";
import Planet from "../Planet/Planet";

function Modal({ setShowModal, setIcon }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black bg-opacity-90 outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-900 rounded-t">
              <h3 className="text-3xl font-semibold">Choisir une planète</h3>
              <img
                src="https://raw.githubusercontent.com/GirardGH/Projet_2_WCS/0c86be67501b5e8fd8a277768a3cd09504f9a0d9/assets/croix.svg"
                alt="croix de fermeture"
                className="w-7 h-7 bg-white rounded-3xl hover:rotate-45 hover:opacity-90 cursor-pointer ease-linear transition-all duration-150"
                onClick={() => setShowModal(false)}
              />
            </div>
            {/* body */}
            <div className="relative p-6 flex flex-wrap">
              {dataPlanet.map((element, index) => (
                <Planet
                  key={index}
                  planetName={element.planetName}
                  imgPlanet={element.imgPlanet}
                  setShowModal={setShowModal}
                  setIcon={setIcon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-white" />
    </>
  );
}

export default Modal;
