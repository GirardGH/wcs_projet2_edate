import React from "react";

function Logo() {
  return (
    <div>
      <div className="navbar__logo pl-4 mt-auto mb-auto flex items-center">
        <img
          className="navbar__img max-[720px]: w-8 md:w-14"
          src="https://raw.githubusercontent.com/GirardGH/Projet_2_WCS/434819736532052355426c6e37d3c816242cb84d/assets/logoroselinebig.svg"
          alt="logo Edate"
        />
        <img
          className="w-28 md:w-44"
          src=" https://raw.githubusercontent.com/GirardGH/Projet_2_WCS/3908eba02077d1c2c5fc47db312b4c663390e71b/assets/Edate%20blanc.svg"
          alt="Edate"
        />
      </div>
    </div>
  );
}

export default Logo;
