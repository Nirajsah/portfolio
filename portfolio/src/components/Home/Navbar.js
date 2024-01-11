import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TabContext } from '../TabProvider'
const Navbar = () => {
  const { handleTabChange } = useContext(TabContext) ?? {}
  const handleClick = (Tab) => {
    handleTabChange(Tab)
  }
  return (
    // py-[1rem] px-[1rem] lg:py-[3.5rem]  lg:px-[4rem]
    <div className="lg:py-[3rem] lg:px-[3rem] rounded-[40px] bg-white">
      <nav className="flex justify-between">
        <Link to="/home">
          <div className="font-semibold hidden lg:block uppercase text-3xl">
            Niraj Sah
          </div>
        </Link>
        <ul className="lg:flex hidden gap-[45px] active: opacity-100">
          <button onClick={() => handleClick('aboutme')}>
            <li className="menu-item menu-item-has-children current-menu-item opacity-50 hover:opacity-100">
              About Me
            </li>
          </button>
          <button onClick={() => handleClick('resume')}>
            <li className="opacity-50 hover:opacity-100">Resume</li>
          </button>
          <button onClick={() => handleClick('portfolio')}>
            <li className="opacity-50 hover:opacity-100">Portfolio</li>
          </button>
          <button onClick={() => handleClick('contact')}>
            <li className="opacity-50 hover:opacity-100 active:opacity-100">
              Contact
            </li>
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
