import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";
import mainbg from "../assets/mainbg.png";
import logo from "../assets/logo.png";
import { OverviewIcon, ScheduleIcon, TodoIcon, HabitIcon, SettingsIcon, LogOutIcon, SearchIcon, userIcon  } from "../assets/icon";

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
      }}
    >
      <div className="h-screen w-screen flex">
        {/* Sidebar */}
        <div
          className="flex flex-col px-10 text-xl"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <div>
            <img src={logo} alt="logo" width="170" className="mt-8 mb-10" />
          </div>
          <div className="flex flex-col gap-6 h-full">
            <button className="text-left flex flex-row font-semibold text-gray-500">
              &nbsp;{OverviewIcon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overview
            </button>
            <button className="text-left flex flex-row font-semibold text-gray-500">
              &nbsp;{ScheduleIcon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schedule
            </button>
            <button className="text-left flex flex-row font-semibold text-gray-500">
              &nbsp;{TodoIcon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To-do List
            </button>
            <button className="text-left flex flex-row font-semibold text-gray-500">
              &nbsp;{HabitIcon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Habit Rabbit
            </button>
            <button className="text-left flex flex-row font-semibold text-gray-500">
              &nbsp;{SettingsIcon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings
            </button>
            <button className="text-left flex flex-row mt-auto mb-10 font-semibold text-gray-500">
              &nbsp;{LogOutIcon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="py-5 px-5">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl" style={{ color: "#666666" }}>Dashboard</h2>
              <div className="relative ml-80"> 
                <input
                type="text"
                placeholder="Search"
                className="rounded-2xl h-10 w-72 bg-gray-100 pl-10 pr-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Search"
                />
                <div>{SearchIcon}</div>
              </div>
              <div>
                <div className="rounded-full p-2 mb-2 mr-5" style={{backgroundColor: '#c7e6ed'}}>{userIcon}</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className="flex-1 p-4 bg-gray-100 flex-start"
          >
              <div className=" h-full grid grid-rows-3 grid-cols-3">
                <div className=" rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
                <div className=" rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
                <div className=" row-span-2 rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
                <div className=" rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
                <div className=" rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
                <div className=" col-span-2 rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
                <div className=" rounded-xl m-2" style={{backgroundColor: '#c7e6ed'}}></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
