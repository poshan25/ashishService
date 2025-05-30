
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

const ContactPage = () => {
  return (
    <div className="pt-20">
      <hr className="h-px bg-gray-300 border-0" />
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Page Heading */}
        <div className="mb-12 text-center relative">
          <h1
            style={{ color: "var(--color-title)" }}
            className="text-4xl md:text-5xl font-bold inline-block relative"
          >
            Contact Us
          </h1>
          <div
            style={{ backgroundColor: "var(--color-titleUnderline)" }}
            className="h-1 w-70 mt-2 mx-auto"
          ></div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex md:items-stretch">
            {/* Contact Info Section */}
            <div className="md:w-1/2 p-8 md:p-10 flex items-center justify-center">
              <div className="space-y-6 w-full max-w-xs">
                <div className="flex items-start justify-center w-full">
                  <div className="ml-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      <i className="fa fa-map-marker mr-2 text-cyan-500" aria-hidden="true"></i>
                      Rupendehi, Butwal
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {/* ... keep existing list items ... */}
                      
 <li className="hover:text-cyan-600 transition-colors">
        <i className="fa fa-phone mr-2 text-cyan-500" aria-hidden="true"></i>
        9857055535, 9807209805
      </li>
      <li className="hover:text-cyan-600 transition-colors">
        <i className="fa fa-envelope mr-2 text-cyan-500" aria-hidden="true"></i>
        assn2063@gmail.com
      </li>
      <li>
        <i className="fa fa-archive mr-2 text-cyan-500" aria-hidden="true"></i>
        PO Box 95 Rupendehi
      </li>
      <li>
        <i className="fa fa-paper-plane mr-2 text-cyan-500" aria-hidden="true"></i>
        Postal code 32900 - NEPAL
      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Modified */}
            <div className="md:w-1/2 relative overflow-hidden">
              <img 
                src="images/cartoonImg.png" 
                alt="Contact illustration"
                className="w-full h-full object-cover object-center"
                style={{ 
                  maxWidth: '100%',
                  maxHeight: '500px',
                  padding: '1.5rem',
                  aspectRatio: '1/1'
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
