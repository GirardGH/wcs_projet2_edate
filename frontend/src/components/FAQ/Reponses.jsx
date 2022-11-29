/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import fleche from "./fleche.png";

export default function Reponses({ faqReponse }) {
  const [showReponse, setShowReponse] = useState("hidden");

  const showReponseOrNot = () => {
    if (showReponse === "hidden") {
      setShowReponse("");
    }
    if (showReponse === "") {
      setShowReponse("hidden");
    }
  };

  return (
    <div>
      <div className="boutonReponse flex">
        <button onClick={showReponseOrNot} type="button" className="mr-2 flex">
          {" "}
          <img
            className="logoFleche w-8 flex-start"
            src={fleche}
            alt="fleche"
          />
        </button>
      </div>
      <div>
        <p className={`${showReponse} text-start mb-6 mt-5`}>{faqReponse}</p>
      </div>
    </div>
  );
}
