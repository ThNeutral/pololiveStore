import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper";
import "./scss/index.scss";
import { HomePage } from "./components/homePage/HomePage";
import { homeRoute, loginRoute, registerRoute } from "./helpers/routes";
import LoginPage from "./components/authPages/LoginPage";
import { RegisterPage } from "./components/authPages/RegisterPage";

const router = createBrowserRouter([
  {
    path: homeRoute,
    element: <Wrapper />,
    children: [
      {
        path: homeRoute,
        element: <HomePage />,
      },
      {
        path: loginRoute,
        element: <LoginPage />,
      },
      {
        path: registerRoute,
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
