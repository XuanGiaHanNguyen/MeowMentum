import React from "react";
import "../../src/index.css";
import landingpg from "../assets/landingpg.png";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col items-center h-screen w-screen m-0"
      style={{
        backgroundImage: `url(${landingpg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Fallback for h-screen issues
        width: "100vw",  // Ensure full width
      }}
    >
      <div className="mt-24 flex flex-col items-center ">
        <h1 className="text-8xl font-black text-slate-600" style={{ color: '#747474' }}>
          Meow-Mentum
        </h1>
        <p className="text-2xl text-center mx-40 mt-3 text-zinc-700">
          Turning small steps into big leaps - track your habits, boost your productivity, and make everyday a purr-fect success!
        </p>
      </div>
      <button className="mt-10 px-40 py-7 text-white shadow-sm rounded-xl text-2xl font-bold bg-[#9AC6D1] animate-up-down hover:bg-[#86c0cf]">Join Now</button>
    </div>
  );
};

export default LandingPage;
