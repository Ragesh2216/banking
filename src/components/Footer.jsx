import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronUp,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaBuilding,
  FaUserTie,
  FaHome,
  FaBriefcase,
  FaHandHoldingUsd,
  FaChartLine,
  FaFileContract,
  FaUserShield,
  FaIdCard,
  FaSitemap,
  FaUserGraduate,
  FaLock
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show back to top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 py-16 border-t border-gray-300">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed right-8 bottom-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-50 transform hover:scale-110 active:scale-95 ${
            showBackToTop 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <FaChevronUp className="w-6 h-6" />
        </button>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
            
            {/* Bank Info */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md">
                  <FaBuilding className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  TrustBank
                </h1>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Your trusted financial partner for over 150 years. We provide secure banking solutions, innovative financial products, and personalized service.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-3 mb-6">
                {[
                  { 
                    icon: <FaFacebookF className="w-5 h-5" />, 
                    label: "Facebook",
                    color: "hover:bg-blue-600",
                    id: "facebook"
                  },
                  { 
                    icon: <FaTwitter className="w-5 h-5" />, 
                    label: "Twitter",
                    color: "hover:bg-blue-400",
                    id: "twitter"
                  },
                  { 
                    icon: <FaLinkedinIn className="w-5 h-5" />, 
                    label: "LinkedIn",
                    color: "hover:bg-blue-700",
                    id: "linkedin"
                  },
                  { 
                    icon: <FaInstagram className="w-5 h-5" />, 
                    label: "Instagram",
                    color: "hover:bg-pink-600",
                    id: "instagram"
                  }
                ].map((social) => (
                  <Link
                    key={social.id}
                    to="/404"
                    className={`w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 shadow-sm hover:shadow-lg ${social.color} hover:text-white`}
                    aria-label={social.label}
                    title={social.label}
                    onMouseEnter={() => setHoveredIcon(social.id)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <div className={`transition-transform duration-300 ${hoveredIcon === social.id ? 'scale-110' : ''}`}>
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Security Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FaShieldAlt className="text-green-500 w-5 h-5" />
                  <span className="text-sm text-gray-700 font-medium">FDIC Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FaLock className="text-blue-500 w-5 h-5" />
                  <span className="text-sm text-gray-700 font-medium">256-bit SSL</span>
                </div>
              </div>
            </div>

            {/* Banking Services */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <FaHandHoldingUsd className="w-6 h-6 text-blue-600" />
                <h5 className="text-gray-800 text-lg font-semibold">Banking Services</h5>
              </div>
              <ul className="space-y-2">
                {[
                  { label: "Personal Banking", url: "/services", icon: <FaUserTie className="w-4 h-4" /> },
                  { label: "Business Banking", url: "/services", icon: <FaBriefcase className="w-4 h-4" /> },
                  { label: "Loans & Mortgages", url: "/services", icon: <FaHome className="w-4 h-4" /> },
                  { label: "Investment Services", url: "/services", icon: <FaChartLine className="w-4 h-4" /> },
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg hover:shadow-sm"
                    >
                      <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.icon}
                      </div>
                      <span>{service.label}</span>
                      <FaExternalLinkAlt className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <FaSitemap className="w-6 h-6 text-blue-600" />
                <h5 className="text-gray-800 text-lg font-semibold">Quick Links</h5>
              </div>
              <ul className="space-y-2">
                {[
                  { label: "Home", url: "/", icon: <FaHome className="w-4 h-4" /> },
                  { label: "About", url: "/about", icon: <FaBuilding className="w-4 h-4" /> },
                  { label: "Services", url: "/services", icon: <FaHandHoldingUsd className="w-4 h-4" /> },
                  { label: "Contact", url: "/contact", icon: <FaEnvelope className="w-4 h-4" /> },
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg hover:shadow-sm"
                    >
                      <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {link.icon}
                      </div>
                      <span>{link.label}</span>
                      <FaExternalLinkAlt className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <FaEnvelope className="w-6 h-6 text-blue-600" />
                <h5 className="text-gray-800 text-lg font-semibold">Get In Touch</h5>
              </div>
              
              <div className="space-y-5">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-800 font-medium">Education Hub</p>
                      <p className="text-sm text-gray-600">MMR Complex, Salem</p>
                      <p className="text-sm text-gray-600">Tamil Nadu, India - 636008</p>
                    </div>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=MMR+COMPLEX,+Salem,+Tamil+Nadu+636008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mt-2"
                  >
                    <span>View on Google Maps</span>
                    <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <FaPhoneAlt className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <a href="tel:+18001234567" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 block font-medium">
                        Personal: 1-800-123-4567
                      </a>
                      <a href="tel:+18007654321" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 block font-medium">
                        Business: 1-800-765-4321
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <FaEnvelope className="w-5 h-5 text-blue-600" />
                    </div>
                    <a href="mailto:support@trustbank.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                      support@trustbank.com
                    </a>
                  </div>
                </div>

                {/* Banking Hours */}
                <div className="pt-4 mt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUserGraduate className="w-5 h-5 text-blue-500" />
                    <p className="text-sm text-gray-800 font-medium">Customer Service</p>
                  </div>
                  <p className="text-xs text-gray-600">24/7 Phone & Online Support</p>
                  <p className="text-xs text-gray-600">Branch Hours: Mon-Fri 9AM-5PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 pt-12">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { number: "150+", label: "Years Serving", icon: <FaBuilding className="w-6 h-6" /> },
                { number: "5M+", label: "Customers", icon: <FaUserTie className="w-6 h-6" /> },
                { number: "$500B+", label: "Assets", icon: <FaChartLine className="w-6 h-6" /> },
                { number: "2,500+", label: "Branches", icon: <FaMapMarkerAlt className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-gray-200 group cursor-default"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                      <div className="text-blue-600">{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-600">
                  &copy; {currentYear} <span className="font-semibold text-gray-800">TrustBank</span>. Member FDIC. Equal Housing Lender.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Routing Number: 123456789 • Accounts insured up to $250,000 by FDIC
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  { label: "Privacy Policy", url: "/privacy", icon: <FaUserShield className="w-4 h-4" /> },
                  { label: "Terms & Conditions", url: "/terms", icon: <FaFileContract className="w-4 h-4" /> },
                  { label: "Security Policy", url: "/security-policy", icon: <FaShieldAlt className="w-4 h-4" /> },
                  { label: "Disclosures", url: "/disclosures", icon: <FaIdCard className="w-4 h-4" /> },
                  { label: "Careers", url: "/careers", icon: <FaBriefcase className="w-4 h-4" /> },
                  { label: "Report Fraud", url: "/fraud", icon: <FaShieldAlt className="w-4 h-4" /> }
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-white px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-sm"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Regulatory Information */}
            <div className="mt-6 pt-6 border-t border-gray-300 text-center">
              <p className="text-xs text-gray-500">
                ©{currentYear} TrustBank. All rights reserved. TrustBank is a registered trademark.
                <br />
                Mortgage loans originated by TrustBank, NMLS ID #123456. All loans subject to credit approval.
                <br />
                This institution is not federally insured by NCUA.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;