import React from 'react';

// Main App component
function OurSolution() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-orange-500 mb-2">
            OUR SOLUTION
          </h2>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-teal-600 leading-tight">
            THE FREEDOM PATHWAY
          </h1>
        </div>

        {/* Grid for the four pathway steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-yellow-200 ">
          {/* Step 1: Rescue Victims */}
          <div className="flex bg-blue-300 flex-col items-center text-center p-4 shadow-lg ">
            <div className="w-full h-64 overflow-hidden  mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_df4b2757a8fe4c3faab4fdbaf7d1f003~mv2.png/v1/fill/w_287,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Border%202.png"
                alt="Border 2"
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/E98524/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/rescue"
              target="_self"
              className="mt-[-30px] md:px-10 px-3 py-2 bg-[#dc8cb1] text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center "
              aria-label="RESCUE VICTIMS"
            >
              <span className="text-sm sm:text-base">RESCUE VICTIMS</span>
              {/* SVG Icon for arrow */}
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div>

          {/* Step 2: Restore Daughters */}
          {/* <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg bg-white">
            <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_2496839b3e6b422aa5908766a005b7f0~mv2.jpg/v1/fill/w_287,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8809_JPG.jpg"
                alt="Daughters at safe house"
                className="object-cover w-full h-full rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/24A69A/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/restore"
              target="_self"
              className="mt-auto px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center space-x-2 w-full"
              aria-label="RESTORE DAUGHTERS"
            >
              <span className="text-sm sm:text-base">RESTORE DAUGHTERS</span>
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div> */}
          <div className="flex bg-blue-300 flex-col items-center text-center p-4 shadow-lg ">
            <div className="w-full h-64 overflow-hidden  mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_df4b2757a8fe4c3faab4fdbaf7d1f003~mv2.png/v1/fill/w_287,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Border%202.png"
                alt="Border 2"
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/E98524/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/rescue"
              target="_self"
              className="mt-[-30px] md:px-10 px-3 py-2 bg-[#e98524] text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center "
              aria-label="RESCUE VICTIMS"
            >
              <span className="text-sm sm:text-base">Restore Daughters</span>
              {/* SVG Icon for arrow */}
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div>

          {/* Step 3: Empower Leaders */}
          {/* <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg bg-white">
            <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_31c0aa529a93418abf4f6352536b1660~mv2.jpg/v1/fill/w_287,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/27%20Empower%20at%20TC.jpg"
                alt="Daughter learning"
                className="object-cover w-full h-full rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/E98524/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/empower"
              target="_self"
              className="mt-auto px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center space-x-2 w-full"
              aria-label="EMPOWER LEADERS"
            >
              <span className="text-sm sm:text-base">EMPOWER LEADERS</span>
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div> */}
          <div className="flex bg-blue-300 flex-col items-center text-center p-4 shadow-lg ">
            <div className="w-full h-64 overflow-hidden  mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_df4b2757a8fe4c3faab4fdbaf7d1f003~mv2.png/v1/fill/w_287,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Border%202.png"
                alt="Border 2"
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/E98524/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/rescue"
              target="_self"
              className="mt-[-30px] md:px-10 px-3 py-2 bg-[#6c267b] text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center "
              aria-label="RESCUE VICTIMS"
            >
              <span className="text-sm sm:text-base">Empower Leaders</span>
              {/* SVG Icon for arrow */}
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div>

          {/* Step 4: Transform Communities */}
          {/* <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg bg-white">
            <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_51b80300f1bb451f8366f9e7a6d15707~mv2.jpg/v1/fill/w_287,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_2603_JPG.jpg"
                alt="group of women meeting"
                className="object-cover w-full h-full rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/24A69A/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/transform"
              target="_self"
              className="mt-auto px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center space-x-2 w-full"
              aria-label="TRANSFORM COMMUNITIES"
            >
              <span className="text-sm sm:text-base">TRANSFORM COMMUNITIES</span>
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div> */}
          <div className="flex bg-blue-300 flex-col items-center text-center p-4 shadow-lg ">
            <div className="w-full h-64 overflow-hidden  mb-4">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/cd748e_df4b2757a8fe4c3faab4fdbaf7d1f003~mv2.png/v1/fill/w_287,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Border%202.png"
                alt="Border 2"
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/287x248/E98524/ffffff?text=Image+Missing"; }}
              />
            </div>
            <a
              href="https://www.ourdaughtersinternational.org/rescue"
              target="_self"
              className="mt-[-30px] md:px-3 px-1 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center "
              aria-label="RESCUE VICTIMS"
            >
              <span className="text-sm sm:text-base">Transform Communities</span>
              {/* SVG Icon for arrow */}
              <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-4 h-4 ml-2 fill-current">
                <g>
                  <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSolution;