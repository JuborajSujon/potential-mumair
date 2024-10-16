import React from "react";
import { Outlet } from "react-router-dom";
import ThemeController from "../components/ThemeController";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="font-poppins dark:bg-[#1e1e1e]">
      <div className="max-w-[1420px] mx-auto relative">
        <Navbar />
        <div className="min-h-[calc(100vh-110px)] overflow-x-hidden">
          <Outlet />
        </div>
        <Footer />
      </div>

      <ThemeController />
    </div>
  );
};

export default Main;
