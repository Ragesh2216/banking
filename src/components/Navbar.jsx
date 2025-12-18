import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaTachometerAlt, 
  FaInfoCircle, 
  FaConciergeBell, 
  FaEnvelope, 
  FaSignInAlt, 
  FaDollarSign,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserCircle
} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);
  const closeHomeDropdown = () => setIsHomeDropdownOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Icon mapping
  const iconMap = {
    home: <FaHome className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    dashboard: <FaTachometerAlt className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    about: <FaInfoCircle className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    services: <FaConciergeBell className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    contact: <FaEnvelope className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    login: <FaSignInAlt className="text-white group-hover:text-white transition-colors duration-300" />,
    pricing: <FaDollarSign className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    user: <FaUserCircle className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200" 
          : "bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300"
      }`}
    >
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <div className="z-50">
          <Link 
            to="/" 
            onClick={closeMenu}
            className="hover:opacity-80 transition-all duration-300 hover:scale-105 block group"
          >
            <img 
              src={logo} 
              width={140} 
              alt="Site Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-11"
              }`}
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none hover:bg-gray-100 rounded-xl p-3 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            lg:flex
            flex-col lg:flex-row
            gap-0 lg:gap-2
            items-stretch lg:items-center
            text-base font-medium
            absolute lg:static
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            border border-gray-100 lg:border-none
            shadow-2xl lg:shadow-none
            rounded-2xl lg:rounded-none
            py-0 lg:py-0
            z-40
            transition-all duration-300 ease-in-out
            mt-2 lg:mt-0
            overflow-hidden
          `}
        >
          {/* Home Dropdown - FIXED ALIGNMENT */}
          <li className="relative w-full lg:w-auto border-b border-gray-100 lg:border-none">
            <div className="flex items-center justify-between lg:justify-start px-4 py-3 lg:py-0 w-full hover:bg-gray-50 lg:hover:bg-transparent group">
              <Link 
                to="/"
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="flex items-center gap-3 group-hover:text-purple-600 transition-all duration-300 text-gray-800 py-2 lg:py-2 px-2 lg:px-3 rounded-lg hover:bg-gray-50 lg:hover:bg-gray-100 flex-1"
              > 
                <div className="group-hover:scale-110 transition-transform duration-300 w-5 flex-shrink-0">
                  {iconMap.home}
                </div>
                <span className="font-semibold text-left">
                  {isHomePage2 ? "Home2" : "Home"}
                </span>
              </Link>
              
              {/* Dropdown toggle button - FIXED POSITIONING */}
              <button
                onClick={toggleHomeDropdown}
                className="p-2 hover:bg-gray-100 lg:hover:bg-gray-200 rounded-lg transition-all duration-300 lg:ml-1 flex-shrink-0"
                aria-label="Toggle home dropdown"
              >
                <FaChevronDown 
                  className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                    isHomeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu - FIXED ALIGNMENT */}
            <div
              className={`
                ${isHomeDropdownOpen ? "block" : "hidden"}
                lg:absolute
                top-full left-0 lg:left-0
                w-full lg:w-56
                bg-white/95 backdrop-blur-sm
                border border-gray-200
                rounded-b-xl lg:rounded-xl
                shadow-xl
                py-2
                z-50
                mt-0 lg:mt-2
              `}
            >
              <Link
                to={isHomePage2 ? "/" : "/homepage2"}
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="flex items-center gap-4 py-3 px-4 hover:bg-gray-50 hover:text-purple-600 transition-all duration-300 group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300 w-5 flex-shrink-0">
                  {iconMap.home}
                </div>
                <span className="font-medium text-sm">
                  {isHomePage2 ? "Switch to Home" : "Switch to Home2"}
                </span>
              </Link>
            </div>
          </li>

          {/* Only show other navigation items if NOT on homepage2 */}
          {!isHomePage2 ? (
            <>
              <NavItem 
                to="/dashboards" 
                icon={iconMap.dashboard}
                text="Dashboard"
                onClick={closeMenu}
                isMobile={isOpen}
              />
              
              <NavItem 
                to="/about" 
                icon={iconMap.about}
                text="About us"
                onClick={closeMenu}
                isMobile={isOpen}
              />
              
              <NavItem 
                to="/services" 
                icon={iconMap.services}
                text="Services"
                onClick={closeMenu}
                isMobile={isOpen}
              />
              
              <NavItem 
                to="/contact" 
                icon={iconMap.contact}
                text="Contact"
                onClick={closeMenu}
                isMobile={isOpen}
              />
              
              {/* Login Button - FIXED ALIGNMENT */}
              <li className="w-full lg:w-auto border-t border-gray-100 lg:border-none px-4 py-4 lg:py-0">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 py-3.5 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 w-5">
                    {iconMap.login}
                  </div>
                  <span>Login</span>
                </Link>
              </li>
            </>
          ) : (
            // Show only the Pricing link when on homepage2
            <NavItem 
              to="/latest" 
              icon={iconMap.pricing}
              text="Pricing"
              onClick={closeMenu}
              isMobile={isOpen}
            />
          )}
        </ul>
      </nav>
    </header>
  );
};

// Updated NavItem component with better alignment
const NavItem = ({ to, icon, text, onClick, isMobile }) => (
  <li className={`w-full lg:w-auto border-b border-gray-100 lg:border-none ${isMobile ? 'px-4' : ''}`}>
    <Link
      to={to}
      onClick={onClick}
      className="group flex items-center gap-3 py-3.5 lg:py-3 px-4 lg:px-5 rounded-lg hover:bg-gray-50 hover:text-purple-600 transition-all duration-300 w-full"
    >
      <div className="group-hover:scale-110 transition-transform duration-300 w-5 flex-shrink-0">
        {icon}
      </div>
      <span className="font-medium text-left">{text}</span>
    </Link>
  </li>
);

export default Navbar;