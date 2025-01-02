import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";
import mainbg from "../assets/mainbg.png";
import logo from "../assets/logo.png";

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
      <div className=" h-screen w-screen flex">
        <div className="flex flex-col px-14 text-2xl"style={{backgroundColor: '#f0f0f0'}}>
            <div>
                <img src={logo} alt="logo" width="200" className="mt-8 mb-10"/>
            </div>
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
        <div className="flex-1">
            <div className="flex py-8 px-5 justify-between">
                <h2 className="">Dashboard</h2>
                <input type="text" placeholder="Search" className="" />
            </div>
            <div className="flex-1 h-screen" style={{backgroundColor: '#f7f7f7'}} >
                <p>Hello</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
