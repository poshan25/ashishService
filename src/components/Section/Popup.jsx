


// without local storage


import { useState, useEffect } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after component mounts
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // Small delay to prevent flash
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/30 flex items-start justify-center pt-20 md:pt-28 overflow-y-auto">
      {/* Overlay that covers entire screen */}
      <div 
        className="fixed inset-0" 
        onClick={handleClose} // Click outside to close
      />
      
      {/* Popup container positioned slightly down */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 my-8 z-[1100]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-200 text-3xl z-10"
        >
          ✕
        </button>

        {/* Content */}
        <img
          src="/images/popupImg.jpg"
          alt="Popup"
          className="w-full h-auto rounded-t-xl"
        />

        <div className="p-5 text-gray-700 text-center">
          <p className="text-lg">Thanks for visiting! 😊</p>
          <p>You can scroll the page now!</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;





// //with local storage

// import React, { useState, useEffect } from 'react';

// const Work = () => {
//   const [showComponent, setShowComponent] = useState(true);

//   useEffect(() => {
//     // Check localStorage when component mounts
//     const hasBeenShown = localStorage.getItem('workComponentShown');
//     if (hasBeenShown) {
//       setShowComponent(false);
//     } else {
//       // Mark as shown in localStorage
//       localStorage.setItem('workComponentShown', 'true');
//     }
//   }, []);

//   if (!showComponent) return null;

//   return (
//     <section className="max-w-6xl mx-auto bg-white grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
//       {/* Text Content */}
//       <div className="order-2 md:order-1 space-y-6 p-4 md:p-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           National Survivor Study
//         </h2>
//         <p className="text-lg text-gray-600 leading-relaxed">
//           The National Survivor Study is a scientifically rigorous research
//           project developed in full partnership with survivors of human
//           trafficking to gain insights that we can use to push for real and
//           impactful change.
//         </p>
//         <a
//           href="https://polarisproject.org/national-survivor-study/"
//           className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
//         >
//           Learn More
//         </a>
//       </div>

//       {/* Image */}
//       <div className="order-1 md:order-2">
//         <img
//           src="https://polarisproject.org/wp-content/uploads/2021/02/NSS-blog-image.jpeg"
//           alt="National Survivor Study"
//           className="w-full h-auto rounded-lg shadow-md"
//         />
//       </div>
//     </section>
//   );
// };

// export default Work;