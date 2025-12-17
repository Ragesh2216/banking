import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeLink, setActiveLink] = useState(null);

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Enhanced social icons
  const socialIcons = [
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
  ];

  // Banking Services - Now centered for mobile
  const bankingServices = [
    { 
      label: "Personal Banking", 
      url: "/services", 
      icon: <FaUserTie className="w-5 h-5" />,
      description: "Personalized banking solutions"
    },
    { 
      label: "Business Banking", 
      url: "/services", 
      icon: <FaBriefcase className="w-5 h-5" />,
      description: "Business growth support"
    },
    { 
      label: "Loans & Mortgages", 
      url: "/services", 
      icon: <FaHome className="w-5 h-5" />,
      description: "Home and business financing"
    },
    { 
      label: "Investment Services", 
      url: "/services", 
      icon: <FaChartLine className="w-5 h-5" />,
      description: "Wealth management"
    }
  ];

  // Quick Links - Centered for mobile
  const quickLinks = [
    { 
      label: "Home", 
      url: "/", 
      icon: <FaHome className="w-5 h-5" />
    },
    { 
      label: "About", 
      url: "/about", 
      icon: <FaBuilding className="w-5 h-5" />
    },
    { 
      label: "Services", 
      url: "/services", 
      icon: <FaHandHoldingUsd className="w-5 h-5" />
    },
    { 
      label: "Contact", 
      url: "/contact", 
      icon: <FaEnvelope className="w-5 h-5" />
    }
  ];

  // Stats
  const stats = [
    { 
      number: "150+", 
      label: "Years Serving", 
      icon: <FaBuilding className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "5M+", 
      label: "Customers", 
      icon: <FaUserTie className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500"
    },
    { 
      number: "$500B+", 
      label: "Assets", 
      icon: <FaChartLine className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: "2,500+", 
      label: "Branches", 
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Legal Links
  const legalLinks = [
    { label: "Privacy Policy", url: "/privacy", icon: <FaUserShield className="w-4 h-4" /> },
    { label: "Terms & Conditions", url: "/terms", icon: <FaFileContract className="w-4 h-4" /> },
    { label: "Security Policy", url: "/security-policy", icon: <FaShieldAlt className="w-4 h-4" /> },
    { label: "Disclosures", url: "/disclosures", icon: <FaIdCard className="w-4 h-4" /> },
    { label: "Careers", url: "/careers", icon: <FaBriefcase className="w-4 h-4" /> },
    { label: "Report Fraud", url: "/fraud", icon: <FaShieldAlt className="w-4 h-4" /> }
  ];

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 py-16 border-t border-gray-300 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed right-8 bottom-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <FaChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            
            {/* Bank Info */}
            <motion.div 
              className="lg:col-span-1 text-center md:text-left"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex justify-center md:justify-start items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg"
                  animate={pulseAnimation}
                  whileHover={{ rotate: 10 }}
                >
                  <FaBuilding className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h1 
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  TrustBank
                </motion.h1>
              </motion.div>
              
              <motion.p 
                className="text-gray-600 leading-relaxed mb-6 text-sm"
                variants={fadeInUp}
              >
                Your trusted financial partner for over 150 years. We provide secure banking solutions, innovative financial products, and personalized service.
              </motion.p>

              {/* Social Icons */}
              <motion.div 
                className="flex justify-center md:justify-start gap-3 mb-6"
                variants={staggerContainer}
              >
                {socialIcons.map((social) => (
                  <motion.div
                    key={social.id}
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 15
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
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
                  </motion.div>
                ))}
              </motion.div>

              {/* Security Badges */}
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-3"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, x: 5 }}
                  variants={scaleIn}
                >
                  <motion.div
                    animate={floatAnimation}
                  >
                    <FaShieldAlt className="text-green-500 w-5 h-5" />
                  </motion.div>
                  <span className="text-sm text-gray-700 font-medium">FDIC Insured</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, x: -5 }}
                  variants={scaleIn}
                >
                  <motion.div
                    animate={rotateAnimation}
                  >
                    <FaLock className="text-blue-500 w-5 h-5" />
                  </motion.div>
                  <span className="text-sm text-gray-700 font-medium">256-bit SSL</span>
                </motion.div>
              </motion.div>
            </motion.div>

         {/* Banking Services - Optimized for Mobile */}
<motion.div 
  className="lg:col-span-1"
  variants={fadeInUp}
