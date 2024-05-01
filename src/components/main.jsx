import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "/src/components/App.jsx";
import "/src/styles/index.css";
import Memoria from "./Memoria.jsx";
import Mainpage from "/src/components/Mainpage.jsx";
import FlagDetails from "./FlagDetails.jsx";
import Error from "./Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: "true",
        Component: Mainpage,
      },
      {
        path: "/flag/:name",
        element: <FlagDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Memoria>
      <RouterProvider router={router} />
    </Memoria>
  </React.StrictMode>
);
