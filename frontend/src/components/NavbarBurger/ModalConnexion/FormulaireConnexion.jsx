export default function formulaireConnexion() {
  return (
    <div className="allFormulaireConnexion">
      <h1 className="titreModalConnexion mb-6 font-[monospace] text-3xl ">
        Connecte toi ici !{" "}
      </h1>
      <form className="formulaireConnexion flex flex-col gap-4">
        <div className="divLabelMatricule block">
          <label className="labelMatricule">
            {" "}
            Matricule :
            <input
              className="inputMatricule block ml-4 mb-6 w-[94%] mt-5"
              type="text"
              name="name"
              placeholder="R2D2"
            />
          </label>
        </div>
        <label className="inputScannPuce block">
          {" "}
          Scanne ta puce :
          <input
            className="inputMatricule ml-4 block w-[94%] mt-5 mb-6"
            type="text"
            name="name"
            placeholder="Ton code va s'afficher ici"
          />
        </label>
        <label className="LabelCaptcha w-[250px] text-sm self-center bg-slate-400 text-black">
          <input className="checkbox mr-6" type="checkbox" name="checkbox" /> Je
          ne suis pas un robot
        </label>
      </form>
    </div>
  );
}
