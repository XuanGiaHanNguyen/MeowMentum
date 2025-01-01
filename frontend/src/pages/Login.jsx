import React from "react";
import "../../src/index.css";
import Login from "../assets/Login.png"

const LoginPage = () => {
  return (
    <div
      className="flex flex-col items-center h-screen w-screen m-0"
      style={{
        backgroundImage: `url(${Login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Fallback for h-screen issues
        width: "100vw",  // Ensure full width
      }}
    >
      <div className="flex w-3/5 h-4/6 mt-28 mr-60 text-slate-700">
        <div className="border-2 flex-1 rounded-l-3xl flex flex-col items-center justify-center gap-2" style={{ backgroundColor: '#ededed' }}>
          <h2 className="text-4xl font-black ">Sign in</h2>
          <p className="text-center px-14">One step away from making your day purr-fectly productive!</p>
          <form action="" className="flex flex-col gap-4 items-center justify-center mt-3">
            <textarea name="Email" id="Email" placeholder="Email" className="rounded-lg resize-none h-10 w-72 pt-2 items-center justify-center text-center"></textarea>
            <input type="password" placeholder="Password" className="rounded-lg resize-none h-10 w-72 pt-2 items-center justify-center text-center"/>
            <button className="text-sm hover:underline">Forgot your password?</button>
            <button type="Submit" className="py-3 px-24 rounded-xl text-yellow-700 font-semibold bg-[#ffcd87] hover:bg-[#fcc06d]">Sign in</button>
          </form>
        </div>
          
        <div className="border-2 flex-1">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <button>Sign up</button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
