import React from "react";
import HeroLikeSection from "./HeroLikeSection";

const volunteerRoles = [
  {
    title: "Community Outreach Volunteer",
    type: "Field Work",
    location: "Butwal",
    description:
      "Help with awareness campaigns, community education, and victim support in the field.",
    applyLink: "mailto:assn2063@gmail.com",
  },
  {
    title: "Digital Content Volunteer",
    type: "Remote",
    location: "Online",
    description:
      "Assist with creating social media content, blogs, and survivor stories.",
    applyLink: "mailto:assn2063@gmail.com",
  },
  {
    title: "Fundraising Volunteer",
    type: "Flexible",
    location: "Hybrid",
    description:
      "Help organize fundraising events and donor outreach programs.",
    applyLink: "mailto:assn2063@gmail.com",
  },
];

const Volunteer = () => {
  return (
    <main className="bg-gray-50 mt-20">
      <HeroLikeSection
        src="images/AboutUsDemoImg.jpg"
        alt="Hero Image"
        className="h-screen"
        text="Volunteer with Us"
      />
      {/* Hero Section */}
      <section className="py-20 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex gap-4 p-4 items-center justify-center">
            <img
              className="max-w-[50px]"
              src="images/logolotus.png"
              alt="lotus logo"
            />
            {/* <h1
              style={{ color: "var(--color-subHeading)" }}
              className="text-4xl md:text-5xl font-bold"
            >
              Become a Volunteer
            </h1> */}
          </div>
          <p
            style={{ color: "var(--color-lotusFont)" }}
            className="leading-tight md:text-2xl font-semibold text-[18px] max-w-4xl mx-auto"
          >
            Join our team of dedicated volunteers working to end human
            trafficking and support survivors.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* <div 
            style={{ color: "var(--color-title)" }}
            className="text-center text-[40px] font-bold mb-10"
          >
            Volunteer Opportunities
            <div
              style={{ color: "var(--color-title2)" }}
              className="mt-[-50px]"
            >
              _______________________
            </div>
          </div> */}
          <div
            style={{ color: "var(--color-title)" }}
            className="text-center text-[40px] font-bold mb-10"
          >
            <div className="inline-block">
              Volunteer Opportunities
              <div
                style={{ backgroundColor: "var(--color-title2)" }}
                className="h-[2px] w-full mt-2"
              ></div>
            </div>
          </div>

          <div className="space-y-6">
            {volunteerRoles.map((role, index) => (
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
                      {role.title}
                    </h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: "var(--color-btnColor)",
                          color: "white",
                        }}
                      >
                        {role.type}
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
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={role.applyLink}
                    className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-colors duration-200"
                    style={{
                      backgroundColor: "var(--color-btnColor)",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    Join Us
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
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--color-title)" }}
          >
            Why Volunteer With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👐",
                title: "Make an Impact",
                description:
                  "Directly contribute to ending human trafficking and supporting survivors.",
              },
              {
                icon: "🌟",
                title: "Grow Skills",
                description:
                  "Develop valuable experience in social work, advocacy, and community organizing.",
              },
              {
                icon: "💞",
                title: "Join a Community",
                description:
                  "Connect with like-minded individuals passionate about social justice.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--color-title)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-inner">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--color-title)" }}
            >
              Ready to make a difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Even if you don't see the perfect role, we'd love to hear how
              you'd like to contribute.
            </p>
            <a
              href="mailto:assn2063@gmail.com"
              className="inline-flex items-center px-8 py-3 rounded-md text-lg font-medium text-white transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--color-title)" }}
            >
              Contact Us
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

export default Volunteer;
