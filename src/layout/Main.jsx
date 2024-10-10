import React from "react";
import { Outlet } from "react-router-dom";
import ThemeController from "../components/ThemeController";

const Main = () => {
  return (
    <div className="font-poppins dark:bg-[#1e1e1e]">
      <div className="max-w-[1420px] mx-auto relative">
        <h3>Navbar</h3>
        <div className="min-h-[calc(100vh-110px)] overflow-x-hidden">
          <Outlet />
          <ThemeController />
        </div>
        <h3>Footer</h3>
      </div>
    </div>
  );
};

export default Main;
