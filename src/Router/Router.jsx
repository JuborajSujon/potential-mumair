import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h3>Error</h3>,
    children: [
      {
        path: "/",
        element: <h3>Home</h3>,
      },
    ],
  },
]);
