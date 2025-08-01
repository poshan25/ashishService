


import React from "react";

const MapEmbeed = () => {
  return (
    <div className="map-container relative w-full max-w-2xl mx-auto">
      {/* The iframe map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6736.046579615865!2d84.43598160435945!3d27.660537869203935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e52acb3e499f%3A0x7819ba4c0d56fbc1!2sParas%20Buspark%20Police%20Station!5e1!3m2!1sen!2snp!4v1748343824079!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Paras Buspark Police Station"
      ></iframe>

      {/* Positioned link only over "View larger map" */}
      <a
        href="https://www.google.com/maps/place/Paras+Buspark+Police+Station/@27.6605379,84.4359816,15z"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 w-32 h-8 z-10 opacity-0 hover:opacity-20"
        aria-label="View larger map"
      >
        {/* Optional: Add a visually hidden text for accessibility */}
        <span className="sr-only">View larger map</span>
      </a>
    </div>
  );
};

export default MapEmbeed;

