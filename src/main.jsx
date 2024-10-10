import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <h1 className="text-3xl font-bold underline font-poppins">
        Hello world!
      </h1>
    </div>
  </StrictMode>
);
