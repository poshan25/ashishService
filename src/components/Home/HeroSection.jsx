// import React from "react";

import Button from "../Layout/Button";

// const HeroSection = () => {
//   return (
//     <div>
//       <div className=" relative     h-screen mx-auto px-6 py-20 text-center">
//         <div className="absolute inset-0 bg-black/30 z-[-1]" />

// <div className="">
//    <img
//           src="images/hero4.png"
//           alt="heroImg"
//           className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
//         />
//    <img
//           className="absolute  w-full left-0 right-0   "
//           src="images/copytear.png"
//           alt="divider"
//         />
// </div>

//         <div className="absolute top-0 left-0 w-full h-full bg-black-transparent bg-opacity-10 z-[-1]" />

//         <div className="mt-10">
//           <div className="flex flex-wrap gap-4 justify-center mb-8"></div>

//           {/* <hr className="border-t-2 border-gray-300 my-8 w-1/4 mx-auto" /> */}

//           {/* <h2 className="text-lg font-bold text-gray-100 mb-6">
//             A CAMPAGAIN TO END HUMAN TRAFFICING
//           </h2> */}

//           <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-100 mb-4 uppercase tracking-wide">
//             A CAMPAIGN TO END HUMAN TRAFFICKING
//           </h2>

//           <div className="max-w-4xl mx-auto text-center">
//             {/* <h3 className="text-[88px] tracking-wide leading-tight font-bold text-gray-100 mb-6">
//               ASHISH SOCIAL SERVICE NEPAL
//             </h3> */}

//             <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight font-bold text-gray-100 mb-6">
//               ASHISH SOCIAL SERVICE NEPAL
//             </h3>

//             <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
//               Survivors should not have to carry the burden of criminal records
//               stemming from their exploitation. Support the Trafficking
//               Survivors Relief Act.
//             </p>
//             <button className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
//               TAKE ACTION NOW
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default HeroSection;

const HeroSection = () => {
  return (
    <div className="relative h-screen mx-auto px-6 py-20 text-center ">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      <img
        src="images/newHeroImage.jpeg"
        alt="heroImg"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Bottom divider anchored to container */}
      <img
        className="absolute bottom-0 left-0 w-full z-10"
        src="images/copytear.png"
        alt="divider"
      />

      {/* Content container */}
      <div className="relative mx-auto h-full flex flex-col justify-center items-center z-20 max-w-[1300px]">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-100 mb-4 uppercase tracking-wide">
          {/* A CAMPAIGN TO <span className="shadow-lg">END</span> HUMAN TRAFFICKING */}
          A CAMPAIGN TO <span className="md:text-2xl">END</span> HUMAN
          TRAFFICKING
          {/* A CAMPAIGN TO <span className="text-red-600 text-5xl font-extrabold tracking-wide drop-shadow-lg bg-white px-3 py-1 rounded-md">END</span> HUMAN TRAFFICKING */}
        </h2>

        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight font-bold text-gray-100 mb-6">
          ASHISH SOCIAL SERVICE NEPAL
        </h3>

        <p className="text-gray-100 mb-8 max-w-2xl mx-auto px-4">
          Survivors should not have to carry the burden of criminal records
          stemming from their exploitation. Support the Trafficking Survivors
          Relief Act.
        </p>

<Button text={"TAKE ACTION NOW"} style={"bg-[#00b8db]  cursor-pointer text-white px-8 py-3 rounded-full  transition-all text-lg"}/>
        {/* <button
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-first)")
          }
          style={{ backgroundColor: "var(--color-first)" }}
          className="cursor-pointer text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg"
        >
          TAKE ACTION NOW
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
