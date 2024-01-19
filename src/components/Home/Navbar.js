import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TabContext } from '../TabProvider'
const Navbar = () => {
  const { handleTabChange, tab } = useContext(TabContext) ?? {}
  const handleClick = (Tab) => {
    handleTabChange(Tab)
  }
  return (
    <div className="lg:py-[3rem] lg:px-[3rem] rounded-[40px] bg-white">
      <nav className="flex justify-between">
        <Link to="/home">
          <div className="font-semibold hidden gap-2 lg:flex items-center text-3xl">
            <span className="w-[50px] h-[50px] flex justify-center items-center text-2xl font-black rounded-full bg-[#007ced] text-white">
              N
            </span>
            <div className="space-x-1">
              <span className="text-2xl font-bold">Niraj</span>
              <span className="text-thin text-2xl">Sah</span>
            </div>
          </div>
        </Link>
        <ul className="lg:flex hidden gap-[45px] active: opacity-100">
          <button onClick={() => handleClick('aboutme')}>
            <li className={tab === 'aboutme' ? 'opacity-100' : 'text-gray-500'}>
              About Me
            </li>
          </button>
          <button onClick={() => handleClick('resume')}>
            <li className={tab === 'resume' ? 'opacity-100' : 'text-gray-500'}>
              Resume
            </li>
          </button>
          <button onClick={() => handleClick('portfolio')}>
            <li
              className={tab === 'portfolio' ? 'opacity-100' : 'text-gray-500'}
            >
              Portfolio
            </li>
          </button>
          <button onClick={() => handleClick('contact')}>
            <li className={tab === 'contact' ? 'opacity-100' : 'text-gray-500'}>
              Contact
            </li>
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
