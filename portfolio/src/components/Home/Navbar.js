import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-[3.5rem]">
      <nav className="flex justify-between">
        <div className="ml-[60px] font-semibold text-xl ">Niraj Sah</div>
        <ul className="flex mr-[60px] gap-[45px] ">
          <Link to="/">
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
    </div>
  );
};

export default Navbar;
