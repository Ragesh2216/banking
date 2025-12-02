import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-gray-300 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-blue-700">
        
        {/* Bank Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-3 mb-4">
            <AccountBalanceIcon className="text-blue-300 text-4xl" />
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              TrustBank
            </h1>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Your trusted financial partner for over 150 years. We provide secure banking solutions, innovative financial products, and personalized service to help you achieve your financial goals.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: <FacebookIcon className="hover:text-blue-300 transition-colors duration-200" />, url: "#" },
              { icon: <TwitterIcon className="hover:text-blue-400 transition-colors duration-200" />, url: "#" },
              { icon: <LinkedInIcon className="hover:text-blue-500 transition-colors duration-200" />, url: "#" },
              { icon: <InstagramIcon className="hover:text-pink-400 transition-colors duration-200" />, url: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center hover:bg-blue-700/50 transition-colors duration-200 backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Security Badges */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <div className="flex items-center space-x-2 bg-blue-800/30 px-3 py-2 rounded-lg">
              <SecurityIcon className="text-green-400 w-4 h-4" />
              <span className="text-xs text-gray-300">FDIC Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-800/30 px-3 py-2 rounded-lg">
              <VerifiedUserIcon className="text-green-400 w-4 h-4" />
              <span className="text-xs text-gray-300">256-bit SSL</span>
            </div>
          </div>
        </div>

        {/* Banking Services */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Banking Services</h5>
          <ul className="space-y-3">
            {[
              { label: "Personal Banking", url: "/404" },
              { label: "Business Banking", url: "/404" },
              { label: "Loans & Mortgages", url: "/404" },
              { label: "Investment Services", url: "/404" },
            
            ].map((service, index) => (
              <li key={index}>
                <a 
                  href={service.url} 
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { label: "home", url: "/" },
              { label: "About", url: "/about" },
              { label: "services", url: "/services" },
              { label: "contact", url: "/contact" },
          
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
  {/* Contact Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
              <LocationOnIcon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 mb-2 md:mb-0" />
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300 font-medium">Education Hub</p>
                <p className="text-sm text-gray-400">MMR Complex</p>
                <p className="text-sm text-gray-400">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-400">India - 636008</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MMR+COMPLEX,+Salem,+Tamil+Nadu+636008"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-blue-300 flex-shrink-0" />
              <div className="text-left">
                <a href="tel:+18001234567" className="text-sm text-gray-400 hover:text-blue-300 transition-colors duration-200 block">
                  Personal: 1-800-123-4567
                </a>
                <a href="tel:+18007654321" className="text-sm text-gray-400 hover:text-blue-300 transition-colors duration-200 block">
                  Business: 1-800-765-4321
                </a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <EmailIcon className="w-5 h-5 text-blue-300 flex-shrink-0" />
              <a href="mailto:support@trustbank.com" className="text-sm text-gray-400 hover:text-blue-300 transition-colors duration-200">
                support@trustbank.com
              </a>
            </div>

            {/* Banking Hours */}
            <div className="pt-4 border-t border-blue-700">
              <p className="text-sm text-gray-300 font-medium mb-1">Customer Service</p>
              <p className="text-xs text-gray-400">24/7 Phone & Online Support</p>
              <p className="text-xs text-gray-400">Branch Hours: Mon-Fri 9AM-5PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} TrustBank. Member FDIC. Equal Housing Lender.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy", url: "/privacy" },
              { label: "Terms & Conditions", url: "/terms" },
              { label: "Security Policy", url: "/security-policy" },
              { label: "Disclosures", url: "/disclosures" },
              { label: "Careers", url: "/careers" },
              { label: "Report Fraud", url: "/fraud" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-blue-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-blue-800 text-center">
          <p className="text-xs text-gray-500">
            TrustBank • Routing Number: 123456789 • Accounts insured up to $250,000 by FDIC
            <br />
            Mortgage loans originated by TrustBank, NMLS ID #123456. All loans subject to credit approval.
          </p>
        </div>

        {/* Banking Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { number: "150+", label: "Years Serving" },
            { number: "5M+", label: "Customers" },
            { number: "$500B+", label: "Assets" },
            { number: "2,500+", label: "Branches" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-blue-300">{stat.number}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Regulatory Information */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            ©{currentYear} TrustBank. All rights reserved. TrustBank is a registered trademark.
            <br />
            This institution is not federally insured by NCUA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;