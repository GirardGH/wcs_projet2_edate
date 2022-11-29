import React from "react";
import Background from "../components/Background/Background";
import Aide from "../components/Aide/Aide";
import Nav from "../components/NavbarBurger/Nav";

function HelpPage() {
  return (
    <div>
      <Nav />
      <div className="pl-11 pr-11 pt-1 mt-[200px] bg-slate-300 mr-10 ml-10 rounded-lg">
        <Background />
        <div>
          <Aide />
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
