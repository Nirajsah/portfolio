import React from 'react'
const PortfolioPage = () => {
  return (
    <div className="lg:h-[650px] h-screen overflow-auto w-auto bg-white rounded-b-[40px]">
      <div className="flex flex-col items-start bg-gray-100 lg:flex-row border-y-gray-300 w-full md:justify-between border-b lg:border-t content-center px-[40px] py-[30px] lg:py-[3.5rem]">
        <div className="lg:pl-[4rem] font-bold text-4xl">Portfolio</div>
        <div className="text-sm lg:pr-[4rem] lg:self-start opacity-40 lg:mt-[-2rem]">
          My Works
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
