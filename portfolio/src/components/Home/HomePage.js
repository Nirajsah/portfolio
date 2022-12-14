import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="border shadow-4xl shadow-current h-[800px] w-auto bg-white mx-[6rem] my-[3rem] rounded-[40px]">
      <Navbar />
      <Body />
    </div>
  );
};

export default HomePage;
