import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "404 — Page Not Found | Stackly";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className={`max-w-md w-full text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-2">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 text-sm">
            <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">
              {location.pathname}
            </code>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Link
            to="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm mb-4">Quick Links</p>
          <div className="flex justify-center space-x-6">
            <Link to="/services" className="text-blue-600 hover:text-blue-700 text-sm">
              Services
            </Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-700 text-sm">
              About
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}