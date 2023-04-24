import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TabContext } from "../TabProvider";
const Navbar = () => {
  const { handleTabChange } = useContext(TabContext) ?? {};
  const handleClick = (Tab) => {
    handleTabChange(Tab);
  };
  return (
    <div className="py-[3.5rem] rounded-[40px] bg-white px-[4rem]">
      <nav className="flex justify-between">
        <Link to="/home">
          <div className="font-semibold text-xl">Niraj Sah</div>
        </Link>
        <ul className="flex gap-[45px] active: opacity-100">
          <button onClick={() => handleClick("aboutme")}>
            <li className="menu-item menu-item-has-children current-menu-item opacity-50 hover:opacity-100">
              About Me
            </li>
          </button>
          <button onClick={() => handleClick("resume")}>
            <li className="opacity-50 hover:opacity-100">Resume</li>
          </button>
          <button onClick={() => handleClick("portfolio")}>
            <li className="opacity-50 hover:opacity-100">Portfolio</li>
          </button>
          <button onClick={() => handleClick("contact")}>
            <li className="opacity-50 hover:opacity-100 active:opacity-100">
              Contact
            </li>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
