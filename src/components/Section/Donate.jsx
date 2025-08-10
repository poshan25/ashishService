// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Button from "../Layout/Button";
// import { useTranslation } from "react-i18next";


// const Donate = () => {
//     const { t } = useTranslation();
  

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/account");
//   };

//   return (
//     <div>
//       <hr className="h-px bg-gray-300 border-0" />
//       <div
//         // style={{ background: "var(--color-darkBlue)" }}
//         // }
//         className="mx-auto px-6 bg-white py-16"
//       >
//        <h1
//   style={{ color: "var(--color-title2)" }}
//   className="text-4xl md:text-3xl font-bold text-center text-gray-800 mb-12"
// >
//   {t("donate.titleLine1")} <br />
//   {t("donate.titleLine2")}
// </h1>

//   {/* <img
//             src="images/donateImg.png"
//             alt="About us"
//             className="rounded w-40 mx-auto object-cover"
//           /> */}
//         {/* Enhanced Donate Button */}
//         <div className="flex justify-center mt-8">
          
//           {/* <Button onClick={handleClick}  text={"Donate Now"}  style={"bg-[#00b8db]  cursor-pointer text-white px-8 py-3 rounded-full  transition-all text-lg"}/> */}
//           <Button
//             onClick={handleClick}
//             text={t("donate.btnText")}
//             // text="Donate Now"
//             styling="bg-[#00b8db] cursor-pointer text-white px-8 py-3 rounded-full text-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donate;







// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../Layout/Button";
// import { useTranslation } from "react-i18next";
// import DonateImg from "images/donateImg.png";


// const Donate = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/account");
//   };

//   return (
//     <div>
//       <hr className="h-px bg-gray-300 border-0" />
//       <div
//         className="mx-auto h-[500px]  px-6 py-16 bg-cover bg-center relative"
//         style={{
//           backgroundImage: {DonateImg}
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0  bg-opacity-40"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
//           <h1
//             className="text-4xl md:text-3xl font-bold mb-12"
//             style={{ color: "white" }}
//           >
//             {t("donate.titleLine1")} <br />
//             {t("donate.titleLine2")}
//           </h1>

//           <div className="flex justify-center mt-8">
//             <Button
//               onClick={handleClick}
//               text={t("donate.btnText")}
//               styling="bg-[#00b8db] cursor-pointer text-white px-8 py-3 rounded-full text-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donate;













import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Layout/Button";
import { useTranslation } from "react-i18next";
// import DonateImg from "images/donateImg.png";

const Donate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/account");
  };

  return (
    <div>
      <hr className="h-px bg-gray-300 border-0" />
      <div
        className="mx-auto flex justify-center items-center h-[500px]  px-6 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/DonateImg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40"></div> 

        {/* Content */}
        <div className="relative z-10 text-center  text-white max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-3xl font-bold mb-12" style={{ color: "white" }}>
            {t("donate.titleLine1")} <br />
            {t("donate.titleLine2")}
          </h1>

          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClick}
              text={t("donate.btnText")}
              styling="bg-[#24a69a] cursor-pointer text-white px-8 py-3 rounded-full text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;