import React from "react";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
