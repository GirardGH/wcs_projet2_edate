/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import { Link } from "react-router-dom";
import gif from "./monkey.gif";
import Background from "../../Background/Background";

export default function Captcha() {
  return (
    <div>
      <Background />
      <div className="allGif bg-gray-200 w-[40%] pr-6 pl-6 rounded-xl mt-[90px] pt-6">
        <div>
          <img className="GIF rounded-sm" src={gif} alt="gif" />
        </div>
        <div className="boutonExitGif mt-6 pb-5">
          <Link to="/likedislike">
            <button
              onClick
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ml-5"
            >
              Booon ... OK{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
