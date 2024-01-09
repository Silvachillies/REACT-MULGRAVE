import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./About.jsx";
import Watches from "./Watches.jsx";
import ContactPage from "./Contact.jsx";
import Cart from "./Cart.jsx";
import CartProvider from "./Cart.jsx";
import Homepage from "./Homepage.jsx";
import { PRODUCTS } from "./Products.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { element } from "prop-types";
import { Contact, Loader2Icon } from "lucide-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "homepage",
    element: <Homepage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "watches",
    element: <Watches />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "cart",
    element: <CartProvider />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
