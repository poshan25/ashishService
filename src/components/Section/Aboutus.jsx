




import React from "react";
import Footer from "../Layout/Footer";
import { useEffect } from "react";

const Aboutus = () => {

  //page load hudha khari top dakhi show garna ko lagi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-20">
      {/* About Us Section */}
      <div className="bg-gradient-to-r from-[#3b84b8] to-[#2c439f] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="images/newHeroImage.jpeg"
            alt="About us"
            className="rounded w-full h-[400px] object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              Ashish Social Service Nepal (ASSN) is a registered non-profit NGO
              that has been working in Nepal since 2006 to fight against human
              trafficking and empower vulnerable women and girls with skills for a
              brighter future.
            </p>
            <p className="text-lg leading-relaxed">
              Our head office is in Butwal-Rupandehi with a secondary office in
              Bharatpur, Chitwan. The open border between Nepal and India is known
              as one of the busiest human trafficking highways in the world.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-[#eee8f5] text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-800">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to rescue, rehabilitate, and empower women and girls
              who are victims or at risk of human trafficking. We aim to build a
              safe and just society by creating awareness, providing education,
              and offering skill-based training to help them lead independent lives.
            </p>
          </div>
           <img
            src="images/ourMission.png"
            alt="About us"
            className="rounded w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-r from-[#2982b1] to-[#2d45a8] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="images/newHeroImage.jpeg"
            alt="About us"
            className="rounded w-full h-[400px] object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a Nepal where every woman and girl is safe, valued, and
              empowered to realize her full potential. A nation free from human
              trafficking, where survivors become leaders and change-makers in their
              communities.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Aboutus;
