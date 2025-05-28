// import React from "react";

// const WhyUs = ({ numbers, info, learnMore }) => {
//   return (
//     <>
//       <div
//         style={{ background: "var(--color-nneutral)" }}
//         className=" backdrop-blur-sm p-6 rounded-xl text-white text-center"
//       >
//         <h3
//           style={{ color: "var(--color-nneutralTwo)" }}
//           className="text-3xl font-bold  mb-8 mt-4  "
//         >
//           {numbers}
//          <span className="flex justify-center mt-2">
//   <img src="images/orangeLine.png" alt="orangeLine" />
// </span>

//         </h3>
//         <p style={{ color: "var(--color-nneutralTwo)" }} className="text-lg ">
//           {info}
//         </p>
//         {/* <button
//           style={{ background: "var(--color-ssecondary)" }}
//           className="border cursor-pointer hover:opacity-80 border-blue-400  rounded-full p-2 mt-10 "
//         >
//           {learnMore}
//         </button> */}
//         <button
//   className="border-2 cursor-pointer border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white rounded-full p-2 mt-10 transition-all duration-300"
// >
//   {learnMore}
// </button>

//       </div>
//     </>
//   );
// };

// export default WhyUs;

import React from "react";

const WhyUs = ({ numbers, info, learnMore }) => {
  return (
    <>
      <div
        style={{ background: "var(--color-nneutral)" }}
        className="backdrop-blur-sm p-6 rounded-xl text-white text-center transform transition duration-400 hover:scale-110 hover:shadow-lg"
      >
        <h3
          style={{ color: "var(--color-nneutralTwo)" }}
          className="text-3xl font-bold mb-8 mt-4"
        >
          {numbers}
          <span className="flex justify-center mt-2">
            <img src="images/orangeLine.png" alt="orangeLine" />
          </span>
        </h3>
        <p style={{ color: "var(--color-nneutralTwo)" }} className="text-lg">
          {info}
        </p>
        <button
          className="border-2 cursor-pointer border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white rounded-full p-2 mt-10 transition-all duration-300"
        >
          {learnMore}
        </button>
      </div>
    </>
  );
};

export default WhyUs;
