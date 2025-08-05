function OurImpact() {
  return (
    <div className="min-h-screen bg-[#24a69a] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter text-white">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-white mb-4">
            OUR IMPACT
          </h2>
          <div className="w-45 h-1 bg-[#e98524] mx-auto mt-[-10px] rounded-full"></div> {/* Horizontal line */}
        </div>

        {/* Impact Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0  mt-12">
          {/* Statistic 1 */}
          <div className="flex flex-col items-center text-center p-4">
            <h2 className="text-6xl sm:text-7xl lg:text-5xl font-extrabold text-white leading-none mb-4">
              15,087
            </h2>
            <p className="text-base sm:text-xl text-white max-w-xs">
              trafficking victims have been rescued and are now overcomers!
            </p>
          </div>

          {/* Statistic 2 */}
          <div className="flex flex-col items-center text-center p-4">
            <h2 className="text-6xl sm:text-7xl lg:text-5xl font-extrabold text-white leading-none mb-4">
              2,029
            </h2>
            <p className="text-base sm:text-xl text-white max-w-xs">
              overcomers have been welcomed as daughters at the Safe Homes.
            </p>
          </div>

          {/* Statistic 3 */}
            <div className="flex flex-col items-center text-center p-4">
            <h2 className="text-6xl sm:text-7xl lg:text-5xl font-extrabold text-white leading-none mb-4">
             343
            </h2>
            <p className="text-base sm:text-xl text-white max-w-xs">
              businesses have been started by our daughters.
            </p>
          </div>

          {/* Statistic 4 */}
          <div className="flex flex-col items-center text-center p-4">
            <h2 className="text-6xl sm:text-7xl lg:text-5xl font-extrabold text-white leading-none mb-4">
              133
            </h2>
                        <p className="text-base sm:text-xl text-white max-w-xs">

              community empowerment groups have been started with 6,814 members.
            </p>
          </div>
        </div>

        {/* Read Impact Report Button */}
        <div className="flex justify-center mt-12">
          <a
            href="http://ourdaughtersinternational.org/2024impact"
            target="_blank"
            rel="noreferrer noopener"
            className="px-15 py-3 bg-orange-400 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-3 "
            aria-label="READ THE 2024 IMPACT REPORT"
          >
            <span>READ THE 2024 IMPACT REPORT</span>
            {/* SVG Icon for arrow */}
            <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-5 h-5 ml-2 fill-current">
              <g>
                <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurImpact;
