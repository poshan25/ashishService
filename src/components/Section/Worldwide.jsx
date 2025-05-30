// import React from "react";

// const Worldwide = () => {
//   return (
//     <div className="relative mt-[100px] mx-auto px-6 text-center py-12 ">
//       {/* Image stuck 50px above the container */}
//       <div className="absolute -top-[170px] left-0 w-full z-[-1]">
//         <img className="w-full object-cover" src="images/copytear.png" alt="img" />
//       </div>

//       {/* Content */}
//       <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight text-[#04236b]">
//         <span className="text-orange-600">28</span> MILLION PEOPLE
//       </p>
//       <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold mt-4 mb-6 text-[#04236b]">
//         ARE TRAFFICKED WORLDWIDE
//       </p>
//       <p className="text-xl text-gray-800 max-w-xl mx-auto">
//         We cannot end this one person, one survivor at a time. But with your
//         help, we can target the systems that make human trafficking possible.
//       </p>
//     </div>
//   );
// };

// export default Worldwide;

import React from "react";

const Worldwide = () => {
  return (
    <div className=" p-15 relative  mx-auto  text-center mb-15 ">
      {/* Image absolutely positioned at top of container */}
      {/* <div className="absolute  bg-blue-300 left-0 w-full  z-[-1]">
        
      </div> */}
      {/* <img 
          className=" absolute w-full left-0 right-0 top-[-57px]  " 
          src="images/copytear.png" 
          alt="divider" 
        /> */}

      {/* Content */}
      <div className="pt-[100px] pb-[50px]"> {/* Add padding to push content down */}
        <p  style={{ color: "var(--color-title)" }} className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight ">
          <span style={{ color: "var(--color-number)" }}  >28</span> MILLION PEOPLE
        </p>
        <p  style={{ color: "var(--color-title)" }}  className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold mt-4 mb-6 text-[#04236b]">
          ARE TRAFFICKED WORLDWIDE
        </p>
        <p style={{ color: "var(--color-text)" }}   className="text-xl max-w-xl mx-auto">
          We cannot end this one person, one survivor at a time. But with your
          help, we can target the systems that make human trafficking possible.
        </p>
      </div>
    </div>
  );
};

export default Worldwide;
