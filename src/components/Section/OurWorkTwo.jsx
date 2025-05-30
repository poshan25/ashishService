// import React from "react";

// const OurWorkTwo = ({ title2, description2, image2 }) => {
//   return (
//     <div>
//       {/* // yo section chai description first image second ma dakhauna ko lagi */}
//       <section               style={{ background: "#e4f9ff" }}
//   className="w-full  px-6 py-12">
//         <div
        
//           className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
//         >
//           <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-xl">
//             <img
//               className="w-full h-full object-cover shadow-md"
//               src={image2}
//               alt="empImg"
//             />
//           </div>

//           <div className="w-full md:w-1/2 text-gray-800 space-y-4">
//             <h2
//               style={{ color: "var(--color-darkishBlue)" }}
//               className="text-3xl font-bold "
//             >
//               {title2}
//             </h2>
//             <p className="text-lg leading-relaxed">{description2} </p>
//           </div>
//         </div>

//         {/* // yo section chai image first description second ma dakhauna ko lagi */}
//       </section>
//     </div>
//   );
// };

// export default OurWorkTwo;


























import React from "react";

const OurWorkTwo = ({ title2, description2, image2 }) => {
  return (
    <section className="w-full bg-[#e4f9ff] px-6 py-27">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">{title2}</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Here's what we're doing to make a difference.
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-30">
          <div className="max-w-[400px] md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg">
            <img
              className="w-full  h-full object-cover"
              src={image2}
              alt="Work illustration"
            />
          </div>

          <div className="max-w-[400px] md:w-1/2 text-gray-800 space-y-4">
          <img className="max-w-[50px]" src="images/logolotus.png" alt="lotus logo" />
            <h3 style={{ color: "var(--color-subHeading)" }} className="text-[44px] leading-tight pb-3 font-bold ">
              {title2}
            </h3>
            <p style={{ color: "var(--color-lotusFont)" }}  className=" leading-relaxed">{description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkTwo;



































// import React from "react";

// const OurWorkTwo = ({ title2, description2, image2 }) => {
//   return (
//     <section className="w-full bg-[#eaf9fb] px-6 py-20">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
//         {/* Left: Image with shadow and glass effect */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-1">
//             <img
//               src={image2}
//               alt="Work Visual"
//               className="w-[500px] h-auto rounded-2xl object-cover"
//             />
//           </div>
//         </div>

//         {/* Right: Text content */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">{title2}</h2>
//           <p className="text-lg text-gray-600 mb-6">{description2}</p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium transition">
//             Add To Chrome
//           </button>
//           <p className="text-xs text-gray-500 mt-2">
//             Click ‘Add to Chrome’ to install. By installing, you agree to our{" "}
//             <a href="#" className="text-blue-500 underline">
//               TOS
//             </a>{" "}
//             and{" "}
//             <a href="#" className="text-blue-500 underline">
//               Privacy Policy
//             </a>.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurWorkTwo;
