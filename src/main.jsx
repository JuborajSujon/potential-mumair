import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import GeneralProvider from "./Provider/GeneralProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </HelmetProvider>
    </GeneralProvider>
  </StrictMode>
);
