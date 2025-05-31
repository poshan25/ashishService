import React from "react";

const jobs = [
  {
    title: "Social Worker",
    type: "Full Time",
    location: "Butwal",
    description: "Help with outreach, awareness, and victim support in the field.",
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
    <main>
      {/* Hero Section */}
      <section className="bg-blue-100 mt-20 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Join Our Mission</h1>
        <p className="text-lg text-blue-700">
          Be a part of our journey to combat human trafficking and empower communities.
        </p>
      </section>

      {/* Job Listings */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-800">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {job.type} • {job.location}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <a href={job.applyLink} className="text-blue-600 hover:underline">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-100 py-12 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't see a suitable position?</h3>
        <p className="text-blue-700 mb-6">
          We're always looking for passionate individuals. Send us your resume, and we'll get in touch when a matching opportunity arises.
        </p>
        <a href="mailto:assn2063@gmail.com" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          Send Your Resume
        </a>
      </section>
    </main>
  );
};

export default Career;
