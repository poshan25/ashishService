import React from "react";

const Account = () => {
  return (
    <div className=" bg-green-100/60 mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Account Information
      </h1>

      <div className="bg-gray-100 rounded-2xl shadow-xl max-w-2xl mx-auto p-8 md:p-10">
        <div className="flex items-start space-x-4">
          <div className="text-cyan-500 pt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Nepal Bank Limited
            </h3>
            <div className="mt-2 text-gray-600 space-y-1">
              <p>Currency Type: NPR</p>
              <p>Branch: Narayangarh</p>
              <p>Account Name: ASSN</p>
              <p>Account Number: NBL-ASSN-125615</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
