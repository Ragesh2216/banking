import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ArchiveDop = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    closeMenu?.();
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Escape":
        setIsOpen(false);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        toggleDropdown();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-10" ref={menuRef}>
      <button
        type="button"
        className="navLink text-slate-800 font-medium text-base flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
        id="archive-menu-button"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="archive-menu"
      >
        ^                                                                        
      </button>

      {isOpen && (
        <div
          id="archive-menu"
          className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in duration-200"
          role="menu"
          aria-labelledby="archive-menu-button"
        >
          <div className="py-1" role="none">
            <Link
              to="/" 
              onClick={closeDropdown}
              className="navLink block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100 transition-colors duration-150 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
              tabIndex="0"
            >
              Home Page 1
            </Link>
            <Link
              to="/homepage2" 
              onClick={closeDropdown}
              className="navLink block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100 transition-colors duration-150 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
              tabIndex="0"
            >
              Home Page 2
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchiveDop;