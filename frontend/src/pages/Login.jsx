import React from "react";
import "../../src/index.css";
import landingpg from "../assets/landingpg.png";

const LoginPage = () => {
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
      <p>hello</p>
    </div>
  );
};

export default LoginPage;
