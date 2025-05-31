
// import React from "react";

// const Worldwide = () => {
//   return (
//     <div className=" p-15 relative  mx-auto  text-center mb-15 ">
   
//       <div className="pt-[100px] pb-[50px]"> {/* Add padding to push content down */}
//         <p  style={{ color: "var(--color-title)" }} className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight ">
//           <span style={{ color: "var(--color-number)" }}  >28</span> MILLION PEOPLE
//         </p>
//         <p  style={{ color: "var(--color-title)" }}  className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold mt-4 mb-6 text-[#04236b]">
//           ARE TRAFFICKED WORLDWIDE
//         </p>
//         <p style={{ color: "var(--color-text)" }}   className="text-xl max-w-xl mx-auto">
//           We cannot end this one person, one survivor at a time. But with your
//           help, we can target the systems that make human trafficking possible.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Worldwide;









// import React from "react";
// import { motion } from "framer-motion";

// const Worldwide = () => {
//   return (
//     <div className="p-15 relative mx-auto text-center mb-15">
//       <div className="pt-[100px] pb-[50px]">
//         <motion.p
//           initial={{ y: 300, opacity: 0 }} // from bottom
//           animate={{ y: 0, opacity: 1 }}    // to normal place
//           transition={{ duration: 1, ease: "easeOut" }}
//           style={{ color: "var(--color-title)" }}
//           className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight"
//         >
//           <span style={{ color: "var(--color-number)" }}>28</span> MILLION PEOPLE
//         </motion.p>

//         <motion.p
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//           style={{ color: "var(--color-title)" }}
//           className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold mt-4 mb-6 text-[#04236b]"
//         >
//           ARE TRAFFICKED WORLDWIDE
//         </motion.p>

//         <motion.p
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
//           style={{ color: "var(--color-text)" }}
//           className="text-xl max-w-xl mx-auto"
//         >
//           We cannot end this one person, one survivor at a time. But with your
//           help, we can target the systems that make human trafficking possible.
//         </motion.p>
//       </div>
//     </div>
//   );
// };

// export default Worldwide;
















import React from "react";
import { motion } from "framer-motion";

const Worldwide = () => {
  return (
    <div className="p-15 relative mx-auto text-center mb-15">
      <div className="pt-[100px] pb-[50px]">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ color: "var(--color-title)" }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight"
        >
          <span style={{ color: "var(--color-number)" }}>28</span> MILLION PEOPLE
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ color: "var(--color-title)" }}
          className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold mt-4 mb-6 text-[#04236b]"
        >
          ARE TRAFFICKED WORLDWIDE
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ color: "var(--color-text)" }}
          className="text-xl max-w-xl mx-auto"
        >
          We cannot end this one person, one survivor at a time. But with your
          help, we can target the systems that make human trafficking possible.
        </motion.p>
      </div>
    </div>
  );
};

export default Worldwide;
