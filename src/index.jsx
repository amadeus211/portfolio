import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TitleIcon from "../src/images/portfolio.png";

import "./App.css";

import HomePage from "./components/HomePage";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => (
  <div className="flex flex-col min-h-screen w-full bg-gray">
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <link rel="icon" type="image/x-icon" href={TitleIcon} />
        </Helmet>
        <AppLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>Home page</title>
            </Helmet>
            <HomePage />
          </>
        ),
      },
      {
        path: "projects",
        element: (
          <>
            <Helmet>
              <title>Projects</title>
            </Helmet>
            <Projects />
          </>
        ),
      },
      {
        path: "contacts",
        element: (
          <>
            <Helmet>
              <title>Contacts</title>
            </Helmet>
            <Contacts />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
