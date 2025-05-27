// import React from 'react';

// const ContactPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
//       {/* Page Heading */}
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
//         Contact Us
//       </h1>

//       {/* Contact Card */}
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
//         <div className="p-8 md:p-10">
//           <div className="space-y-6">
//             {/* Location */}
//             <div className="flex items-start">
//               <div className="flex-shrink-0 pt-1">
//                 <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <div className="ml-4">
//                 <h3 className="text-lg font-semibold text-gray-800">Rupendehi, Butwal</h3>
//                 <div className="mt-2 space-y-1 text-gray-600">
//                   <p>9857055535, 9807209805</p>
//                   <p>assn2063@gmail.com</p>
//                   <p>PO Box 95 Rupendehi</p>
//                   <p>Postal code 32900 - NEPAL</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default ContactPage;








import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      {/* Page Heading */}
      <h1 style={{ color: "var(--color-orange)" }} className="text-4xl md:text-5xl font-bold  mb-12 text-center">
        Contact Us
      </h1>

      {/* Contact Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-48 object-cover md:h-full md:w-64"
              src="images/butwal.webp"
              alt="Office Location"
            />
          </div>

          {/* Info Section */}
          <div className="p-8 md:p-10">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <svg
                    className="h-6 w-6 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Rupendehi, Butwal
                  </h3>
                  <div className="mt-2 space-y-1 text-gray-600">
                    <p>9857055535, 9807209805</p>
                    <p>assn2063@gmail.com</p>
                    <p>PO Box 95 Rupendehi</p>
                    <p>Postal code 32900 - NEPAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
