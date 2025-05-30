import React from "react";

const OurWorkOne = ({ title1, description1, image1 }) => {
  return (
    <div>
      {/* // yo section chai description first image second ma dakhauna ko lagi */}
      {/* <section className="w-full px-6  py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 space-y-4">
            <h2 style={{ color: "var(--color-subHeading)" }} className="text-3xl font-bold ">{title1}</h2>
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


      </section> */}

      <section className="w-full px-6 py-27">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">{title2}</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Here's what we're doing to make a difference.
          </p>
        </div> */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-30">
           

            <div className="max-w-[400px] md:w-1/2 text-gray-800 space-y-4">
              <img
                className="max-w-[50px]"
                src="images/logolotus.png"
                alt="lotus logo"
              />
              <h3
                style={{ color: "var(--color-subHeading)" }}
                className="text-[46px] pb-3 font-bold "
              >
                {title1}
              </h3>
              <p
                style={{ color: "var(--color-lotusFont)" }}
                className="text-[17px] leading-relaxed"
              >
                {description1}
              </p>
            </div>
             <div className="max-w-[400px] md:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={image1}
                alt="Work illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkOne;
