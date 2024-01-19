import React, { useContext, useState } from 'react'
import Body from './Body'
import Navbar from './Navbar'
import TabProvider, { TabContext } from '../TabProvider'
import { HiMiniHome } from 'react-icons/hi2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAlt,
  faBriefcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const Hamburgur = () => {
  const { handleTabChange, tab } = useContext(TabContext) ?? {}
  const handleClick = (Tab) => {
    handleTabChange(Tab)
  }
  return (
    <div className="flex bg-slate-100  drop-shadow-lg w-[240px] justify-around px-3 items-center py-4 rounded-full gap-1">
      <HiMiniHome
        size={20}
        onClick={() => handleClick('aboutme')}
        className={tab === 'aboutme' ? 'text-[#007ced]' : 'text-gray-500'}
      />
      <FontAwesomeIcon
        size={20}
        onClick={() => handleClick('resume')}
        icon={faFileAlt}
        className={tab === 'resume' ? 'text-[#007ced]' : 'text-gray-500'}
      />
      <FontAwesomeIcon
        size={20}
        onClick={() => handleClick('portfolio')}
        icon={faBriefcase}
        className={tab === 'portfolio' ? 'text-[#007ced]' : 'text-gray-500'}
      />
      <FontAwesomeIcon
        size={20}
        onClick={() => handleClick('contact')}
        icon={faEnvelope}
        className={tab === 'contact' ? 'text-[#007ced]' : 'text-gray-500'}
      />
    </div>
  )
}

const HomePage = () => {
  return (
    <div className="shadow-4xl relative w-[1024] h-full flex-col flex justify-center shadow-current bg-white lg:mx-[3rem] lg:my-[3rem] lg:rounded-[40px]">
      <div className="border-[5px] top-6 left-6 rotate-12 rounded-3xl w-[180px] h-[180px] opacity-50 bg-opacity-50 fixed bg-gray-200 border-white z-[-10]"></div>
      <div className="border-[5px] left-[-100px] bottom-0 rotate-45 rounded-3xl w-[150px] h-[150px] opacity-50 bg-opacity-50 fixed bg-gray-200 border-white z-[-10]"></div>
      <div className="border-[5px] right-[100px] bottom-0 -rotate-12 rounded-3xl w-[100px] h-[100px] opacity-50 bg-opacity-50 fixed bg-gray-200 border-white z-[-10]"></div>
      <div className="border-[5px] right-[30px] top-0 -rotate-12 rounded-3xl w-[200px] h-[200px] opacity-50 bg-opacity-50 fixed bg-gray-200 border-white z-[-10]"></div>
      <TabProvider>
        <Navbar />
        <Body />
        <div className="fixed bottom-10 left-0 right-0 lg:hidden flex justify-center z-20">
          <Hamburgur />
        </div>
      </TabProvider>
    </div>
  )
}

export default HomePage
