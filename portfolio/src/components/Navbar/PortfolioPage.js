import React from "react";
import Navbar from "../Home/Navbar";
const PortfolioPage = () => {
  return (
    <div className="h-[800px] w-auto bg-white mx-[6rem] my-[3rem] rounded-[40px]">
      <Navbar />
      <div className="flex border-y-gray-300 border justify-between content-center py-[3.5rem]">
        <div className="pl-[4rem] font-bold text-4xl">Portfolio</div>
        <div className="text-sm pr-[4rem] self-start opacity-40 mt-[-2rem]">
          My Works
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
