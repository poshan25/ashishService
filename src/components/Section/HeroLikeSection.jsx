// import { Section } from "lucide-react";
// import React from "react";
// import { useRef } from "react";

// const HeroLikeSection = ({ src }) => {
//   return (
//     <Section className="w-full h-screen">
//       <img className="w-full h-full" src={src} alt="" />
//       <p></p>
//     </Section>
//   );
// };

// export default HeroLikeSection;





// import React from "react";

// const HeroLikeSection = ({text, src, alt = "", className = "" }) => {
//   return (
//     <div className="">
//     <img
//       src={src}
//       alt={alt}
//       className={`w-full object-cover ${className}`}
//     />
//     <p className="">{text}</p>
//     </div>
//   );
// };

// export default HeroLikeSection;






// import React from "react";

// const HeroLikeSection = ({ text, src, alt = "", className = "" }) => {
//   return (
//     <div className={`relative w-full ${className}`}>
//       <img
//         src={src}
//         alt={alt}
//         className="w-full object-cover"
//       />
//       <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-7xl text-center">
//         {text}
//       </p>
//     </div>
//   );
// };

// export default HeroLikeSection;






import React from "react";

const HeroLikeSection = ({ text, src, alt = "", className = "" }) => {
  return (
    <div className={`relative w-full h-screen ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl sm:text-5xl md:text-7xl text-center px-4">
        {text}
      </p>
    </div>
  );
};

export default HeroLikeSection;
