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


























// import React from "react";

// const OurWorkTwo = ({ title2, description2, image2 }) => {
//   return (
//     <section className="w-full bg-[#e4f9ff] px-6 py-27">
//       <div className="max-w-6xl mx-auto">
//         {/* <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-blue-800">{title2}</h2>
//           <p className="text-gray-600 mt-2 text-lg">
//             Here's what we're doing to make a difference.
//           </p>
//         </div> */}

//         <div className="flex flex-col md:flex-row items-center justify-between gap-30">
//           <div className="max-w-[400px] md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg">
//             <img
//               className="w-full  h-full object-cover"
//               src={image2}
//               alt="Work illustration"
//             />
//           </div>

//           <div className="max-w-[400px] md:w-1/2 text-gray-800 space-y-4">
//           <img className="max-w-[50px]" src="images/logolotus.png" alt="lotus logo" />
//             <h3 style={{ color: "var(--color-subHeading)" }} className="text-[44px] leading-tight pb-3 font-bold ">
//               {title2}
//             </h3>
//             <p style={{ color: "var(--color-lotusFont)" }}  className=" leading-relaxed">{description2}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurWorkTwo;













import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const OurWorkTwo = ({ title2, description2, image2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  // Detect scroll direction
  useEffect(() => {
    let lastY = window.scrollY;
    const updateDir = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastY ? "down" : "up");
      lastY = currentY;
    };
    window.addEventListener("scroll", updateDir);
    return () => window.removeEventListener("scroll", updateDir);
  }, []);

  // Trigger animation only when scrolling down
  useEffect(() => {
    if (isInView && scrollDir === "down") {
      setHasAnimated(true);
    }
  }, [isInView, scrollDir]);

  return (
    <section className="w-full bg-[#e4f9ff] px-6 py-27" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-30">

          {/* Left image */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="max-w-[400px] md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg"
          >
            <img
              className="w-full h-full object-cover"
              src={image2}
              alt="Work illustration"
            />
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="max-w-[400px] md:w-1/2 text-gray-800 space-y-4"
          >
            <img className="max-w-[50px]" src="images/logolotus.png" alt="lotus logo" />
            <h3
              style={{ color: "var(--color-subHeading)" }}
              className="text-[44px] leading-tight pb-3 font-bold"
            >
              {title2}
            </h3>
            <p
              style={{ color: "var(--color-lotusFont)" }}
              className="leading-relaxed"
            >
              {description2}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurWorkTwo;
