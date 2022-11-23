import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-[3.5rem] px-[4rem]">
      <nav className="flex justify-between">
        <Link to="/portfolio">
          <div className="font-semibold text-xl">Niraj Sah</div>
        </Link>
        <ul className="flex gap-[45px] active: opacity-100">
          <Link to="/portfolio">
            <li className="menu-item menu-item-has-children current-menu-item opacity-50 hover:opacity-100">
              About Me
            </li>
          </Link>
          <Link to="/resume">
            <li className="opacity-50 hover:opacity-100">Resume</li>
          </Link>
          <Link to="/pfolio">
            <li className="opacity-50 hover:opacity-100">Portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="opacity-50 hover:opacity-100 active:opacity-100">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
