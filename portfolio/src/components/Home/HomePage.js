import React from "react";
import { Link } from "react-router-dom";
import Body from "./Body";

const HomePage = () => {
  return (
    <div className="h-[800px] w-auto bg-white mx-[6rem] my-[3rem] rounded-[40px]">
      <nav className="flex justify-between">
        <div className="mt-[45px] ml-[60px] font-semibold text-xl ">
          Niraj Sah
        </div>
        <ul className="flex mt-[45px] mr-[60px] gap-[45px] ">
          <Link to="/about">
            <li className="menu-item menu-item-has-children current-menu-item opacity-50 hover:opacity-100">
              About Me
            </li>
          </Link>
          <Link to="/resume">
            <li className="opacity-50 hover:opacity-100">Resume</li>
          </Link>
          <Link to="/portfolio">
            <li className="opacity-50 hover:opacity-100">Portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="opacity-50 hover:opacity-100">Contact</li>
          </Link>
        </ul>
      </nav>
      <Body />
    </div>
  );
};

export default HomePage;
