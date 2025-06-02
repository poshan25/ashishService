
// import Button from "../Layout/Button";
// import {useTranslation} from "react-i18next"


// const HeroSection = () => {
//   const {t} = useTranslation();


//   return (
//     <div className="relative h-screen mx-auto px-6 py-20 text-center ">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-black/30 z-0" />
//       <img
//         src="images/newHeroImage.jpeg"
//         alt="heroImg"
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//       />

//       {/* Bottom divider anchored to container */}
//       <img
//         className="absolute bottom-0 left-0 w-full z-10"
//         src="images/copytear.png"
//         alt="divider"
//       />

//       {/* Content container */}
//       <div className="relative mx-auto h-full flex flex-col justify-center items-center z-20 max-w-[1300px]">
//         <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-100 mb-4 uppercase tracking-wide">
//           {/* A CAMPAIGN TO <span className="shadow-lg">END</span> HUMAN TRAFFICKING */}
//           A CAMPAIGN TO END HUMAN TRAFFICKING
//           {/* A CAMPAIGN TO <span className="text-red-600 text-5xl font-extrabold tracking-wide drop-shadow-lg bg-white px-3 py-1 rounded-md">END</span> HUMAN TRAFFICKING */}
//         </h2>

//         <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight font-bold text-gray-100 mb-6">
//           ASHISH SOCIAL SERVICE NEPAL
//         </h3>

//         <p className="text-gray-100 mb-8 max-w-2xl mx-auto px-4">
//           Survivors should not have to carry the burden of criminal records
//           stemming from their exploitation. Support the Trafficking Survivors
//           Relief Act.
//         </p>

//         <Button
//           text={"TAKE ACTION NOW"}
//           styling={
//             "cursor-pointer text-white px-8 py-3 rounded-full  transition-all text-lg"
//           }
//         />
    
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





import Button from "../Layout/Button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-screen mx-auto px-6 py-20 text-center ">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      <img
        src="images/newHeroImage.jpeg"
        alt="heroImg"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Bottom divider anchored to container */}
      <img
        className="absolute bottom-0 left-0 w-full z-10"
        src="images/copytear.png"
        alt="divider"
      />

      {/* Content container */}
      <div className="relative mx-auto h-full flex flex-col justify-center items-center z-20 max-w-[1300px]">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-100 mb-4 uppercase tracking-wide">
          {t("hero.campaign")}
        </h2>

        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight font-bold text-gray-100 mb-6">
          {t("hero.organization")}
        </h3>

        <p className="text-gray-100 mb-8 max-w-2xl mx-auto px-4">
          {t("hero.description")}
        </p>

        <Button
          text={t("hero.actionButton")}
          styling={
            "cursor-pointer text-white px-8 py-3 rounded-full transition-all text-lg"
          }
        />
      </div>
    </div>
  );
};

export default HeroSection;