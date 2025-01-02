import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";
import mainbg from "../assets/mainbg.png";

const MainPage = () => {

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center h-screen w-screen m-0"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Fallback for h-screen issues
        width: "100vw",  // Ensure full width
      }}
    >
      <div className=" border-2 h-screen w-screen flex">
        <div className="flex flex-col">
            <button>
                Overview
            </button>
            <button>
                Schedule
            </button>
            <button>
                To-do List
            </button>
            <button>
                Habit Rabbit
            </button>
            <button>
                Log Out
            </button>
        </div>
        <div>
            <div>Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
