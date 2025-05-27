// import React from 'react';

// const Myth = () => {
//   return (
//     <div className="relative w-full min-h-[500px]  py-12">
//       {/* Background Image */}
//       <img
//         src="images/handImage.png"
//         alt="img"
//         className="absolute inset-0 w-full h-full object-cover z-[-2]"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-[-1]" />

//       {/* <p className='text-xl font-bold text-gray-100 '>Our <span className='text-orange-500'>Work</span></p> */}

// <p className='text-[40px] font-bold text-gray-100  mb-[50px] text-center'>
//   Some <span className='text-orange-500'>Myths</span>
//   <div className='mt-[-40px]'>______________</div>
// </p>

//       {/* Content */}
//       <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center">
//         {/* Three Containers - now properly centered */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
//           <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
//             {/* <h3 className="text-xl  font-semibold mb-2">Myth</h3> */}
//             <h3 className="text-xl font-semibold mb-2 text-center">Myth</h3>

//             <p className="text-sm text-center">Human trafficking is always or usually a violent crime.</p>

//           </div>

//           <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
//             <h3 className="text-xl font-semibold text-center mb-2">Myth</h3>
//             <p className="text-sm text-center">Human trafficking involves commercial sex.</p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
//             <h3 className="text-xl font-semibold text-center mb-2">Myth</h3>
//             <p className="text-sm text-center">Traffickers target victims they don't know.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Myth;

import React from "react";
import { useRef, useState } from "react";
import WhyUs from "./WhyUs";

const Myth = () => {
  return (
    <div className="relative w-full min-h-[500px] py-12">
      {/* Background Image */}
      <img
        src="images/whyus.jpg"
        alt="img"
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      <div style={{ color: "var(--color-subHeading)" }} className="text-[40px] font-bold text-gray-100 mb-[50px] text-center">
        WHY <span style={{ color: "var(--color-orange)" }}>US</span>
        <div style={{ color: "var(--color-littleBlue)" }} className="mt-[-40px] ">______________</div>
      </div>

      {/* Content */}
      <div className="container   mx-auto max-w-6xl px-6 h-full flex flex-col items-center justify-center">
        {/* Three Containers */}
        <div className="grid font-bold grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <WhyUs numbers={"1000+"} info={"Counseling and Information Sharing at Nepal-India Border"} learnMore={"Learn More"}/>
          <WhyUs numbers={"500+"} info={"Trafficked Victims Rescued"} learnMore={"Learn More"}/>
          <WhyUs numbers={"2500+"} info={"Girls Who Attended Safe Home & Training Centers."} learnMore={"Learn More"}/>

          {/* <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl text-white text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-15  mb-2">
              1000+
            </h3>
            <p className="text-lg text-gray-800">
              Counseling and Information Sharing at Nepal-India Border
            </p>
            <button className="border rounded-full p-2 mt-10 bg-gray-500">
              LEARN MORE
            </button>
          </div>

          <div className="bg-white/80  backdrop-blur-sm p-6 rounded-xl text-white text-center">
            <h3 className="text-4xl text-gray-800 mb-15 font-bold mb-2">
              500+
            </h3>
            <p className="text-lg text-gray-800">Trafficked Victims Rescued</p>
            <button className="border rounded-full p-2 bg-gray-600 mt-10">
              LEARN MORE
            </button>
          </div>

          <div className="bg-white/90  backdrop-blur-lg p-6 rounded-xl text-white text-center">
            <h3 className="text-4xl text-gray-800 mb-15 font-bold mb-2">
              2500+
            </h3>
            <p className="text-lg text-gray-800">
              Girls Who Attended Safe Home & Training Centers.
            </p>
            <button className="border rounded-full bg-gray-700 p-2 mt-10">
              LEARN MORE
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Myth;
