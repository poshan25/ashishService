// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./components/Section/Aboutus.jsx";
import Work from "./components/Section/Work.jsx";
import RecentActivities from "./components/Section/RecentActivities.jsx";
import Donate from "./components/Section/Donate.jsx";

import ContactUs from "./components/Section/ContactUs.jsx";
import Notfound from "./components/Section/Notfound.jsx";
// import Dashboard from "./components/Section/DashboardItems.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutus", element: <Aboutus /> },
  { path: "/recentactivities", element: <RecentActivities /> },
  { path: "/ourwork", element: <Work /> },
  { path: "/donate", element: <Donate /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/*", element: <Notfound /> },
  //dymanic route
  // funny name nai cha aaile ko lagi  later ka change garnu parne herne

]);


createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
);
