import React from "react";
import HeroLikeSection from "./HeroLikeSection";

const jobs = [
  {
    title: "Social Worker",
    type: "Full Time",
    location: "Butwal",
    description:
      "Help with outreach, awareness, and victim support in the field.",
    applyLink: "mailto:assn2063@gmail.com",
  },
  {
    title: "Content Writer",
    type: "Part Time",
    location: "Remote",
    description: "Create blogs, newsletters, and stories of survivors.",
    applyLink: "mailto:assn2063@gmail.com",
  },
];

const Career = () => {
  return (
    <main className="bg-gray-50 mt-20">
 <HeroLikeSection
          src="images/AboutUsDemoImg.jpg"
          alt="Hero Image"
          className="h-screen"
          text="Join Our Team"
        />
    
      {/* Hero Section */}
      <section className="py-20  text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex gap-4 p-4  items-center justify-center">
            <img
              className="max-w-[50px]"
              src="images/logolotus.png"
              alt="lotus logo"
            />

            {/* <h1
              style={{ color: "var(--color-subHeading)" }}
              className="text-4xl md:text-5xl font-bold "
            >
              Join Our Mission
            </h1> */}
          </div>

          <p
            style={{ color: "var(--color-lotusFont)" }}
            className="leading-tight md:text-2xl font-semibold text-[18px] max-w-4xl mx-auto"
          >
            Be a part of our journey to combat human trafficking and empower
            communities.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            style={{ color: "var(--color-title)" }}
            className="text-center text-[40px]  font-bold mb-10"
          >
            Current Openings
            <div
              style={{ color: "var(--color-title2)" }}
              className="mt-[-50px] "
            >
              _______________________
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4"
                style={{ borderLeftColor: "var(--color-title)" }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-title)" }}
                    >
                      {job.title}
                    </h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {job.type}
                      </span>
                      <span className="text-gray-600">
                        <svg
                          className="w-4 h-4 inline mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
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
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={job.applyLink}
                    className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-colors duration-200"
                    style={{
                      backgroundColor: "var(--color-btnColor)",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    Apply Now
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-inner">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--color-title)" }}
            >
              Don't see a suitable position?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals. Send us your
              resume, and we'll get in touch when a matching opportunity arises.
            </p>
            <a
              href="mailto:assn2063@gmail.com"
              className="inline-flex items-center px-8 py-3 rounded-md text-lg font-medium text-white transition-colors duration-200 hover:opacity-90"
             style={{
                      background: "var(--color-btnColor)",
                      color: "white",
                    }}
            >
              Send Your Resume
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;


