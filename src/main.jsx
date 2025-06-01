// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./components/Section/Aboutus.jsx";
// import Work from "./components/Section/Work.jsx";
import RecentActivities from "./components/Section/RecentActivities.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Donate from "./components/Section/Donate.jsx";
import './i18n.js'

import ContactUs from "./components/Section/ContactUs.jsx";
import Notfound from "./components/Section/Notfound.jsx";
import AccountPage from "./components/pages/Account.jsx";
import OurWork from "./components/pages/OurWork.jsx";
import Career from "./components/Section/Career.jsx";
import Volunteer from "./components/Section/Volunteer.jsx";
// import OurWork from "./components/pages/OurWork.jsx";
// import Dashboard from "./components/Section/DashboardItems.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       // { path: "", element: <Home /> }, 
//   { path: "aboutus", element: <Aboutus /> },
//  { path: "/recentactivities", element: <RecentActivities /> },
//   { path: "/ourwork", element: < OurWork/> },
//   { path: "/donate", element: <Donate /> },
//   { path: "/contact-us", element: <ContactUs /> },
//   { path: "/*", element: <Notfound /> },
//     { path: "/account", element: <AccountPage /> },
//     ]
//   }
//   // { path: "/", element: <App /> },
//   // { path: "/aboutus", element: <Aboutus /> },
//   // { path: "/recentactivities", element: <RecentActivities /> },
//   // { path: "/ourwork", element: < OurWork/> },
//   // { path: "/donate", element: <Donate /> },
//   // { path: "/contact-us", element: <ContactUs /> },
//   // { path: "/*", element: <Notfound /> },
//   //   { path: "/account", element: <AccountPage /> },

//   //dymanic route
//   // funny name nai cha aaile ko lagi  later ka change garnu parne herne

// ]);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // layout holds Navbar/Footer + <Outlet />
    children: [
      { path: "", element: <App /> }, // ✅ this will show at "/"
      { path: "aboutus", element: <Aboutus /> },
      { path: "recentactivities", element: <RecentActivities /> },
      { path: "career", element: <Career /> },
      { path: "ourwork", element: <OurWork /> },
      { path: "donate", element: <Donate /> },
      { path: "volunteer", element: <Volunteer /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "account", element: <AccountPage /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
