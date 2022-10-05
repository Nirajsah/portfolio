import React from "react";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Navbar/Portfolio";
import Contact from "./components/Navbar/Contact";
import ResumePage from "./components/Resume/ResumePage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
