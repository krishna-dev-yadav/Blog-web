import React, { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: -0, duration: 1, ease: 'power2.out' }
        );
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div>
      <nav
        ref={navRef}
        className="flex justify-between items-center px-6 py-4 shadow-2xl border-none fixed top-0 left-0 w-full z-50 "
      >
        <div className="flex items-center px-7 py-2 shadow-xl border-none rounded-xl">
          <img src="writing.png" alt="Blog Logo" className="w-8 h-8" />
          <span className="ml-2 text-xl text-white font-semibold text-gray-800">BlogPost</span>
        </div>
        <div className="hidden md:flex space-x-8 shadow-xl px-6 py-2 rounded-xl border-none w-1/4 justify-between ">
          <NavLink
            to="/home"
            className="relative text-white hover:text-blue-700 font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
          >
            Home
          </NavLink>
          <Link
            to="/about"
            className="relative text-white hover:text-blue-700 font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
          >
            About
          </Link>
          <Link
            to="/service"
            className="relative text-white hover:text-blue-700 font-medium transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
          >
            Service
          </Link>
        </div>
        <div className="flex items-center space-x-3 shadow-xl py-2 rounded-xl px-5 border-none">
          <button className="px-4 py-2 text-white hover:text-blue-700 hover:bg-blue-50 rounded-lg transition duration-300 transform hover:scale-105">
            Get started
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-700">
            Create Blog
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
