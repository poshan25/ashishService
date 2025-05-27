import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-600">Home</a></li>
              <li><a href="#" className="hover:text-cyan-600">Recent Activities</a></li>
              <li><a href="#" className="hover:text-cyan-600">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-lg mb-4">EXPLORE</h3>
            <address className="not-italic">
              <p>Rupendehi, Butwal</p>
              <p>9857055535, 9807209805,</p>
              <p>assn2063@gmail.com</p>
            </address>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe Us</h3>
            <div className="flex">
              {/* <input  
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white flex-grow"
              /> */}
              <input  
  type="email" 
  placeholder="Email Address" 
  className="px-4 py-2 border placeholder-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white flex-grow"
/>

              <button className="bg-cyan-600 cursor-pointer text-white px-4 py-2 rounded-r-md hover:bg-cyan-700">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
          <p>Powered by Ashish Social Service Nepal | 2022</p>
          <p className="mt-1">Copyright Shareware Nepal. All Rights Reserved 2022.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;