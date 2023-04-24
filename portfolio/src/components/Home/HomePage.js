import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import TabProvider from "../TabProvider";

const HomePage = () => {
  return (
    <div className="border shadow-4xl shadow-current w-auto bg-white mx-[6rem] my-[3rem] rounded-[40px]">
      <TabProvider>
        <Navbar />
        <Body />
      </TabProvider>
    </div>
  );
};

export default HomePage;
