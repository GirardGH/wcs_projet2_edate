/* eslint-disable jsx-a11y/control-has-associated-label */

import AideData from "./AideData";
import Reponses from "./ReponseAide";

export default function Aide() {
  return (
    <div>
      <div className="mt-[30px]">
        <h1 className="FAQ font-[monospace] text-6xl">Aide</h1>
      </div>
      {AideData.map((aide) => (
        <div className="AllAide mr-8 ml-8 mb-8 mt-9 ">
          <div className="allQuestions">
            <h2 className="question text-xl text-start font-[monospace]">
              {aide.question}
            </h2>
          </div>
          <div className="allReponses">
            <Reponses aideDataReponse={aide.reponse} />
          </div>
        </div>
      ))}
    </div>
  );
}
