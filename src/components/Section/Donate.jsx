import React from 'react'

const Donate = () => {
  return (
    <div>
      <hr className="h-px bg-gray-300 border-0" />
      <div 
        style={{ background: "var(--color-darkBlue)" }} 
        className="mx-auto px-6 py-16"
      >
        <h1
          style={{ color: "var(--color-ssecondary)" }}
          className="text-4xl md:text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Even a small act of kindness can lead to a big change.
          <br /> Support our mission to end human trafficking.
        </h1>

        {/* Enhanced Donate Button */}
        <div className="flex justify-center mt-8">
          <button
            style={{
              background: "var(--color-pprimary)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            className="relative px-8 py-4 text-white font-bold rounded-lg cursor-pointer
                      transform transition-all duration-300
                      hover:scale-105 hover:shadow-lg
                      active:scale-95 active:shadow-inner
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
                      min-w-[200px] text-center"
          >
            <span className="relative z-10">Donate Now</span>
            {/* Button shine effect on hover */}
            <span className="absolute inset-0 overflow-hidden rounded-lg">
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 
                              opacity-0 hover:opacity-100 transition-opacity duration-300
                              -translate-x-full group-hover:translate-x-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate