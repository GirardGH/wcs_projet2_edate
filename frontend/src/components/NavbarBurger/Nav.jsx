import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import BoutonModal from "../BoutonModal/BoutonModal";
import "./Nav.css";
import ModalConnexion from "./ModalConnexion/ModalConnexion";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 1) {
      setCount(0);
      setShowModal(true);
    }
  }, [count]);

  const connexion = () => {
    setCount(count + 1);

    if (count === 0) {
      setShowModal(false);
    }
  };

  return (
    <div className="allNavBar">
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <Link to="/">
          <div className="navbargi__logo mt-[0.2rem] ml-[0.5rem] flex justify-around items-center">
            <div className="flex justify-start">
              <img
                className="navbargi__img max-[720px]: w-12 md:w-14 mr-5"
                src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667512027/logoroselinebig_s618eb.svg"
                alt="logo Edate"
              />

              <img
                className="w-28 h-15 pr-20 md:w-44 mi-[320px]: w-44"
                src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667657100/Edate_rose_c5kji1.svg"
                alt="Edate"
              />
            </div>
          </div>
        </Link>

        <ul className="navbar_links">
          <li className="navbar_item">
            <Link to="/aide" className="navbar_link">
              Aide
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="/mentionslegales" className="navbar_link">
              Mentions légales
            </Link>
          </li>
          <li>
            <div className="boutonModal">
              <BoutonModal />
            </div>
          </li>
          <li className="navbar_item">
            <button
              type="button"
              className="connexion_button"
              onClick={connexion}
            >
              Connexion
            </button>
          </li>
        </ul>
        <button
          type="button"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
      </nav>
      {showModal ? <ModalConnexion setShowModal={setShowModal} /> : null}
    </div>
  );
}
export default Nav;
