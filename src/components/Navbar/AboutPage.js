import React from 'react'
import Niraj from '../../assets/nirajsah.webp'
import { TabContext } from '../TabProvider'
const About = () => {
  const { handleTabChange } = React.useContext(TabContext) ?? {}
  const handleClick = (Tab) => {
    handleTabChange(Tab)
  }
  const handleDownload = () => {
    const resumeUrl =
      'https://drive.google.com/drive/folders/1OOlI1EoMqSb0ertAGEtrttZEOxgNQX88?usp=drive_link'

    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Niraj_Sah_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="flex justify-center overflow-auto h-screen lg:mx-[6rem] rounded-[40px] w-auto lg:h-[650px]">
      <div className="flex my-[1.5rem] md:justify-between mt-[50px] md:mt-0 px-[20px] lg:h-[400px] max-w-[840px] gap-4 items-center w-full flex-col md:flex-row lg:my-[3rem]">
        <div className="border-[7px] flex flex-none object-cover md:border-[10px] lg:border-[18px] drop-shadow-2xl border-white rounded-full w-[280px] md:w-[300px] lg:w-[340px] lg:h-[340px]">
          <img
            className="w-full rounded-full h-full object-cover"
            src={Niraj}
            loading="lazy"
            alt={Niraj}
          />
        </div>
        <div className="items-start p-3 gap-3 flex flex-col content-start">
          <div className="opacity-30 mb-[-15px]">Full-Stack Web Developer</div>
          <div className="font-bold text-[32px] md:text-[50px]">Niraj Sah</div>
          <p className="opacity-50 p-1 text-sm md:text-md leading-5 md:text-start capitalize ">
            Hello! I'm Niraj Sah, a 21-year-old developer set to graduate in
            June 2024. I bring a year of hands-on experience and am currently
            immersed in the world of web applications. Additionally, I am
            actively exploring the realms of Neural Networks and Machine
            Learning.
          </p>
          <div className="flex flex-col md:flex-row mt-[1rem] gap-2">
            <button
              onClick={handleDownload}
              className="duration-300 font-semibold hover:scale-105 ease-in-out px-3 md:px-7 md:py-2 py-2 hover:bg-[#007ced] hover:text-cyan-50 drop-shodow-lg rounded-full text-sm border-2 border-[#007ced]"
            >
              Download CV
            </button>
            <button
              onClick={() => handleClick('contact')}
              className="duration-300 font-semibold hover:scale-105 ease-in-out border-2 border-[#d5d5d5] drop-shadow-lg hover:bg-[#d5d5d5] px-5 md:px-7 text-sm py-2 rounded-full"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
