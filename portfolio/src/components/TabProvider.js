import React, { createContext, useState } from "react";
export const TabContext = createContext(null);
const TabProvider = (props) => {
  const [tab, setTab] = useState("");
  const handleTabChange = (currentTab) => {
    setTab(currentTab);
  };
  const contextValue = {
    tab,
    handleTabChange,
  };
  return (
    <TabContext.Provider value={contextValue}>
      {props.children}
    </TabContext.Provider>
  );
};

export default TabProvider;
