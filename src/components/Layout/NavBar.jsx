
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const NavBar = () => {
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
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY, menuOpen]);

//   return (
//     <nav 
//       // style={{ background: '#f5f0eb' }} 
//       className={`backdrop-blur-md fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />

//         {/* Desktop menu */}
//         <div className="hidden md:flex gap-10 ">
//           <NavLinks />
//         </div>

//         {/* Hamburger button */}
//         <button onClick={toggleMenu} className="text-white md:hidden">
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div style={{ background: "var(--color-navOpen)"}} className="md:hidden px-4 pb-6 pt-4">
//           <div className="flex flex-col gap-6 mt-4">
//             <NavLinks />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLinks = () => (
//   <>
//     <a style={{ color: "var(--color-navText)"}} href="#about" className="hover:text-teal-500 font-semibold transition">About Us</a>
//     <a style={{ color: "var(--color-navText)"}} href="#trafficking" className="hover:text-teal-500 font-semibold transition">Human Trafficking</a>
//     <a style={{ color: "var(--color-navText)"}} href="#work" className="hover:text-teal-500 font-semibold transition">Our Work</a>
//     <a style={{ color: "var(--color-navText)"}} href="#help" className="hover:text-teal-500 font-semibold transition">How to Help</a>
//     <a style={{ color: "var(--color-navText)"}} href="#donate" className="hover:text-teal-500 font-semibold transition">Donate</a>
//   </>
// );

// export default NavBar;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
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
    <nav 
      className={`backdrop-blur-md fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="images/overlap.png" className='w-[70px]' alt="overlapImg" />

        {/* Desktop menu - white text */}
        <div className="hidden md:flex gap-10">
          <NavLinks textColor="text-white" />
        </div>

        {/* Hamburger button */}
        <button onClick={toggleMenu} className="text-white md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--color-navOpen)"}} className="md:hidden px-4 pb-6 pt-4">
          <div className="flex flex-col gap-6 mt-4">
            <NavLinks textColor="[color:var(--color-navText)]" />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ textColor }) => (
  <>
    <a style={{ color: textColor === 'text-white' ? '' : "var(--color-navText)"}} 
       className={`${textColor} hover:text-teal-500 font-semibold transition`} 
       href="#about">About Us</a>
    <a style={{ color: textColor === 'text-white' ? '' : "var(--color-navText)"}} 
       className={`${textColor} hover:text-teal-500 font-semibold transition`} 
       href="#trafficking">Human Trafficking</a>
    <a style={{ color: textColor === 'text-white' ? '' : "var(--color-navText)"}} 
       className={`${textColor} hover:text-teal-500 font-semibold transition`} 
       href="#work">Our Work</a>
    <a style={{ color: textColor === 'text-white' ? '' : "var(--color-navText)"}} 
       className={`${textColor} hover:text-teal-500 font-semibold transition`} 
       href="#help">How to Help</a>
    <a style={{ color: textColor === 'text-white' ? '' : "var(--color-navText)"}} 
       className={`${textColor} hover:text-teal-500 font-semibold transition`} 
       href="#donate">Donate</a>
  </>
);

export default NavBar;