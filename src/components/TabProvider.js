import React, { createContext, useContext, useState } from 'react'
export const TabContext = createContext(null)
const TabProvider = (props) => {
  const [tab, setTab] = useState('aboutme')
  const handleTabChange = (currentTab) => {
    setTab(currentTab)
  }
  const contextValue = {
    tab,
    handleTabChange,
  }
  return (
    <TabContext.Provider value={contextValue}>
      {props.children}
    </TabContext.Provider>
  )
}

export default TabProvider

const useTab = () => {
  return useContext(TabContext)
}