>
  <motion.div 
    className="flex items-center gap-2 mb-6 justify-center"
    whileHover={{ x: 5 }}
  >
    <motion.div
      animate={floatAnimation}
    >
      <FaHandHoldingUsd className="w-6 h-6 text-blue-600" />
    </motion.div>
    <h5 className="text-gray-800 text-lg font-semibold">Banking Services</h5>
  </motion.div>
  
  {/* Mobile: Full width, centered content */}
  <div className="md:hidden">
    <ul className="space-y-2">
      {bankingServices.map((service, index) => (
        <motion.li 
          key={index}
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
        >
          <Link 
            to={service.url} 
            className="group flex flex-col items-center text-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg hover:shadow-md"
          >
            <motion.div 
              className="text-blue-500 mb-2"
              animate={{ 
                rotate: [0, 10, -10, 0],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              {service.icon}
            </motion.div>
            <span className="font-medium">{service.label}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
  
  {/* Desktop: Normal layout */}
  <div className="hidden md:block">
    <ul className="space-y-2">
      {bankingServices.map((service, index) => (
        <motion.li 
          key={index}
          variants={fadeInUp}
          whileHover={{ x: 10 }}
          onMouseEnter={() => setActiveLink(service.label)}
          onMouseLeave={() => setActiveLink(null)}
        >
          <Link 
            to={service.url} 
            className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg hover:shadow-md"
          >
            <motion.div 
              className="text-blue-500"
              animate={{ 
                rotate: activeLink === service.label ? [0, 10, -10, 0] : 0,
                scale: activeLink === service.label ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <div className="flex-1">
              <span>{service.label}</span>
              <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">
                {service.description}
              </span>
            </div>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ 
                x: activeLink === service.label ? 0 : -10,
                opacity: activeLink === service.label ? 1 : 0
              }}
            >
              <FaExternalLinkAlt className="w-3 h-3" />
            </motion.div>
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
</motion.div>
            
            {/* Quick Links - Centered for Mobile */}
            <motion.div 
              className="lg:col-span-1"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex items-center gap-2 mb-6 justify-center"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  animate={rotateAnimation}
                >
                  <FaSitemap className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h5 className="text-gray-800 text-lg font-semibold">Quick Links</h5>
              </motion.div>
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    className="w-full md:w-auto"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setActiveLink(link.label)}
                    onMouseLeave={() => setActiveLink(null)}
                  >
                    <Link 
                      to={link.url} 
                      className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg hover:shadow-md justify-center md:justify-start"
                    >
                      <motion.div 
                        className="text-blue-500"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity }
                        }}
                      >
                        {link.icon}
                      </motion.div>
                      <span>{link.label}</span>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: activeLink === link.label ? 1 : 0,
                          x: activeLink === link.label ? 0 : -10
                        }}
                      >
                        <FaExternalLinkAlt className="w-3 h-3 ml-auto" />
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
  
            {/* Contact Info - NOW CENTERED FOR MOBILE */}
            <motion.div 
              className="lg:col-span-1"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex items-center gap-2 mb-6 justify-center md:justify-start"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  animate={floatAnimation}
                >
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h5 className="text-gray-800 text-lg font-semibold text-center md:text-left">Get In Touch</h5>
              </motion.div>
              
              <div className="space-y-5">
                <motion.div 
                  className="flex flex-col items-center md:items-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-2">
                    <motion.div 
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <motion.div
                        animate={floatAnimation}
                      >
                        <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </motion.div>
                    <div className="text-center md:text-left">
                      <p className="text-sm text-gray-800 font-medium">Education Hub</p>
                      <p className="text-sm text-gray-600">MMR Complex, Salem</p>
                      <p className="text-sm text-gray-600">Tamil Nadu, India - 636008</p>
                    </div>
                  </div>
                  
                  <motion.a
                    href="https://www.google.com/maps/search/?api=1&query=MMR+COMPLEX,+Salem,+Tamil+Nadu+636008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mt-2 justify-center md:justify-start"
                    whileHover={{ x: 5 }}
                  >
                    <span>View on Google Maps</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </motion.div>
                  </motion.a>
                </motion.div>
                
                <div className="space-y-3">
                  <motion.div 
                    className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaPhoneAlt className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </motion.div>
                    <div className="text-center md:text-left">
                      <a href="tel:+18001234567" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 block font-medium">
                        Personal: 1-800-123-4567
                      </a>
                      <a href="tel:+18007654321" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 block font-medium">
                        Business: 1-800-765-4321
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        animate={pulseAnimation}
                      >
                        <FaEnvelope className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </motion.div>
                    <a href="mailto:support@trustbank.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-center md:text-left">
                      support@trustbank.com
                    </a>
                  </motion.div>
                </div>

                {/* Banking Hours - NOW CENTERED FOR MOBILE */}
                <motion.div 
                  className="pt-4 mt-4 border-t border-gray-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                    <motion.div
                      animate={rotateAnimation}
                    >
                      <FaUserGraduate className="w-5 h-5 text-blue-500" />
                    </motion.div>
                    <p className="text-sm text-gray-800 font-medium text-center md:text-left">Customer Service</p>
                  </div>
                  <p className="text-xs text-gray-600 text-center md:text-left">24/7 Phone & Online Support</p>
                  <p className="text-xs text-gray-600 text-center md:text-left">Branch Hours: Mon-Fri 9AM-5PM</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Modern Animated Divider */}
          <motion.div 
            className="relative py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                x: ['-50%', '-50%', '-50%']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-gray-200 group cursor-default"
                variants={scaleIn}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg shadow-md`}>
                    <motion.div
                      animate={floatAnimation}
                    >
                      <div className="text-white">{stat.icon}</div>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1 
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Footer */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {legalLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Link
                    to={link.url}
                    className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-white px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-md"
                  >
                    <motion.span 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Regulatory Information */}
          <motion.div 
            className="mt-6 pt-6 border-t border-gray-300 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xs text-gray-500">
              ©{currentYear} TrustBank. All rights reserved. TrustBank is a registered trademark.
              <br />
              Mortgage loans originated by TrustBank, NMLS ID #123456. All loans subject to credit approval.
              <br />
              This institution is not federally insured by NCUA.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;