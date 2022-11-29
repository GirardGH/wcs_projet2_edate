/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import Background from "../Background/Background";

export default function PagePerso() {
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text =
      "Quelle est la différence entre un robot et du ketchup ? Aucune les deux sont aux tomates couloustachtach";
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="AllProfilPerso justify-center flex flex-start">
      <Background />
      <div className="All2 flex flex-col w-[80%] max-[500px]:min-w-full bg-gray-200 m-10 rounded-lg">
        <div className="flex flex-row  justify-end mr-4 mt-2">
          <Link to="/message">
            {" "}
            <img
              src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667742653/messages_m12n5f.png"
              alt=""
              className="ml-4 w-8 h-8 flex flex-end cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-row space-x-11">
          <div className="PhotoNous flex flex-row justify-center max-[957px]:mr-[100px] max-[500px]:ml-[-150px] max-[957px]:ml-[-100px] mt-6 max-[500px]:min-w-full ">
            <img
              className="rounded-full w-[35%] mr-[-300px] max-[996px]:w-[35%]"
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668611600/Projet-2-WCS/photoNous/IMG_221116_160623_k8qnkl.jpg"
              alt="photoNous"
            />
          </div>
          <div className="mb-6 flex flex-row justify-center mr-[200px] max-[996px]:mr-[10%] max-[996px]:w-[10%]">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            />
            <div className="flex">
              <div className="flex justify-center items-center mt-10 max-[737px]:w-2">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-row justify-center items-center w-[100px] h-[100px] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="mb-1 w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mb-2 text-[10px] text-gray-500 dark:text-gray-400 max-[737px]:text-[5px]">
                      <span className="font-semibold">
                        Clic pour ajouter une photo
                      </span>
                    </p>
                    <p className="text-[8px] text-gray-500 dark:text-gray-400 max-[737px]:text-[5px]">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="divOurName flex flex-row mt-11 ml-8">
          <h2 className="OurName rounded-xl mr-8 text-2xl max-[815px]:text-lg max-[620px]:text-sm  max-[620px]:text-sm font-[monospace] ">
            Ton nom:
          </h2>
          <p className="OurNameValue max-[815px]:text-sm max-[620px]:text-xs text-lg  font-[monospace] ">
            STEGICHA
          </p>
        </div>
        <div className="divOurDate flex flex-row mt-11 ml-8">
          <h2 className="OurDate rounded-xl mr-8 text-2xl max-[815px]:text-lg max-[620px]:text-sm font-[monospace]">
            Date de fabrication :{" "}
          </h2>
          <p className="OurDateValue text-lg max-[815px]:text-sm max-[620px]:text-xs font-[monospace]">
            10 aout 1993
          </p>
        </div>
        <div className="flex-start">
          <h2 className="OurName rounded-xl mr-8 text-2xl max-[815px]:text-lg max-[620px]:text-sm  max-[620px]:text-sm font-[monospace] flex flex-start ml-8 mt-11">
            Tes passions :
          </h2>
          <ul className="OurPassions text-lg max-[815px]:text-sm max-[620px]:text-xs mr-4 max-[815px]:text-sm max-[620px]:text-xs list-disc font-[monospace] max-[598px]:list-none max-[598px]:space-x-3 flex space-x-16 ml-14 mt-4">
            <li className="font-[monospace]">Soulever de la fonte</li>
            <li className="font-[monospace]">Gratter de la corde</li>
            <li className="font-[monospace] mr-4">Titiller le déclencheur</li>
          </ul>
        </div>
        <div className="divOurDescription mt-11 ml-8 text-lg max-[815px]:text-sm max-[620px]:text-xs flex flex-start flex-col">
          <h2 className="OurDescription flex flex-start rounded-xl mr-8 text-2xl  max-[620px]:text-sm max-[815px]:text-lg max-[620px]:text-sm font-[monospace]">
            Ta description :
          </h2>
          <div className="flex flex-start">
            <p className="mt-4 mr-7 flex flex-start font-[monospace]">
              Je suis beau gosse. Mes amis disent de moi que je roule des
              mécaniques. J'ai du bon matos, j'écoute de la bonne musique comme
              tu peux le voir en dessous, couloucoucou la chanson du zizi sous
              le sunlight toussatoussa cousine. Chui la pour trouver ma machine
              wesh.
            </p>
          </div>
        </div>
        <div className="divOurDate mt-11 ml-8 text-lg max-[815px]:text-sm max-[620px]:text-xs flex flex-start flex-row">
          <h2 className="OurDescription flex flex-start rounded-xl mr-8 max-[473px]:mr-[-150px] text-2xl  max-[620px]:text-sm max-[815px]:text-lg max-[620px]:text-sm font-[monospace]">
            Ecoute ma belle voix :
          </h2>
          <button type="button" onClick={() => speechHandler(msg)}>
            <img
              className="w-[100px] ml-9 max-[473px]:mt-[30px]"
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668599307/Projet-2-WCS/logo/speack_ldwrp2.png"
              alt="speack"
            />
          </button>
        </div>
        <div className="flex flex-start ml-8 mt-11">
          <h2 className="OurName rounded-xl mr-8 text-2xl max-[815px]:text-lg max-[620px]:text-sm max-[815px]:text-lg max-[620px]:text-sm font-[monospace]">
            Tes musiques préférée :
          </h2>
        </div>
        <div className="OurMusiquePref flex flex-row justify-between mr-11 ml-11 mt-8 mb-16">
          <div className="FirstOurMusiquePref flex w-[20%] max-[734px]:w-[30%]">
            <img
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668612474/Projet-2-WCS/Musiques/Capture_d_e%CC%81cran_2022-11-16_a%CC%80_16.25.31_gzbxwb.png"
              alt=""
            />
          </div>
          <div className="SecondOurMusiquePref w-[20%] max-[734px]:w-[30%]">
            <img
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668612474/Projet-2-WCS/Musiques/Capture_d_e%CC%81cran_2022-11-16_a%CC%80_16.26.15_g4ruv8.png"
              alt=""
            />
          </div>
          <div className="ThirdOurMusiquePref w-[20%] max-[734px]:w-[30%]">
            <img
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1668612474/Projet-2-WCS/Musiques/Capture_d_e%CC%81cran_2022-11-16_a%CC%80_16.25.50_bcdyvq.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Link to="/likedislike">
            <button
              type="submit"
              className="text-white max-[500px]:text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 mr-6 ml-6 mb-8 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[50%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Revenir à la page Like Dislike
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
