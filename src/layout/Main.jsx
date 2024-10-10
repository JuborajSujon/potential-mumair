import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-poppins max-w-[1420px] mx-auto">
      <h3>Navbar</h3>
      <div className="dark:bg-slate-800 min-h-[calc(100vh-110px)] overflow-x-hidden">
        <Outlet />
        <h2>ThemeController</h2>
      </div>
      <h3>Footer</h3>
    </div>
  );
};

export default Main;
