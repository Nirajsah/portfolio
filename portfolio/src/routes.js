import React from "react";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./components/Navbar/ResumePage";
import PortfolioPage from "./components/Navbar/PortfolioPage";
import ContactPage from "./components/Navbar/ContactPage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
