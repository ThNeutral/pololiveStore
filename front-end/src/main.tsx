import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./components/common/wrapper";
import "./scss/index.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
