import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper";
import "./scss/index.scss";
import { HomePage } from "./components/homePage/HomePage";
import AppRoutes from "./helpers/routes";
import LoginPage from "./components/authPages/LoginPage";
import { RegisterPage } from "./components/authPages/RegisterPage";
import AccountPage from "./components/accountPage/AccountPage";
import ProductsPage from "./components/productsPage/ProductsPage";
import { ProductPage } from "./components/productPage/ProductPage";

const router = createBrowserRouter([
  {
    path: AppRoutes.homeRoute,
    element: <Wrapper />,
    children: [
      {
        path: AppRoutes.homeRoute,
        element: <HomePage />,
      },
      {
        path: AppRoutes.loginRoute,
        element: <LoginPage />,
      },
      {
        path: AppRoutes.registerRoute,
        element: <RegisterPage />,
      },
      {
        path: AppRoutes.accountRoute,
        element: <AccountPage />
      },
      {
        path: AppRoutes.productsRoute,
        element: <ProductsPage />
      }, 
      {
        path: AppRoutes.productRoute,
        element: <ProductPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
