import React from "react";

const WhyUs = ({ numbers, info, learnMore }) => {
  return (
    <>
      <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl text-white text-center">
        <h3 className="text-4xl font-bold text-gray-200 mb-15  ">
          {numbers}
        </h3>
        <p className="text-lg text-gray-200">{info}</p>
        <button className="border border-gray-600 rounded-full p-2 mt-10 bg-gray-500">
          {learnMore}
        </button>
      </div>
    </>
  );
};

export default WhyUs;
