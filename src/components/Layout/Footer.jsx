// import React from "react";
// import MapEmbed from "../Section/MapEmbeed";
// import Button from "./Button";
// import { useTranslation } from "react-i18next";


// const Footer = () => {
//     const { t } = useTranslation();

//   return (






// <footer
//   style={{
//     background: "var(--color-firstChoice)",
//     color: "var(--color-fontLight)",
//   }}
//   className="py-8 px-6"
// >
//   <div className="max-w-6xl mx-auto">
//     <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr] gap-8 items-start">
//       {/* Quick Links */}
//       <div>
//         {/* <h3 className="font-semibold text-lg mb-4">Quick Links</h3> */}
//         <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>

//        <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>

// <ul className="space-y-2">
//   <li>
//     <a href="#" className="hover:text-cyan-600 transition-colors">
//       {t("footer.home")}
//     </a>
//   </li>
//   <li>
//     <a href="#" className="hover:text-cyan-600 transition-colors">
//       {t("footer.recentActivities")}
//     </a>
//   </li>
//   <li>
//     <a href="#" className="hover:text-cyan-600 transition-colors">
//       {t("footer.aboutUs")}
//     </a>
//   </li>
//   <li>
//     <a href="#" className="hover:text-cyan-600 transition-colors">
//       {t("footer.contactUs")}
//     </a>
//   </li>
// </ul>

//       </div>

//       {/* Explore & Subscription */}
//       <div>
//         <div className="mb-6">
//           <h3 className="font-semibold text-lg mb-4">EXPLORE</h3>
//           <address className="not-italic">
//             <p>Rupendehi, Butwal</p>
//             <p>9857055535, 9807209805,</p>
//             <p>assn2063@gmail.com</p>
//           </address>
//         </div>

//         <div>
//           <h3 className="font-semibold text-lg mb-4">Subscribe Us</h3>
//           <div className="flex max-w-xs ">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="px-4 py-2 border placeholder-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white bg-transparent flex-grow"
//             />
//             {/* <button
//               style={{ background: "var(--color-pprimary)" }}
//               className="cursor-pointer text-white px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity"
//             >
//               SIGN UP
//             </button> */}
//                               <Button  text={"SIGN UP"}  styling={"bg-[#00b8db] cursor-pointer hover:bg-blue-400 text-white px-3 py-1 text-sm"} />

//           </div>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="h-64 md:h-[250px] lg:h-[280px] w-full">
//         <div className="rounded-lg overflow-hidden shadow-sm h-full w-full">
//           <MapEmbed />
//         </div>
//       </div>
//     </div>

//     {/* Copyright */}
//     <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
//       <p>Powered by Ashish Social Service Nepal | 2025</p>
//       <p className="mt-1">
//         {/* Copyright Shareware Nepal. All Rights Reserved 2022. */}
//          {/* Copyright Pixpoint Solutions Pvt.Ltd All rights reserved. */}

// © 2025 Pixpoint Solutions Pvt. Ltd. All rights reserved.

//       </p>
//     </div>
//   </div>
// </footer>
//   )
// }

// export default Footer;

import React from "react";
import MapEmbed from "../Section/MapEmbeed";
import Button from "./Button";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        background: "var(--color-firstChoice)",
        color: "var(--color-fontLight)",
      }}
      className="py-8 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr] gap-8 items-start">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  {t("footer.recentActivities")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  {t("footer.contactUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Explore & Subscription */}
          <div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">{t("footer.explore")}</h3>
              <address className="not-italic">
                <p>{t("footer.addressLine1")}</p>
                <p>{t("footer.addressLine2")}</p>
                <p>{t("footer.addressLine3")}</p>
              </address>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.subscribeUs")}</h3>
              <div className="flex max-w-xs ">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 border placeholder-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white bg-transparent flex-grow"
                />
                <Button
                  text={t("footer.signUp")}
                  styling="bg-[#00b8db] cursor-pointer hover:bg-blue-400 text-white px-3 py-1 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 md:h-[250px] lg:h-[280px] w-full">
            <div className="rounded-lg overflow-hidden shadow-sm h-full w-full">
              <MapEmbed />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
          <p>{t("footer.poweredBy")}</p>
          <p className="mt-1">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






