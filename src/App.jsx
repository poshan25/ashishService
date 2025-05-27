import { useState, useEffect } from "react";
import NavBar from "./components/Layout/NavBar";
import HeroSection from "./components/Home/HeroSection";
// import PaperCut from "./components/Section/PaperCut";
import Aboutus from "./components/Section/Aboutus";
import Worldwide from "./components/Section/Worldwide";
import Myth from "./components/Section/Myth";
import ContactPage from "./components/Section/ContactUs";
import Footer from "./components/Layout/Footer";
import Work from "./components/Section/Work";
import Popup from "./components/Section/Popup";
import Account from "./components/Section/Account";

const HomePage = () => {
 

  return (
    <div className="min-h-screen ">
      {/* Popup Modal */}
      {/* {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg relative max-w-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl font-bold">×</span>
            </button>

            <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-t-lg">
              [Popup Image Placeholder]
            </div>
          </div>
        </div>
      )} */}

      <Popup/>

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* paper cut */}
      {/* <PaperCut /> */}
      {/* worldwide */}
      <Worldwide/>
      
{/* hands and Myth */}
      <Myth/>

      <Work/>

<ContactPage/>
<Account/>
<Footer/>

      {/* aboutus  */}
     {/* <Aboutus/> later show garne */}



    </div>
  );
};

export default HomePage;
