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
import { useNavigate } from "react-router-dom";
import Button from "../Layout/Button";

const WhyUs = ({ numbers, info, text, background }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/aboutus");
  };

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

        {/* <button onClick={handleClick}
            style={{
              background: "var(--color-pprimary)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            className="relative px-8 py-4 text-white font-bold rounded-lg cursor-pointer
                      transform transition-all duration-300
                      hover:scale-105 hover:shadow-lg
                      active:scale-95 active:shadow-inner
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
                      min-w-[200px] text-center"
          >
            <span className="relative z-10">
              Donate Now
              </span>
            <span className="absolute inset-0 overflow-hidden rounded-lg">
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 
                              opacity-0 hover:opacity-100 transition-opacity duration-300
                              -translate-x-full group-hover:translate-x-full"></span>
            </span>
          </button>  */}
          

        <Button onClick={handleClick} background={"white"} text={"Learn More"} style={"border-2 cursor-pointer border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white rounded-full p-2 mt-10 transition-all duration-300"}/>
        {/* <button onClick={handleClick}
          className="border-2 cursor-pointer border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white rounded-full p-2 mt-10 transition-all duration-300"
        >
          learn more
        </button> */}
      </div>
    </>
  );
};

export default WhyUs;
