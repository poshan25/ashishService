// import React from "react";

// const OurWorkOne = ({ title1, description1, image1 }) => {
//   return (
//     <div>

//       <section className="w-full px-6 py-27">
//         <div className="max-w-6xl mx-auto">

//           <div className="flex flex-col md:flex-row items-center justify-between gap-30">

//             <div className="max-w-[400px] md:w-1/2 text-gray-800 space-y-4">
//               <img
//                 className="max-w-[50px]"
//                 src="images/logolotus.png"
//                 alt="lotus logo"
//               />
//               <h3
//                 style={{ color: "var(--color-subHeading)" }}
//                 className="text-[46px] pb-3 font-bold "
//               >
//                 {title1}
//               </h3>
//               <p
//                 style={{ color: "var(--color-lotusFont)" }}
//                 className="text-[17px] leading-relaxed"
//               >
//                 {description1}
//               </p>
//             </div>
//              <div className="max-w-[400px] md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg">
//               <img
//                 className="w-full h-full object-cover"
//                 src={image1}
//                 alt="Work illustration"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurWorkOne;

// import React from "react";
// import { motion } from "framer-motion";

// const OurWorkOne = ({ title1, description1, image1 }) => {
//   return (
//     <section className="w-full px-6 py-27">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-30">

//           {/* Text from left */}
//           <motion.div
//             initial={{ x: -150, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1.2 }}
//             className="max-w-[400px] md:w-1/2 text-gray-800 space-y-4"
//           >
//             <img className="max-w-[50px]" src="images/logolotus.png" alt="lotus logo" />
//             <h3 style={{ color: "var(--color-subHeading)" }} className="text-[46px] pb-3 font-bold">
//               {title1}
//             </h3>
//             <p style={{ color: "var(--color-lotusFont)" }} className="text-[17px] leading-relaxed">
//               {description1}
//             </p>
//           </motion.div>

//           {/* Image from right */}
//           <motion.div
//             initial={{ x: 150, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1.2 }}
//             className="max-w-[400px] md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg"
//           >
//             <img className="w-full h-full object-cover" src={image1} alt="Work illustration" />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurWorkOne;

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const OurWorkOne = ({ title1, description1, image1 }) => {
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

  // Trigger animation only on scroll down
  useEffect(() => {
    if (isInView && scrollDir === "down") {
      setHasAnimated(true);
    }
  }, [isInView, scrollDir]);

  return (
    <section className="w-full px-6 " ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-30">
          {/* Text from left */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
            // className="max-w-[400px] md:py-27 pt-15  md:pt-0  md:w-1/2 text-gray-800 space-y-4"
                        className="max-w-[400px] py-15 md:py-27 md:w-1/2 text-gray-800 space-y-4"

          >
            <img
              className="max-w-[50px]"
              src="images/logolotus.png"
              alt="lotus logo"
            />
            <h3
              style={{ color: "var(--color-subHeading)" }}
              className="text-[46px] pb-3 font-bold"
            >
              {title1}
            </h3>
            <p
              style={{ color: "var(--color-lotusFont)" }}
              className="text-[17px] leading-relaxed"
            >
              {description1}
            </p>
          </motion.div>

          {/* Image from right */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
            // className="max-w-[400px]  md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg"
            // className="max-w-[400px] mb-20 md:mb-0 md:py-10 md:w-1/2 h-[400px] overflow-hidden rounded-xl shadow-lg"
                        className="max-w-[400px] mt-15 md:mt-0 md:w-1/2 h-[400px] overflow-hidden rounded-xl shadow-lg"

          >
            <img
              className="w-full  h-full object-cover"
              src={image1}
              alt="Work illustration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkOne;
