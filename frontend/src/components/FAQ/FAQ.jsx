/* eslint-disable jsx-a11y/control-has-associated-label */

import Nav from "../NavbarBurger/Nav";
import FoireAuxQuestions from "./FAQData";
import Reponses from "./Reponses";

export default function FAQ() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="mt-[130px]">
        <h1 className="FAQ font-[monospace] text-6xl">FAQ</h1>
      </div>
      {FoireAuxQuestions.map((faq) => (
        <div className="AllFaq mr-8 ml-8 mb-8 mt-9 ">
          <div className="allQuestions">
            <h2 className="question text-xl text-start font-[monospace]">
              {faq.question}
            </h2>
          </div>
          <div className="allReponses">
            <Reponses faqReponse={faq.reponse} />
          </div>
        </div>
      ))}
    </div>
  );
}
