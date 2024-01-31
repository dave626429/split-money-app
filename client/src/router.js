import React from "react";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    Component: App,
  },
]);

export default router;
