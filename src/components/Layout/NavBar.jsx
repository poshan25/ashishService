import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <nav
      className={`fixed  mx-auto bg-[#f6f6f6] top-0 left-0 w-full z-50 transform shadow-[0_9px_12px_rgba(0,0,0,0.2)]  transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-6 py-2 flex items-center  justify-between">
        <Link to="/">
          <img src="images/overlap.png" className="w-[70px]" alt="overlapImg" />
        </Link>

        {/* Desktop menu with correct text color */}
        <div className="hidden md:flex gap-10">
          <NavLinks textColor={"text-black"} />
        </div>

        {/* Hamburger button with correct text color */}
        <button
          onClick={toggleMenu}
          className={`${isAboutUs ? "text-black" : "text-black"} md:hidden`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
          <div className="flex  flex-col gap-6 mt-4">
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

const NavLinks = ({ textColor }) => (
  <>
    <Link
      to="/"
      // home mai hudha ra home ma click garda top ma pugna ko lagi
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

    {/* <Link to="/recent-activities" className={`${textColor} hover:text-cyan-500 font-semibold transition`}>Recent Activities</Link> */}

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

export default NavBar;
