import React from 'react'
import Gojo from '../Home/gojo.jpg'
const About = () => {
  return (
    <div className="flex justify-center lg:mx-[6rem] rounded-[40px] w-[auto] h-[650px]">
      <div className="flex my-[1.5rem] w-full justify-center gap-4 items-center flex-col md:flex-row lg:my-[3rem]">
        {/* <div>
          <img
            className="border-[10px] border-[1rem] mt-[1rem] drop-shadow-2xl border-white rounded-full lg:ml-[6rem] w-[72%] h-full max-w-[330px] max-h-[330px]"
            src={Gojo}
            alt="Profile"
          />
        </div> */}
        <img
          className="border-[7px] md:border-[10px] drop-shadow-2xl border-white rounded-full w-[80%] sm:w-[280px] sm:h-[280px] max-w-[300px] max-h-[300px]"
          src={Gojo}
          alt="Profile"
        />
        <div className="items-center lg:items-start p-3 gap-3 flex flex-col content-start">
          <div className="opacity-30 mb-[-15px]">Full-Stack Web Developer</div>
          <div className="font-bold text-[50px]">Niraj Sah</div>
          <p className="opacity-50 text-center md:text-start text-pretty capitalize lg:pr-[40px] lg:mr-[40px]">
            studing writing learning reading.
          </p>
          <div className="flex mt-[1rem] gap-2">
            <button className="duration-300 hover:scale-105 ease-in-out px-3 md:px-7 md:py-2 py-2 hover:bg-[#007ced] hover:text-cyan-50 drop-shodow-lg rounded-full text-sm border-2 border-[#007ced]">
              Download CV
            </button>
            <button className="duration-300 hover:scale-105 ease-in-out border-2 border-[#d5d5d5] drop-shadow-lg hover:bg-[#d5d5d5] px-5 md:px-7 text-sm py-2 rounded-full">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
