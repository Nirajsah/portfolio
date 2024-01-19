import React from 'react'
import Body from './Body'
import Navbar from './Navbar'
import TabProvider from '../TabProvider'

const HomePage = () => {
  return (
    <div className="border shadow-4xl w-auto h-full flex-col flex justify-center shadow-current bg-white mx-[1rem] my-[1rem] lg:mx-[6rem] lg:my-[3rem] rounded-[16px] lg:rounded-[40px]">
      <TabProvider>
        <Navbar />
        <Body />
      </TabProvider>
    </div>
  )
}

export default HomePage
