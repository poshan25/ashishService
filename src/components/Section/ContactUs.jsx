// import React from "react";
// import MapEmbed from "./MapEmbeed";

// const ContactPage = () => {
//   return (
//     <div>
//       <hr className="h-px bg-gray-300 border-0" />
//       <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
//         {/* Page Heading */}
//        <div className="mb-12 text-center relative">
//   <h1
//     style={{ color: "var(--color-pprimary)" }}
//     className="text-4xl md:text-5xl font-bold inline-block relative"
//   >
//     Contact Us
//   </h1>

//   {/* Underline */}
//   <div
//     style={{ backgroundColor: "var(--color-ssecondary)" }}
//     className="h-1 w-70 mt-2 mx-auto"
//   ></div>
// </div>

//         {/* Contact Card */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="md:flex md:items-stretch">
//             {/* Contact Info Section */}
//             {/* <div className="md:w-1/2 p-8 md:p-10">
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 pt-1">
//                     <svg
//                       className="h-6 w-6 text-cyan-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       Rupendehi, Butwal
//                     </h3>
//                     <div className="space-y-1 text-gray-600">
//                       <p className="hover:text-cyan-600 transition-colors">9857055535, 9807209805</p>
//                       <p className="hover:text-cyan-600 transition-colors">assn2063@gmail.com</p>
//                       <p>PO Box 95 Rupendehi</p>
//                       <p>Postal code 32900 - NEPAL</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//             <div className="md:w-1/2 p-8 md:p-10 flex items-center justify-center">
//               <div className="space-y-6 w-full max-w-xs">
//                 <div className="flex items-start justify-center w-full">
//   <div className="ml-4 text-center">
//     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//       <i className="fa fa-map-marker mr-2 text-cyan-500" aria-hidden="true"></i>
//       Rupendehi, Butwal
//     </h3>
//     <ul className="space-y-2 text-gray-600">
//       <li className="hover:text-cyan-600 transition-colors">
//         <i className="fa fa-phone mr-2 text-cyan-500" aria-hidden="true"></i>
//         9857055535, 9807209805
//       </li>
//       <li className="hover:text-cyan-600 transition-colors">
//         <i className="fa fa-envelope mr-2 text-cyan-500" aria-hidden="true"></i>
//         assn2063@gmail.com
//       </li>
//       <li>
//         <i className="fa fa-archive mr-2 text-cyan-500" aria-hidden="true"></i>
//         PO Box 95 Rupendehi
//       </li>
//       <li>
//         <i className="fa fa-paper-plane mr-2 text-cyan-500" aria-hidden="true"></i>
//         Postal code 32900 - NEPAL
//       </li>
//     </ul>
//   </div>
// </div>

//               </div>
//             </div>

//             {/* img */}
//             <div>
//               <img src="images/cartoonImg.png" alt="" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React from "react";
import MapEmbed from "./MapEmbeed";
import Footer from "../Layout/Footer";
import ContactForm from "./FormContactUs";
import HeroLikeSection from "./HeroLikeSection";

const ContactPage = () => {
  return (
    <div className="pt-20">
      <HeroLikeSection
        src="images/heroLikeContactUsImg.jpg"
        alt="Hero Image"
        className="h-screen "
        text="CONTACT US"
      />
      <div className="min-h-screen mb-[-70px] flex flex-col items-start px-8 mt py-12 ">
        {/* Title */}
        <div className="w-full max-w-4xl mx-auto  mb-8">
          <h2 
          className="text-4xl  tracking-widest font-bold  text-orange-500 mb-8 "
          >
            CONTACT <span className="text-orange-500">US</span>
          </h2>

          {/* Form */}
          <form className="w-full mx-auto max-w-5xl space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm">First Name</label>
                <input
                  type="text"
                  className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Last Name</label>
                <input
                  type="text"
                  className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Email *</label>
              <input
                type="email"
                className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Message</label>
              <textarea
                rows="4"
                className="border rounded-2xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="text-white rounded-full py-2 px-6 w-full hover:opacity-80 transition"
              style={{ backgroundColor: "#24a69a" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
