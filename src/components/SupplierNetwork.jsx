import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Business,
  Group,
  Security,
  TrendingUp,
  CheckCircle,
  Speed,
  Public,
  Analytics,
  Handshake,
  VerifiedUser,
  Timeline,
  PlayArrow,
  Star,
  LocationOn,
  Link as LinkIcon
} from "@mui/icons-material";

const SupplierNetwork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const networkFeatures = [
    {
      icon: <Business className="text-4xl" />,
      title: "Global Supplier Directory",
      description: "Access thousands of verified suppliers across 150+ countries with comprehensive profiles",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Group className="text-4xl" />,
      title: "Collaborative Platform",
      description: "Real-time communication and collaboration tools for seamless supplier relationships",
      color: "from-green-500 to-emerald-500",
      delay: 100
    },
    {
      icon: <Security className="text-4xl" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and monitoring for all supplier relationships",
      color: "from-purple-500 to-pink-500",
      delay: 200
    },
    {
      icon: <Analytics className="text-4xl" />,
      title: "Performance Analytics",
      description: "Real-time performance tracking and supplier scorecards with AI-powered insights",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const networkStats = [
    { number: "50K+", label: "Verified Suppliers", icon: <VerifiedUser /> },
    { number: "150+", label: "Countries", icon: <Public /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star /> },
    { number: "24/7", label: "Support", icon: <Speed /> }
  ];

  const supplierCategories = [
    {
      category: "Raw Materials",
      count: "15,000+",
      color: "from-blue-500 to-cyan-500",
      description: "Metals, plastics, chemicals, and agricultural products"
    },
    {
      category: "Components",
      count: "12,000+",
      color: "from-green-500 to-emerald-500",
      description: "Electronic, mechanical, and industrial components"
    },
    {
      category: "Manufacturing",
      count: "8,000+",
      color: "from-purple-500 to-pink-500",
      description: "Contract manufacturers and production facilities"
    },
    {
      category: "Logistics",
      count: "6,000+",
      color: "from-orange-500 to-red-500",
      description: "Transportation, warehousing, and distribution"
    },
    {
      category: "Services",
      count: "9,000+",
      color: "from-indigo-500 to-purple-500",
      description: "Professional services and technical support"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Supplier Discovery",
      description: "Search and discover qualified suppliers using AI-powered matching",
      icon: <Business />
    },
    {
      step: "02",
      title: "Verification & Onboarding",
      description: "Comprehensive vetting and seamless onboarding process",
      icon: <VerifiedUser />
    },
    {
      step: "03",
      title: "Integration",
      description: "Connect supplier systems with your procurement workflow",
      icon: <LinkIcon />
    },
    {
      step: "04",
      title: "Collaboration",
      description: "Real-time communication and order management",
      icon: <Group />
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description: "Continuous monitoring and relationship optimization",
      icon: <Analytics />
    }
  ];

  const benefitsData = [
    {
      title: "Reduced Sourcing Time",
      description: "Cut supplier discovery and onboarding time by up to 70% with automated processes",
      improvement: "70%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cost Savings",
      description: "Achieve 15-25% cost reduction through competitive bidding and optimized supplier selection",
      improvement: "25%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quality Improvement",
      description: "Access pre-vetted suppliers with proven track records and quality certifications",
      improvement: "99.8%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Sample supplier data for the interactive map
  const sampleSuppliers = [
    { name: "Tech Components Inc.", location: "Germany", rating: 4.8, category: "Components" },
    { name: "Global Materials Co.", location: "USA", rating: 4.9, category: "Raw Materials" },
    { name: "Precision Manufacturing", location: "Japan", rating: 4.7, category: "Manufacturing" },
    { name: "Logistics Solutions", location: "Singapore", rating: 4.6, category: "Logistics" },
    { name: "Quality Services Ltd.", location: "UK", rating: 4.8, category: "Services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Network Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute rounded-full bg-blue-500"
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Global Supplier Network
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 text-gray-300 max-w-3xl mx-auto px-4">
              Connect with 50,000+ verified suppliers worldwide. Streamline procurement, reduce risks, and build resilient supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/login"
                  className="inline-block bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 shadow-2xl w-full sm:w-auto text-center"
                >
                  Join the Network
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/404"
                  className="inline-block border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <PlayArrow className="mr-2 inline-block" />
                  Watch Overview
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Supplier Map Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-6xl mx-auto mt-8 lg:mt-12 px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
              <div className="text-white font-semibold text-lg">Global Supplier Distribution</div>
              <div className="text-blue-300 text-sm">Live Network</div>
            </div>
            
            {/* Simplified World Map with Supplier Dots */}
            <div className="h-32 lg:h-48 bg-black/20 rounded-lg p-4 relative">
              {/* World Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full flex items-center justify-center">
                  <Public className="text-4xl lg:text-6xl text-white" />
                </div>
              </div>
              
              {/* Animated Supplier Dots */}
              {sampleSuppliers.map((supplier, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full cursor-pointer"
                  style={{
                    left: `${15 + index * 17}%`,
                    top: `${25 + (index % 3) * 25}%`,
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="absolute -top-6 lg:-top-8 -left-4 bg-white text-gray-800 text-xs p-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    <div className="font-semibold">{supplier.name}</div>
                    <div className="flex items-center">
                      <LocationOn className="w-3 h-3 mr-1" />
                      {supplier.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-500" />
                      {supplier.rating}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-300 mt-2 gap-1">
              <span>50,000+ Active Suppliers</span>
              <span className="text-green-300">150+ Countries</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-12 lg:h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Network Features
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to build and manage a world-class supplier ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {networkFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 lg:mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {networkStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 lg:p-6"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-3 lg:mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-2xl lg:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Supplier Categories */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Supplier Categories
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Access comprehensive supplier coverage across all major categories and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {supplierCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-3 lg:mb-4`}>
                  <Business className="text-xl lg:text-2xl" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h3>
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {category.count}
                </div>
                <p className="text-gray-600 text-xs lg:text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Simple, streamlined process to connect with the right suppliers and build lasting partnerships.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-base lg:text-lg mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-3 lg:mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Business Benefits
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Transform your supplier relationships and achieve measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-full -mr-10 -mt-10 lg:-mr-12 lg:-mt-12 opacity-10`}></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-4 lg:mb-6 mx-auto`}
                >
                  <TrendingUp className="text-xl lg:text-2xl" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 text-center">
                  {benefit.title}
                </h3>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="text-3xl lg:text-4xl font-bold text-center mb-3 lg:mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                >
                  {benefit.improvement}
                </motion.div>
                
                <p className="text-gray-600 text-center leading-relaxed text-sm lg:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Ready to Expand Your Supplier Network?
            </h2>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of companies that have transformed their supply chain with our global supplier network.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/login"
                  className="inline-block bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl w-full sm:w-auto text-center"
                >
                  Get Started Free
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact"
                  className="inline-block border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Schedule Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 mb-6 lg:mb-8">See what our partners say about the supplier network</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8">
              {[
                {
                  quote: "Reduced our supplier onboarding time by 80% and improved quality standards significantly.",
                  company: "Global Manufacturing Inc.",
                  role: "Chief Procurement Officer"
                },
                {
                  quote: "The network helped us diversify our supplier base and mitigate supply chain risks.",
                  company: "Tech Solutions Ltd.",
                  role: "Supply Chain Director"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 lg:p-6 text-left"
                >
                  <div className="flex items-center mb-3 lg:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 lg:mb-4 italic text-sm lg:text-base">"{testimonial.quote}"</p>
                  <div className="text-xs lg:text-sm text-gray-600">
                    <div className="font-semibold">{testimonial.company}</div>
                    <div>{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupplierNetwork;