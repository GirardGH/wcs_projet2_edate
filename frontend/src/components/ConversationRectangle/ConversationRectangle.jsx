import { useState } from "react";
import { Link } from "react-router-dom";
import profilRobot from "../profilRobot/profilRobot";

function ConversationRectangle() {
  const [RobotData, setRobotData] = useState(profilRobot);

  return (
    <div className="overflow-y-scroll">
      <Link to="/message">
        {RobotData.filter((robot) => robot.id <= 7).map((robots) => (
          <div className="bg-white px-3 flex items-center hover:bg-slate-200 group-hoveritem:visible ... cursor-pointer">
            <div className="">
              <img
                className="h-12 w-12 rounded-full"
                src={robots.picture}
                alt=""
              />
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest max-w-9 font-semibold text-base">
                  {robots.name}
                </p>
                <div className="mr-4 hover:opacity-60 hover:rotate-45 hover:translate-y-1">
                  <button
                    type="button"
                    key={robots.id}
                    onClick={() =>
                      setRobotData(RobotData.filter((r) => r.id !== robots.id))
                    }
                  >
                    <img
                      className="w-7 h-7 group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ..."
                      src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1667739089/delete_1_fbugdn.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <p className="text-grey-200 mt-1 text-sm">{robots.description}</p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
}

export default ConversationRectangle;
