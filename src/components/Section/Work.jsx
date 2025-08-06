// import React from "react";
// import { useTranslation } from "react-i18next";
// import OurWorkOne from "./OurWorkOne";
// import OurWorkTwo from "./OurWorkTwo";

// const Work = () => {
//   const { t } = useTranslation();

//    = t("ourWork.sections", { returnObjects: true });
// const Work = () => {
//   return (
//     // <>
//     //   <div  style={{ color: "var(--color-title)" }}  className="text-center text-[40px] pb-[40px] pt-[40px] font-bold mt-15">
//     //     OUR WORK
//     //             <div style={{ color: "var(--color-title2)" }} className="mt-[-50px] ">______________</div>
//     //   </div>
      
//     //   {/* <OurWorkOne/> */}
//     //   <OurWorkOne title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/womenEmpowermentjpg.jpg"}/>
//     //   {/* <  title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}></OurWorkImg1> */}
//     //         {/* <OurWorkOne title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}/> */}
//     //    <OurWorkTwo title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/womenProtection.jpg"}/>

//     //   <OurWorkOne title1={"PREVENTION"} description1={"ASSN runs border booths to stop trafficking by identifying at-risk girls and offering help before it's too late. They also raise awareness through dramas, school programs, and community events to educate people about trafficking."} image1={"/images/prevent.png"}/>
//     //    {/* <OurWorkTwo title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/protection.jpg"}/> */}
//     //   <OurWorkTwo title2={"REHABILITATION & REINTEGRATION"} description2={"To prepare girls for their return to the community, they are given the opportunity to become self-sufficient by being part of our micro finance scheme and starting their own small business."} image2={"/images/rehab.jpg"}/> 
//     // </>
//     <>
//     {t("ourWork.sections", { returnObjects: true }).map((work, index) => {
//   return work.type === "one" ? (
//     <OurWorkOne
//       key={index}
//       title1={work.title}
//       description1={work.description}
//       image1={work.image}
//     />
//   ) : (
//     <OurWorkTwo
//       key={index}
//       title2={work.title}
//       description2={work.description}
//       image2={work.image}
//     />
//   );
// })}
// </>
//   );
// };

// export default Work;

//old our work



import { useTranslation } from "react-i18next";
import OurWorkOne from "./OurWorkOne";
import OurWorkTwo from "./OurWorkTwo";

const Work = () => {
  const { t } = useTranslation();

  const workData = t("ourWork.sections", { returnObjects: true });

  return (
    <>
      <div
        style={{ color: "var(--color-title)" }}
        className="text-center text-[40px] pb-[40px] pt-[40px] font-bold mt-15"
      >
        {t("ourWork.title")}
        <div
          style={{ color: "var(--color-title2)" }}
          className="mt-[-50px]"
        >
          {t("ourWork.underline")}
        </div>
      </div>

      {workData.map((work, index) =>
        work.type === "one" ? (
          <OurWorkOne
            key={index}
            title1={work.title}
            description1={work.description}
            image1={work.image}
          />
        ) : (
          <OurWorkTwo
            key={index}
            title2={work.title}
            description2={work.description}
            image2={work.image}
          />
        )
      )}
    </>
  );
};

export default Work;
