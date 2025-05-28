import React from "react";
// import { Link } from "lucide-react";
import {Link} from "react-router-dom"
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";

const AccountPage = () => {
  return (
    <div className="min-h-screen pt-20 mt-10 bg-gray-50">
      {/* Hero Section with Donation Appeal */}
      
      {/* Account Information Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Donation Appeal */}
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-500 to-blue-800 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Even small contributions create big impacts
            </h2>
            <p className="text-lg mb-6">
              Your donation helps us rescue victims, provide shelter, and create awareness programs.
            </p>
            
          </div>

          {/* Bank Details */}
          <div className="p-8 md:p-10 bg-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
              Bank Transfer Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-600">Bank Name</h4>
                  <p className="text-lg">Nepal Bank Limited</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-600">Account Name</h4>
                  <p className="text-lg">ASSN</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-600">Account Number</h4>
                  <p className="text-lg font-mono">NBL-ASSN-125615</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-600">Branch</h4>
                  <p className="text-lg">Narayangarh (NPR)</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-yellow-50 rounded-xl  p-4">
              <div className="flex">
                {/* <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div> */}
                <div className="ml-3 ">
                  <p className="text-sm  text-green-700">
                    Please include your name or reference in the transfer description so we can properly acknowledge your donation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default AccountPage;