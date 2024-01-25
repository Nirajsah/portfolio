import React from 'react'
import Homepage from '../../assets/HomePage.webp'
const PortfolioPage = () => {
  return (
    <div className="lg:h-[650px] h-screen overflow-auto w-auto bg-white rounded-b-[40px]">
      <div className="flex flex-col items-start bg-gray-100 lg:flex-row border-y-gray-300 w-full md:justify-between border-b lg:border-t content-center px-[40px] py-[30px] lg:py-[3.5rem]">
        <div className="lg:pl-[4rem] font-bold text-4xl">Portfolio</div>
        <div className="text-sm lg:pr-[4rem] lg:self-start opacity-40 lg:mt-[-2rem]">
          My Works
        </div>
      </div>
      <div className="p-[20px] my-5 flex md:flex-row gap-16 flex-col w-full md:p-[2rem] h-auto lg:p-[3rem]">
        <div className="w-full max-w-[320px] hover:scale-105 transition-all duration-100 h-[220px]">
          <a href="https://coza-store-rose.vercel.app/" target="_blank">
            <img
              className="w-full object-cover rounded-xl h-full"
              src={Homepage}
              alt={Homepage}
              loading="lazy"
            />
            <div className="flex flex-col justify-center items-center mt-1">
              <h1 className="text-center">Coza Store</h1>
              <p className="text-center text-sm">An E-Commerce Store</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
