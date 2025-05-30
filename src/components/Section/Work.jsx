import React from "react";
import { useState, useEffect } from "react";
import OurWorkONe from "./OurWorkOne";
import OurWorkOne from "./OurWorkOne";
import OurWorkTwo from "./OurWorkTwo";

const Work = () => {
  return (
    <>
      <div  style={{ color: "var(--color-title)" }}  className="text-center text-[40px] pb-[40px] pt-[40px] font-bold mt-15">
        OUR WORK
                <div style={{ color: "var(--color-title2)" }} className="mt-[-50px] ">______________</div>
      </div>
      
      {/* <OurWorkOne/> */}
      <OurWorkOne title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/womenEmpowermentjpg.jpg"}/>
      {/* <  title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}></OurWorkImg1> */}
            {/* <OurWorkOne title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}/> */}
       <OurWorkTwo title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/womenProtection.jpg"}/>

      <OurWorkOne title1={"PREVENTION"} description1={"ASSN runs border booths to stop trafficking by identifying at-risk girls and offering help before it's too late. They also raise awareness through dramas, school programs, and community events to educate people about trafficking."} image1={"/images/prevent.png"}/>
       {/* <OurWorkTwo title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/protection.jpg"}/> */}
      <OurWorkTwo title2={"REHABILITATION & REINTEGRATION"} description2={"To prepare girls for their return to the community, they are given the opportunity to become self-sufficient by being part of our micro finance scheme and starting their own small business."} image2={"/images/rehab.jpg"}/> 

      {/* <OurWorkImg1/> */}
      {/* <OurWork title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/protection.jpg"}/>
      <OurWork title2={"REHABILITATION & REINTEGRATION"} description2={"To prepare girls for their return to the community, they are given the opportunity to become self-sufficient by being part of our micro finance scheme and starting their own small business."} image2={"/images/rehab.jpg"}/> */}

      {/* <section className="w-full px-6  py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-blue-700">EMPOWERMENT</h2>
            <p className="text-lg leading-relaxed">
              ASSN helps rescued girls heal emotionally, learn about human
              rights, and build leadership skills. They also offer job training
              like sewing, embroidery, and craft-making to help them become
              independent. Finance and admin teams support these programs.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover shadow-md"
              src="/images/empowerment.jpg"
              alt="empImg"
            />
          </div>
        </div>
      </section> */}

      {/* <section className="w-full px-6 bg-green-100/60 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          

          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover shadow-md"
              src="/images/protection.jpg"
              alt="empImg"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-blue-700">PROTECTION</h2>
            <p className="text-lg leading-relaxed">
             ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training. </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6  py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-blue-700">PREVENTION</h2>
            <p className="text-lg leading-relaxed">
             ASSN runs border booths to stop trafficking by identifying at-risk girls and offering help before it's too late. They also raise awareness through dramas, school programs, and community events to educate people about trafficking. </p>
          </div>

          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover shadow-md"
              src="/images/prevention.webp"
              alt="empImg"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-6 bg-green-100/60 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
         

          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover shadow-md"
              src="/images/rehab.jpg"
              alt="empImg"
            />
          </div>
           <div className="w-full md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-blue-700">REHABILITATION & REINTEGRATION</h2>
            <p className="text-lg leading-relaxed">
              To prepare girls for their return to the community, they are given the opportunity to become self-sufficient by being part of our micro finance scheme and starting their own small business.  </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Work;
