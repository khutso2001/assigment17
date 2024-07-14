import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Fact from "./pages/Fact";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: ":factId", element: <Fact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
