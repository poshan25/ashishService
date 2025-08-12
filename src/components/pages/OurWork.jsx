import React from "react";
import { useState, useEffect } from "react";
// import OurWorkOne from "./OurWorkOne";
// import OurWorkTwo from "./OurWorkTwo";
import Footer from "../Layout/Footer";
import OurWorkOne from "../Section/OurWorkOne";
import OurWorkTwo from "../Section/OurWorkTwo";
import HeroLikeSection from "../Section/HeroLikeSection";

const OurWork = () => {
  return (
    <div className="pt-20">
      <HeroLikeSection
          src="images/AboutUsDemoImg.jpg"
          alt="Hero Image"
          className="h-screen"
          text="Our Work"
        />
      {/* <div 
        style={{ color: "var(--color-pprimary)" }}
        className="text-center text-[40px] font-bold mt-15"
      >
        OUR WORK 
        <div
          style={{ color: "var(--color-ssecondary)" }}
          className="mt-[-50px] "
        >
          ______________
        </div>
      </div> */}

      {/* <OurWorkOne/> */}
      <OurWorkOne
        title1={"EMPOWERMENT"}
        description1={
          " ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."
        }
        image1={"/images/empowerment.jpg"}
      />
      {/* <  title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}></OurWorkImg1> */}
      {/* <OurWorkOne title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}/> */}
      <OurWorkTwo
        title2={"PROTECTION"}
        description2={
          "ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."
        }
        image2={"/images/protection.jpg"}
      />

      <OurWorkOne
        title1={"PREVENTION"}
        description1={
          "ASSN runs border booths to stop trafficking by identifying at-risk girls and offering help before it's too late. They also raise awareness through dramas, school programs, and community events to educate people about trafficking."
        }
        image1={"/images/prevention.webp"}
      />
      {/* <OurWorkTwo title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/protection.jpg"}/> */}
      <OurWorkTwo
        title2={"REHABILITATION & REINTEGRATION"}
        description2={
          "To prepare girls for their return to the community, they are given the opportunity to become self-sufficient by being part of our micro finance scheme and starting their own small business."
        }
        image2={"/images/rehab.jpg"}
      />

      {/* <Footer /> */}
    </div>
  );
};

export default OurWork;
