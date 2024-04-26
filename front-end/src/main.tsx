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
import { CartPage } from "./components/cartPage/CartPage";
import { RootPage } from "./components/rootPage/RootPage";
import { PaymentPaymentPage } from "./components/paymentPages/PaymentPaymentPage";
import { PaymentInformationPage } from "./components/paymentPages/PaymentInformationPage";
import { PaymentLayout } from "./components/paymentPages/PaymentLayout";
import { AdminBar } from "./components/wrapper/AdminBar.";
import { KeyStatsPage } from "./components/keyStatsPage/KeyStatsPage";
import { GenerateDiscountPage } from "./components/generateDiscountPage/GenerateDiscountPage";
import { AdminAssignmentPage } from "./components/adminAssignmentPage/AdminAssignmentPage";
import { ManageAdminPage } from "./components/manageAdminPage/ManageAdminPage";
import { ItemManagmentPage } from "./components/itemManagmentPage/ItemManagmentPage";
import { СhangeProductPage } from "./components/productPage/ChangeProductPage";

const router = createBrowserRouter([
  {
    path: AppRoutes.rootRoute,
    element: <RootPage />,
  },
  {
    path: AppRoutes.payRoute,
    element: <PaymentLayout />,
    children: [
      {
        path: AppRoutes.paymentRoute,
        element: <PaymentPaymentPage />,
      },
      {
        path: AppRoutes.informationRoute,
        element: <PaymentInformationPage />,
      },
    ],
  },
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
        element: <AccountPage />,
      },
      {
        path: AppRoutes.productsRoute,
        element: <ProductsPage />,
      },
      {
        path: AppRoutes.productRoute,
        element: <ProductPage />,
      },
      {
        path: AppRoutes.cartRoute,
        element: <CartPage />,
      },
      {
        path: AppRoutes.adminRoute,
        element: <AdminBar />,
        children: [
          {
            path: AppRoutes.keyStatsRoute,
            element: <KeyStatsPage />,
          },
          {
            path: AppRoutes.adminAssignmentRoute,
            element: <AdminAssignmentPage />,
          },
          {
            path: AppRoutes.itemManagmentRoute,
            element: <ItemManagmentPage />,
          },
          {
            path: AppRoutes.discountGenerationRoute,
            element: <GenerateDiscountPage />,
          },
          {
            path: AppRoutes.manageAdminRoute,
            element: <ManageAdminPage />,
          },
          {
            path: AppRoutes.changeProductRoute,
            element: <СhangeProductPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
