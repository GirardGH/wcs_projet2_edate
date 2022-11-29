import React from "react";
import { Link } from "react-router-dom";
import logoInsta from "../../assets/logos_rs/logo_insta.png";
import logoTwitter from "../../assets/logos_rs/logo_twitter.png";
import logoYoutube from "../../assets/logos_rs/logo_youtube.jpg";
import wildLogo from "../../assets/wild_logo/wild_logo.png";
import logoFacebook from "../../assets/logos_rs/logo_facebook.png";

function Footer() {
  return (
    <div className="flex justify-start pr-8 relative pl-8 pt-[70px] bg-white text-xl w-[100%] max-sm:flex flex-col">
      <div className="flex row justify-around pb-[50px] max-[600px]:flex-column text-lg">
        <Link to="/mentionslegales" className="navbar_link">
          <div className="flex max-sm:pl-0 hover:text-blue-600 hover:text-[17px] max-sm:text-[12px] flex-row pl-8 text-sm text-black mr-2.5 ml-2.5 no-underline">
            Mentions légales
          </div>
        </Link>
        <Link to="/aide">
          {" "}
          <div className="flex max-sm:pl-0 row hover:text-blue-600 hover:text-[17px] max-sm:text-[12px] text-sm pl-8 text-black mr-2.5 ml-2.5 no-underline">
            Aide
          </div>
        </Link>
        <div className="flex row max-sm:text-[12px] max-sm:pl-0 text-sm pl-8 text-black mr-2.5 ml-2.5 no-underline flex-col">
          Réseaux sociaux
          <div className="flex flex-row w-12 max-sm:w-9 mt-2 h-12 max-sm:pl-3 max-sm:grid max-sm:grid-row-2 max-sm:grid-cols-2 max-sm:mt-1">
            <img
              className="logo_rs_1 w-5 h-5 ml-2 max-w-[120px] max-sm:mt-[3px] max-sm:ml-[-5px]"
              src={logoFacebook}
              alt="Logo Facebook"
            />
            <img
              className="logo_rs_2 w-5 h-5 ml-2 max-sm:mt-1 max-sm:ml-3 max-w-[120px]"
              src={logoInsta}
              alt="Logo Instagram"
            />
            <img
              className="logo_rs_3 max-sm:mt-[9px] w-5 h-5 ml-2 max-w-[120px] max-sm:ml-[-4px]"
              src={logoTwitter}
              alt="Logo Twitter"
            />
            <img
              className="logo_rs_4 w-7 h-7 ml-1 mt-[-3px] max-sm:mt-[6px] max-sm:ml-[9px] max-w-[120px]"
              src={logoYoutube}
              alt="Logo Youtube"
            />
          </div>
        </div>
        <div className="flex max-sm:pl-0 flex-row pl-8 text-sm  text-black mr-2.5 ml-2.5 no-underline">
          <div className="flex flex-column gird flex-col max-sm:text-xs items-start">
            <Link to="/FAQ">
              <div className="hover:text-blue-600 hover:text-[17px]">FAQ</div>
            </Link>
            <Link to="/contactpage">
              <div className="hover:text-blue-600 hover:text-[17px] mt-5">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-solid border-[1px] border-black" />
      <div className="pt-6 pr-7 pl-7 pb-6 text-[16px] max-sm:text-[15px]">
        Hé, tu es célibataire? Tu as cherché depuis des jours, des mois, des
        années le robot qui pourrait peut être, potentiellement partager ta vie
        (ou juste ta nuit)? Ne cherche plus, tu es au bon endroit. Sur E-date tu
        vas pouvoir voir tous les robots dispo de ta planète et des planètes aux
        alentours, afin de discuter et de, pourquoi pas, commencer une belle
        histoire.
      </div>
      <div className="border-solid border-[1px] border-black" />
      <div className="pt-6 pb-6 max-[600px]:flex-col">
        <div className="flex flex-row justify-around">
          <div>
            <div>
              <img
                className="flex flex-row h-9"
                src={wildLogo}
                alt="Logo Wild Code School"
              />
            </div>
          </div>
          <div className="flex space-x-1 text-sm flex-row justify-around pb-[-70px] max-sm:text-xs max-sm:">
            <div className="pl-2 pr-2">Charline</div>
            <div className="pl-2 pr-2">Ghislain</div>
            <div className="pl-2 pr-2">Stéphanie</div>
            <div className="pl-2 pr-2">Elodie</div>
          </div>
          <div className="pl-[30px] pr-[-50px] text-sm max-sm:text-xs">
            ©2022
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
