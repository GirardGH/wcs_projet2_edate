/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";

function ButtonCreateAccount() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-black text-white text-[5rem] mt-[20rem] italic font-serif max-sm:text-[2rem] max-md:text-[4rem]">
        Trouve ta machine
      </h1>

      <Link to="/creation">
        <button
          type="button"
          className="mt-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium font-semibold rounded-full text-xl px-10 py-2.5 text-center mr-2 mb-2"
        >
          Créer un compte
        </button>
      </Link>
    </div>
  );
}

export default ButtonCreateAccount;
