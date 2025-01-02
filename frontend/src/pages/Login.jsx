import React from "react";
import "../../src/index.css";
import { UserIcon } from "../assets/icon";
import loginbg from "../assets/loginbg.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center h-screen w-screen m-0"
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Fallback for h-screen issues
        width: "100vw",  // Ensure full width
      }}
    >
      <div className="flex w-4/6 h-2/3 mt-28 mr-60 text-slate-700 rounded-3xl shadow-xl animate-up-down ">
        <div className=" flex-1 rounded-l-3xl flex flex-col items-center justify-center gap-2" style={{ backgroundColor: '#e3e3e3' }}>
          <h2 className="text-5xl font-black" style={{ color: '#6b6b6b' }}>Sign in</h2>
          <form action="" className="flex flex-col gap-3 items-center justify-center mt-4">
            <textarea name="Email" id="Email" placeholder="Email" className="rounded-lg resize-none h-11 w-72 pt-2 items-center justify-center text-center"></textarea>
            <input type="password" placeholder="Password" className="rounded-lg resize-none h-11 w-72 pt-2 items-center justify-center text-center"/>
            <button type="Submit" className=" mt-2 px-28 py-3 text-white shadow-sm rounded-lg text-xl font-bold bg-[#9AC6D1] hover:bg-[#86c0cf]">Sign in</button>
            <button className="text-sm hover:underline">Forgot your password?</button>
          </form>
        </div>
          
        <div className="flex-1 rounded-r-3xl flex flex-col items-center justify-center gap-2" style={{ backgroundColor: '#cce5eb' }}>
        <div className="rounded-full p-3 mb-2" style={{backgroundColor: '#fafaf7'}}>{UserIcon}</div>
          <h2 className="text-4xl font-black" style={{ color: '#6f8087' }}>Hello, Friend!</h2>
          <p className="px-10 text-center">Enter your personal details and start journey with us</p>
          <button className="px-28 py-3 mt-3 text-white shadow-sm rounded-lg text-xl font-bold bg-[#9AC6D1] hover:bg-[#86c0cf]" onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
