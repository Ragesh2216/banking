import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);
  const closeHomeDropdown = () => setIsHomeDropdownOpen(false);

  const handleLogoClick = () => {
    closeMenu();
  };

  // Check if we're on the homepage2 route
  const isHomePage2 = location.pathname === "/homepage2";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#c416e7ff] to-[#c416e7ff] fixed top-0 left-0 w-full shadow-md z-[999]">
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <div className="z-50">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img src={logo} width={130} alt="Site Logo" />
          </Link>
        </div>

        {/* Mobile menu toggle - Always show on mobile */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none hover:bg-white/30 rounded-lg p-2 transition-all duration-200 hover:scale-105"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // Close (X) icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            lg:flex
            flex-col lg:flex-row
            gap-0 lg:gap-6
            items-center
            text-base font-medium text-slate-800
            absolute lg:static
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            border border-gray-200 lg:border-none
            shadow-xl lg:shadow-none
            py-0 lg:py-0
            rounded-lg lg:rounded-none
            z-40
            transition-all duration-300 ease-in-out
          `}
        >
          {/* Home Dropdown - Always visible */}
          <li className="relative w-full lg:w-auto border-b border-gray-200 lg:border-none">
            <div className="flex items-center justify-center lg:justify-start lg:mr-2 lg:translate-x-4 px-4 py-3 lg:py-0 w-full">
              <Link 
                to="/"
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="flex items-center justify-center lg:justify-start lg:mr-4"
              > 
                {isHomePage2 ? "Home2" : "Home"}
              </Link>
              
              {/* Always show dropdown toggle button */}
              <button
                onClick={toggleHomeDropdown}
                className="p-2 hover:bg-gray-100 lg:hover:bg-white/20 rounded-lg transition-colors duration-200 absolute right-4 lg:relative lg:right-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isHomeDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu - Always show, but with different content based on page */}
            <div
              className={`
                ${isHomeDropdownOpen ? "block" : "hidden"}
                lg:absolute
                top-full left-0 lg:left-0
                w-full lg:w-48
                bg-white
                border border-gray-200
                rounded-lg lg:rounded-lg
                shadow-lg
                py-2
                z-50
                mt-0 lg:mt-1
              `}
            >
              <Link
                to={isHomePage2 ? "/" : "/homepage2"}
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="block py-2 px-4 hover:bg-gray-100 hover:text-purple-700 transition-colors duration-200 text-center lg:text-left"
              >
                {isHomePage2 ? "Home" : "Home2"}
              </Link>
            </div>
          </li>

          {/* Only show other navigation items if NOT on homepage2 */}
          {!isHomePage2 ? (
            <>
              <li className="w-full lg:w-auto border-b border-gray-200 lg:border-none">
                <Link
                  to="/dashboards"
                  onClick={closeMenu}
                  className="block text-center py-3 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700 w-full"
                >
                  Dashboard
                </Link>
              </li>

              

              <li className="w-full lg:w-auto border-b border-gray-200 lg:border-none">
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block text-center py-3 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700 w-full"
                >
                  About us
                </Link>
              </li>

              <li className="w-full lg:w-auto border-b border-gray-200 lg:border-none">
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="block text-center py-3 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700 w-full"
                >
                  Services
                </Link>
              </li>

              <li className="w-full lg:w-auto border-b border-gray-200 lg:border-none">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block text-center py-3 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700 w-full"
                >
                  Contact
                </Link>
              </li>

              <li className="w-full lg:w-auto border-b border-gray-200 lg:border-none">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block text-center bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800 transition-colors duration-200 py-3 px-6 rounded-lg font-semibold w-full lg:w-auto"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            // Show only the Latest link when on homepage2
            <li className="w-full lg:w-auto border-b border-gray-200 lg:border-none">
              <Link
                to="/latest"
                onClick={closeMenu}
                className="block text-center py-3 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700 w-full"
              >
                Pricing
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;