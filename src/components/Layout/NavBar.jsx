
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Hamburger & Close icons (install lucide-react)

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black/30 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <h1 className="text-3xl font-bold text-white">Polaris</h1> */}
        <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 ">
          <NavLinks />
        </div>

        {/* Hamburger button */}
        <button onClick={toggleMenu} className="text-white md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div  className=" md:hidden px-4 pb-6 pt-4">
        {/* // <div style={{ backgroundColor: "#001219" }} className="backdrop-blur-md md:hidden px-4 pb-6 pt-4"> */}

          <div className="flex flex-col gap-6 mt-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

// 👇 Reusable links component
const NavLinks = () => (
  <>
    <a href="#about" className="text-white hover:text-gray-300 font-semibold transition">About Us</a>
    <a href="#trafficking" className="text-white hover:text-gray-300 font-semibold transition">Human Trafficking</a>
    <a href="#work" className="text-white hover:text-gray-300 font-semibold transition">Our Work</a>
    <a href="#help" className="text-white hover:text-gray-300 font-semibold transition">How to Help</a>
    <a href="#donate" className="text-white hover:text-gray-300 font-semibold transition">Donate</a>
  </>
);

export default NavBar;
