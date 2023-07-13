import React from "react";
import Login from "./Login";

const Signin = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#000000] h-screen w-2/5 text-6xl flex items-center justify-center font-bold text-white">
        Board.
      </div>
      <div className="h-screen w-3/5 flex flex-col justify-evenly items-center bg-[#F5F5F5]">
        <Login />
      </div>
    </div>
  );
};

export default Signin;
