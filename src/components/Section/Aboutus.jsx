import React from "react";
// import "./Section/index.css";
// import '../../../index.css';



const Aboutus = () => {
  return (
    <div>
        <div style={{ backgroundColor: "var(--color-primary)" }} className="text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-8">
            Ashish Social Service Nepal (ASSN) is a registered non-profit NGO
            that has been working in Nepal since 2006 to fight against human
            trafficking and empower vulnerable women and girls with skills for a
            brighter future.
          </p>
          <p className="text-lg leading-8">
            Our head office is in Butwal-Rupandehi with a secondary office in
            Bharatpur, Chitwan.
          </p>
          <p className="text-lg leading-8">
            The open border between Nepal and India is known as one of the
            busiest human trafficking highways in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
