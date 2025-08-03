import React from "react";

const TheIssueSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className=" mx-auto flex flex-col md:flex-row items-center ">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <img
            src="https://static.wixstatic.com/media/cd748e_27e694fbff90402ca490898ae3196315~mv2.jpg"
            alt="Issue Left"
            className="w-full h-[520px] object-cover rounded shadow"
          />
        </div>

        {/* Middle Content */}
        <div className="w-full md:w-1/3 bg-[#24a69a] text-center">
          <h2 className="text-[40px] md:text-[82px] font-bold text-white mb-6">
            THE ISSUE
          </h2>
          <p className="text-sm md:text-base text-white bg-[#24a69a] p-4 rounded">
            An estimated 25,000 girls and women are trafficked to India from Nepal every year.
            <br />
            <br />
            Once there, they are taken captive and sold as slaves to the highest bidders from India or the Middle East.
          </p>

          {/* Button */}
          <a
            href="https://www.ourdaughtersinternational.org/issue"
            target="_self"
            className="inline-flex items-center justify-center bg-[#24A69A] hover:bg-[#1c887e] text-white text-sm font-semibold px-6 py-3 mt-6 rounded transition"
          >
            LEARN MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="13 2 34 55"
              className="w-4 h-4 fill-current"
            >
              <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
            </svg>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <img
            src="https://static.wixstatic.com/media/cd748e_f4d22380b20749bb894488815b4978fa~mv2.png"
            alt="Issue Right"
            className="w-full h-[520px] object-cover rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default TheIssueSection;
