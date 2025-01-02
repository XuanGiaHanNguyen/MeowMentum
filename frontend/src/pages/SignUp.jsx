import React from "react";
import "../../src/index.css";
import { CardIcon } from "../assets/icon";
import loginbg from "../assets/loginbg.png";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {

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
        <div className=" flex-1 rounded-l-3xl flex flex-col items-center justify-center gap-2" style={{ backgroundColor: '#cce5eb' }}>
          <div className="rounded-full p-3 mb-2" style={{backgroundColor: '#fafaf7'}}>{CardIcon}</div>
          <h2 className="text-4xl font-black" style={{ color: '#6f8087' }}>Welcome Back!</h2>
          <p className="px-10 text-center">Your productivity journey is just a whisker away - just log in and lock in!</p>
          <button className="px-28 py-3 mt-3 text-white shadow-sm rounded-lg text-xl font-bold bg-[#9AC6D1] hover:bg-[#86c0cf]" onClick={() => navigate("/login")}>Sign in</button>
        </div>
          
        <div className="flex-1 rounded-r-3xl flex flex-col items-center justify-center gap-2" style={{ backgroundColor: '#e3e3e3' }}>
        <h2 className="text-4xl font-black" style={{ color: '#6b6b6b' }}>Create Account</h2>
          <form action="" className="flex flex-col gap-3 items-center justify-center mt-4">
            <textarea name="Username" id="Username" placeholder="Username" className="rounded-lg resize-none h-11 w-72 pt-2 items-center justify-center text-center"></textarea>
            <textarea name="Email" id="Email" placeholder="Email" className="rounded-lg resize-none h-11 w-72 pt-2 items-center justify-center text-center"></textarea>
            <input type="password" placeholder="Password" className="rounded-lg resize-none h-11 w-72 pt-2 items-center justify-center text-center"/>
            <button type="Submit" className=" mt-2 px-28 py-3 text-white shadow-sm rounded-lg text-xl font-bold bg-[#9AC6D1] hover:bg-[#86c0cf]">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
