import React, { useContext } from "react";
import ContactPage from "../Navbar/ContactPage";
import PortfolioPage from "../Navbar/PortfolioPage";
import ResumePage from "../Navbar/ResumePage";
import About from "../Navbar/AboutPage";
import { TabContext } from "../TabProvider";

const Body = () => {
  const { tab } = useContext(TabContext);
  switch (tab) {
    case "contact":
      return <ContactPage />;
    case "portfolio":
      return <PortfolioPage />;
    case "resume":
      return <ResumePage />;
    default:
      return <About />;
  }
};

export default Body;
