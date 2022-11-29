import React, { useState } from "react";
import Modale from "./Modale";
import Modal from "../Modal/Modal";
import BoutonModal from "../BoutonModal/BoutonModal";
import Background from "../Background/Background";
import Nav from "../NavbarBurger/Nav";

function ContactPage() {
  const [showModale, setShowModale] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <Nav />
      </div>
      <>
        <div>
          <Background />
        </div>
        <form>
          <div className="pt-6 pb-6 rounded-md flex-column content-center mt-40 text-black text-lg h-500 w-3/4 border solid white bg-auto bg-white">
            <div className="pb-1">Rentre ton matricule:</div>
            <label htmlFor="matricule">
              <input
                type="textarea"
                required
                pattern="[A-Z][0-9]"
                placeholder="ex: R2D2"
                className="bg-slate-200 rounded-md w-3/4"
              />
            </label>
            <div className="pt-6 pb-1">Scanne ta puce:</div>
            <label htmlFor="puce">
              <input
                type="textarea"
                placeholder="ex: 10289754"
                className="bg-slate-200 rounded-md w-3/4"
              />
            </label>
            <div className="pt-6 pb-1">Choisis ta planète:</div>
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
            <div className="ml-[4rem] max-[700px]:ml-[-4rem]">
              <BoutonModal />
            </div>
            <label>
              <div className="pt-6 pb-1">Saisis ton message:</div>
              <input
                type="textarea"
                className="bg-slate-200 rounded-md w-3/4 h-[200px]"
                required
                pattern="[A-Z][0-9]"
                placeholder="ex: Bonjour je n'ai pas de bras, comment faire pour utiliser l'application?"
              />
            </label>
            <div className="mt-5 pt-10">
              <button
                type="button"
                onClick={setShowModale}
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-lg inline-flex items-center px-6 py-1.5 text-center mr-2"
              >
                Envoyer
              </button>
            </div>
            {showModale ? <Modale setShowModale={setShowModale} /> : null}
          </div>
        </form>
      </>
    </>
  );
}
export default ContactPage;
