import React from "react";

const OurWorkOne = ({
  title1,
  description1,
  image1,
 
}) => {
  return (
    <div>
      {/* // yo section chai description first image second ma dakhauna ko lagi */}
      <section className="w-full px-6  py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 space-y-4">
            <h2 style={{ color: "var(--color-darkishBlue)" }} className="text-3xl font-bold ">{title1}</h2>
            <p className="text-lg leading-relaxed">{description1} </p>
          </div>

          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover shadow-md"
              src={image1}
              alt="empImg"
            />
          </div>
        </div>

        {/* // yo section chai image first description second ma dakhauna ko lagi */}

      </section>
    </div>
  );
};

export default OurWorkOne;
