import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Calculator from "./Calculator";
import Calculator2 from "./Calculator2";

import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/Calculator2" element={<Calculator2 />} />
            <Route path="/" element={<Calculator />} />
            <Route element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
