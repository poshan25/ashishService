import React from "react";

const MissionSection = () => {
  return (
    <section className="w-full  px-4 ">
      <div className=" mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl pt-40 md:text-4xl font-bold text-[#24A69A] tracking-wide mb-4">
          OUR MISSION
        </h2>

        {/* Divider */}
        <div className="w-50 h-1  bg-[#e98524] mx-auto mb-6"></div>

        {/* Paragraph */}
        <p className="text-lg md:text-2xl max-w-xl mx-auto text-black mb-10 leading-relaxed">
          Our Daughters International and our partners exist to bring an end to
          human trafficking and to see lives and communities transformed.
        </p>

        {/* Image */}
        <img
          src="images/ourMissionImg.png"
          alt="Katmandu"
          className="w-full mt-[-100px] object-contain rounded "
        />

       
      </div>
    </section>
  );
};

export default MissionSection;
