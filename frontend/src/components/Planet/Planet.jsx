/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

function Planet({ planetName, imgPlanet, setShowModal, setIcon }) {
  const handleClick = () => {
    setIcon(imgPlanet);
    setShowModal(false);
  };
  return (
    <div>
      <div
        className="m-3 cursor-pointer hover:opacity-80"
        onClick={handleClick}
      >
        <img src={imgPlanet} alt={planetName} className=" w-20 h-20" />
        <p className="">{planetName}</p>
      </div>
    </div>
  );
}

export default Planet;
