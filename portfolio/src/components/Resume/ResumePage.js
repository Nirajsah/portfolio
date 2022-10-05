import React from "react";
import Navbar from "../Home/Navbar";
const ResumePage = () => {
  return (
    <div className="h-[800px] w-auto bg-white mx-[6rem] my-[3rem] rounded-[40px]">
      <Navbar />
      <div className="flex border-y-gray-300 border justify-between content-center py-[3.5rem]">
        <div className="pl-[4rem] font-bold text-4xl">Resume</div>
        <div className="pr-[4rem] self-start opacity-40 mt-[-2rem]">
          6 Months of Experience
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
