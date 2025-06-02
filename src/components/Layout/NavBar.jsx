// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const NavBar = () => {
//   const location = useLocation();
//   const isAboutUs = location.pathname === "/aboutus";
//   const isHome = location.pathname === "/";
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY && currentScrollY > 100) {
//       // Scroll down
//       setShowNavbar(false);
//     } else if (currentScrollY < lastScrollY) {
//       // Scroll up
//       setShowNavbar(true);
//     }

//     // Close mobile menu when scrolling
//     if (menuOpen && currentScrollY > 100) {
//       setMenuOpen(false);
//     }

//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, menuOpen]);

//   return (
//     <nav
//       className={`fixed  mx-auto bg-[#f6f6f6] top-0 left-0 w-full z-50 transform shadow-[0_9px_12px_rgba(0,0,0,0.2)]  transition-transform duration-300 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="max-w-[1220px] mx-auto px-6 py-2 flex items-center  justify-between">
//         <Link to="/">
//           <img src="images/overlap.png" className="w-[70px]" alt="overlapImg" />
//         </Link>

//         {/* Desktop menu with correct text color */}
//         <div className="hidden md:flex gap-10">
//           <NavLinks textColor={"text-black"} />
//         </div>

//         {/* Hamburger button with correct text color */}
//         <button
//           onClick={toggleMenu}
//           className={`${isAboutUs ? "text-black" : "text-black"} md:hidden`}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div
//           style={{
//             background: isAboutUs
//               ? "white"
//               : isHome
//               ? "transparent"
//               : "#0a1733",
//           }}
//           className="md:hidden px-4 pb-6 pt-4"
//         >
//           <div className="flex  flex-col gap-6 mt-4">
//             <NavLinks
//               textColor={
//                 isAboutUs ? "text-black" : isHome ? "text-black" : "text-black"
//               }
//             />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLinks = ({ textColor }) => (
//   <>
//     <Link
//       to="/"
//       // home mai hudha ra home ma click garda top ma pugna ko lagi
//       onClick={() => {
//         if (location.pathname === "/") {
//           window.scrollTo({ top: 0, behavior: "smooth" });
//         }
//       }}
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       Home
//     </Link>

//     <Link
//       to="/aboutus"
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       About Us
//     </Link>

//     {/* <Link to="/recent-activities" className={`${textColor} hover:text-cyan-500 font-semibold transition`}>Recent Activities</Link> */}

//     <Link
//       to="/ourwork"
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       Our Work
//     </Link>

// <Link
//       to="/career"
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       Career
//     </Link>


// <Link
//       to="/volunteer"
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       Volunteer
//     </Link>

//     <Link
//       to="/account"
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       Donate
//     </Link>
//     <Link
//       to="/contact-us"
//       className={`${textColor} hover:text-cyan-500 font-semibold transition`}
//     >
//       Contact Us
//     </Link>
//   </>
// );

// export default NavBar;














import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English", flag: "🇺🇸" },
  { code: "fr", lang: "French", flag: "🇫🇷" },
  { code: "np", lang: "Nepali", flag: "🇳🇵" },
  { code: "ar", lang: "Arabic", flag: "🇸🇦" },
];

const LanguageSwitcher = ({ textColor }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeDropdown();
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
    const handleClickOutside = (e) => {
      if (!e.target.closest('.language-switcher')) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [i18n.language]);

  return (
    <div className="language-switcher relative">
      <button
        onClick={toggleDropdown}
        className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${textColor}`}
        aria-label="Change language"
      >
        <img src="images/world.png" strokeLinecap="round"
            className="h-5 w-5" 
                     
         alt="multilanguageImg" />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.0551 1H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> */}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          {languages.map((lng) => (
            <button
              key={lng.code}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                i18n.language === lng.code
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => changeLanguage(lng.code)}
            >
              <span className="mr-2 text-xl">{lng.flag}</span>
              {lng.lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  const location = useLocation();
  const isAboutUs = location.pathname === "/aboutus";
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY) {
      setShowNavbar(true);
    }

    if (menuOpen && currentScrollY > 100) {
      setMenuOpen(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <nav
      className={`fixed mx-auto bg-[#f6f6f6] top-0 left-0 w-full z-50 transform shadow-[0_9px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-6 py-2 flex items-center justify-between">
        <Link to="/">
          <img src="images/overlap.png" className="w-[70px]" alt="overlapImg" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          <NavLinks textColor={"text-black"} />
          <LanguageSwitcher textColor={"text-black"} />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher textColor={"text-black"} />
          <button
            onClick={toggleMenu}
            className={`${isAboutUs ? "text-black" : "text-black"}`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: isAboutUs
              ? "white"
              : isHome
              ? "transparent"
              : "#0a1733",
          }}
          className="md:hidden px-4 pb-6 pt-4"
        >
          <div className="flex flex-col gap-6 mt-4">
            <NavLinks
              textColor={
                isAboutUs ? "text-black" : isHome ? "text-black" : "text-black"
              }
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ textColor }) => {
  const location = useLocation();
  
  return (
    <>
      <Link
        to="/"
        onClick={() => {
          if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        Home
      </Link>

      <Link
        to="/aboutus"
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        About Us
      </Link>

      <Link
        to="/ourwork"
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        Our Work
      </Link>

      <Link
        to="/career"
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        Career
      </Link>

      <Link
        to="/volunteer"
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        Volunteer
      </Link>

      <Link
        to="/account"
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        Donate
      </Link>

      <Link
        to="/contact-us"
        className={`${textColor} hover:text-cyan-500 font-semibold transition`}
      >
        Contact Us
      </Link>
    </>
  );
};

export default NavBar;