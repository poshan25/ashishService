








import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isAboutUs = location.pathname === "/aboutus";
const isHome = location .pathname === "/"
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll down
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY) {
      // Scroll up
      setShowNavbar(true);
    }

    // Close mobile menu when scrolling
    if (menuOpen && currentScrollY > 100) {
      setMenuOpen(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    // <nav
    //   className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
    //     showNavbar ? 'translate-y-0' : '-translate-y-full'
    //   } ${isAboutUs ? 'bg-white text-black' : 'backdrop-blur-md'}`}
    // >
    //   <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    //     <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />

    //     {/* Desktop menu with dynamic text color */}
    //     <div className="hidden md:flex gap-10">
    //       <NavLinks textColor={isAboutUs ? "text-gray-500" : "text-white"} />
    //     </div>

    //     {/* Hamburger button */}
    //     <button onClick={toggleMenu} className={isAboutUs ? "text-gray-500 md:hidden" : "text-white md:hidden"}>
    //       {menuOpen ? <X size={28} /> : <Menu size={28} />}
    //     </button>
    //   </div>

    //   {/* Mobile menu */}
    //   {menuOpen && (
    //     <div style={{ background: "var(--color-navOpen)" }} className="md:hidden px-4 pb-6 pt-4">
    //       <div className="flex flex-col gap-6 mt-4">
    //         <NavLinks textColor={isAboutUs ? "text-gray-500" : "[color:var(--color-navText)]"} />
    //       </div>
    //     </div>
    //   )}
    // </nav>
//     <nav
//   className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
//     showNavbar ? 'translate-y-0' : '-translate-y-full'
//   } ${isAboutUs ? 'bg-white text-black' : 'backdrop-blur-md text-white'}`}
// >
//   <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//     <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />

//     {/* Desktop menu with correct text color */}
//     <div className="hidden md:flex gap-10">
//       <NavLinks textColor={isAboutUs ? "text-black" : "text-white"} />
//     </div>

//     {/* Hamburger button with correct text color */}
//     <button onClick={toggleMenu} className={`${isAboutUs ? "text-black" : "text-white"} md:hidden`}>
//       {menuOpen ? <X size={28} /> : <Menu size={28} />}
//     </button>
//   </div>

//   {/* Mobile menu */}
//   {menuOpen && (
//     <div style={{ background: "var(--color-navOpen)" }} className="md:hidden px-4 pb-6 pt-4">
//       <div className="flex flex-col gap-6 mt-4">
//         <NavLinks textColor={isAboutUs ? "text-black" : "text-white"} />
//       </div>
//     </div>
//   )}
// </nav>
//  <nav
//   className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
//     showNavbar ? 'translate-y-0' : '-translate-y-full'
//   } ${isAboutUs ? 'bg-white text-black' : 'bg-[#0a1733] text-white'}`}
// >
//   <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//     <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />

//     <div className="hidden md:flex gap-10">
//       <NavLinks textColor={isAboutUs ? "text-black" : "text-white"} />
//     </div>

//     <button onClick={toggleMenu} className={`${isAboutUs ? "text-black" : "text-white"} md:hidden`}>
//       {menuOpen ? <X size={28} /> : <Menu size={28} />}
//     </button>
//   </div>

//   {menuOpen && (
//     <div style={{ background: isAboutUs ? "white" : "#0a1733" }} className="md:hidden px-4 pb-6 pt-4">
//       <div className="flex flex-col gap-6 mt-4">
//         <NavLinks textColor={isAboutUs ? "text-black" : "text-white"} />
//       </div>
//     </div>
//   )}
// </nav> 

 <nav
  className={`fixed bg-[#f6f6f6] top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
    showNavbar ? 'translate-y-0' : '-translate-y-full'
  } `}
  // ${isAboutUs ? 'bg-white text-black' :isHome ? 'bg-[#382b24]' :  'bg-[#0a1733] text-white'  }`}
>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to='/'>
          <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />
        </Link>

        {/* Desktop menu with correct text color */}
        <div className="hidden md:flex gap-10">
          <NavLinks
            textColor={
              isAboutUs ? "text-black" :
              isHome ? "text-white" :
              "text-white"
            }
          />
        </div>

        {/* Hamburger button with correct text color */}
        <button
          onClick={toggleMenu}
          className={`${isAboutUs ? "text-black" : "text-white"} md:hidden`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: isAboutUs ? "white" : isHome ? "transparent" : "#0a1733",
          }}
          className="md:hidden px-4 pb-6 pt-4"
        >
          <div className="flex flex-col gap-6 mt-4">
            <NavLinks
              textColor={
                isAboutUs ? "text-black" :
                isHome ? "text-white" :
                "text-white"
              }
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ textColor }) => (
  <>
    <Link to="/aboutus" className={`${textColor} hover:text-teal-500 font-semibold transition`}>About Us</Link>
    <Link to="/recent-activities" className={`${textColor} hover:text-teal-500 font-semibold transition`}>Recent Activities</Link>
    <Link to="/ourwork" className={`${textColor} hover:text-teal-500 font-semibold transition`}>Our Work</Link>
    <Link to="/account" className={`${textColor} hover:text-teal-500 font-semibold transition`}>Donate</Link>
    <Link to="/contact-us" className={`${textColor} hover:text-teal-500 font-semibold transition`}>Contact Us</Link>
  </>
);

export default NavBar;
