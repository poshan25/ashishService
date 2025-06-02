
// import React from "react";
// import { useRef, useState } from "react";
// import WhyUs from "./WhyUs";
// import Button from "../Layout/Button";

// const Myth = ({learnMore}) => {
//   return (
//     <div className="relative w-full min-h-[500px] py-12">
//       {/* Background Image */}
//       <img
//         src="images/whyChooseUs.jpg"
//         alt="img"
//         className="absolute inset-0 w-full h-full object-cover z-[-2]"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-[-1]" />

//       <div style={{ color: "var(--color-title)" }} className="text-[50px] font-bold rounded bg-white max-w-[1100px] mx-auto mb-[50px] text-center">
//         WHY US
//         <div style={{ color: "var(--color-title2)" }} className="mt-[-57px] ">____________</div>
//       </div>

//       {/* Content */}
//       <div className="container   mx-auto max-w-6xl px-6 h-full flex flex-col items-center justify-center">
//         {/* Three Containers */}
//         <div className="grid font-bold grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//           <WhyUs   numbers={"1000+"} info={"Counseling and Information Sharing at Nepal-India Border"}  />
//           <WhyUs numbers={"500+"} info={"Trafficked Victims Have Been Rescued"} learnMore={"Learn More"}/>
//           <WhyUs numbers={"2500+"} info={"Girls Who Attended Safe Home & Training Centers."} learnMore={"Learn More"}/>

          
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Myth;



import React from "react";
import { useTranslation } from "react-i18next";
import WhyUs from "./WhyUs";
import Button from "../Layout/Button";

const Myth = ({ learnMore }) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full min-h-[500px] py-12">
      {/* Background Image */}
      <img
        src="images/whyChooseUs.jpg"
        alt="img"
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      <div style={{ color: "var(--color-title)" }} className="text-[50px] font-bold rounded bg-white max-w-[1100px] mx-auto mb-[50px] text-center">
        {t("whyUs.title")}
        <div style={{ color: "var(--color-title2)" }} className="mt-[-57px]">
          {t("whyUs.underline")}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-6 h-full flex flex-col items-center justify-center">
        {/* Three Containers */}
        <div className="grid font-bold grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {t("whyUs.stats", { returnObjects: true }).map((stat, index) => (
            <WhyUs
              key={index}
              numbers={stat.number}
              info={stat.text}
              learnMore={stat.learnMore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myth;