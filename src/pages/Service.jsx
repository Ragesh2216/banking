import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BankingService() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Personal Banking",
      icon: "👤",
      description: "Comprehensive personal banking solutions including checking, savings, and money market accounts with competitive rates and FDIC insurance.",
      detailsLink: "/personal-banking",
      buttonText: "Open Account",
      features: [
        "FDIC insured up to $250,000",
        "No hidden fees",
        "24/7 mobile banking access",
        "Free debit card & checks",
        "Overdraft protection"
      ],
      stats: "95% customer satisfaction",
      color: "from-blue-500 to-blue-700",
      hoverColor: "from-blue-600 to-blue-800",
      iconColor: "text-blue-400"
    },
    {
      title: "Business Banking",
      icon: "🏢",
      description: "Tailored banking solutions for businesses of all sizes with merchant services, payroll solutions, and business credit lines.",
      detailsLink: "/business-banking",
      buttonText: "Business Solutions",
      features: [
        "Merchant payment processing",
        "Payroll & HR solutions",
        "Business credit lines",
        "Cash management tools",
        "Dedicated relationship manager"
      ],
      stats: "45% growth support",
      color: "from-green-500 to-emerald-600",
      hoverColor: "from-green-600 to-emerald-700",
      iconColor: "text-green-400"
    },
    {
      title: "Loans & Mortgages",
      icon: "🏠",
      description: "Competitive loan products including mortgages, auto loans, personal loans, and home equity lines with flexible terms.",
      detailsLink: "/loans",
      buttonText: "Apply Now",
      features: [
        "Competitive interest rates",
        "Fast approval process",
        "Flexible repayment terms",
        "Online application tracking",
        "Loan pre-approval"
      ],
      stats: "24-hour approval",
      color: "from-purple-500 to-indigo-600",
      hoverColor: "from-purple-600 to-indigo-700",
      iconColor: "text-purple-400"
    },
    {
      title: "Investment Services",
      icon: "📈",
      description: "Professional investment management, retirement planning, and wealth advisory services to grow and protect your assets.",
      detailsLink: "/investments",
      buttonText: "Invest Now",
      features: [
        "Personalized portfolio management",
        "Retirement planning (401k, IRA)",
        "Tax-efficient strategies",
        "Real-time market insights",
        "Certified financial advisors"
      ],
      stats: "12% average annual return",
      color: "from-amber-500 to-yellow-600",
      hoverColor: "from-amber-600 to-yellow-700",
      iconColor: "text-amber-400"
    },
    {
      title: "Credit Cards",
      icon: "💳",
      description: "Premium credit cards with rewards, cashback, travel benefits, and competitive APRs for various credit profiles.",
      detailsLink: "/credit-cards",
      buttonText: "Compare Cards",
      features: [
        "Zero fraud liability",
        "Travel rewards & miles",
        "Cashback on purchases",
        "Contactless payments",
        "Credit score monitoring"
      ],
      stats: "$0 fraud liability",
      color: "from-red-500 to-orange-600",
      hoverColor: "from-red-600 to-orange-700",
      iconColor: "text-red-400"
    },
    {
      title: "Digital Banking",
      icon: "📱",
      description: "Advanced digital banking platform with mobile app, online banking, bill pay, and secure digital wallet solutions.",
      detailsLink: "/digital",
      buttonText: "Go Digital",
      features: [
        "Mobile check deposit",
        "Bill pay & transfers",
        "Digital wallet integration",
        "Budgeting tools",
        "Account aggregation"
      ],
      stats: "5-star app rating",
      color: "from-indigo-500 to-violet-600",
      hoverColor: "from-indigo-600 to-violet-700",
      iconColor: "text-indigo-400"
    }
  ];

  const testimonials = [
    {
      quote: "TrustBank helped me buy my first home with their competitive mortgage rates. The process was smooth and transparent.",
      author: "Sarah Chen",
      company: "First-time Home Buyer",
      rating: 5
    },
    {
      quote: "Our business grew 45% with their customized banking solutions and merchant services. The dedicated support made all the difference.",
      author: "Michael Rodriguez",
      company: "Small Business Owner",
      rating: 5
    },
    {
      quote: "The investment advisors helped me build a retirement portfolio that's grown 12% annually. Professional and trustworthy service.",
      author: "Dr. Emily Watson",
      company: "Retirement Investor",
      rating: 5
    },
    {
      quote: "Switching to digital banking saved me hours each month. The mobile app is intuitive and the customer support is excellent.",
      author: "James Kim",
      company: "Tech Professional",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#2563EB', '#1D4ED8', '#3B82F6', '#0EA5E9', '#1E40AF'][i % 5],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent animate-gradient">
            Secure Banking Solutions for Every Need
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted financial services backed by 150 years of banking excellence. 
            From personal accounts to business solutions, we provide secure banking that grows with you.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5M+", label: "Customers Served", color: "from-blue-500 to-blue-700", icon: "👥" },
              { number: "150+", label: "Years of Trust", color: "from-green-500 to-emerald-600", icon: "🏛️" },
              { number: "$500B+", label: "Assets Managed", color: "from-purple-500 to-indigo-600", icon: "💰" },
              { number: "24/7", label: "Banking Access", color: "from-amber-500 to-yellow-600", icon: "🕒" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative border border-blue-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 ${
                  isHovered === index ? 'border-blue-500' : 'border-transparent'
                } group relative flex flex-col h-full border border-blue-100`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header Section - Fixed height */}
                <div className={`p-8 bg-gradient-to-br ${service.color} text-white relative overflow-hidden group-hover:bg-gradient-to-br ${service.hoverColor} transition-all duration-500 min-h-[180px] flex flex-col justify-center`}>
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold leading-tight drop-shadow-sm">{service.title}</h2>
                  </div>
                  <p className="text-blue-100/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                {/* Content Section - Flexible but consistent */}
                <div className="p-6 relative flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:translate-x-2 transition-transform"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <span className={`${service.iconColor} transform group-hover:scale-125 transition-transform duration-300 flex-shrink-0 mt-0.5`}>
                            ✓
                          </span>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Footer - Fixed at bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100/50 mt-auto">
                    <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {service.stats}
                    </span>
                    <Link
                      to={service.detailsLink}
                      className={`bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm whitespace-nowrap shadow-md`}
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banking Process Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden border border-blue-100">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Our Banking Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Planning",
                  description: "Personalized financial assessment and banking solution planning",
                  icon: "📋",
                  color: "from-blue-500 to-blue-700"
                },
                {
                  step: "02",
                  title: "Account Setup",
                  description: "Fast and secure account opening with digital verification",
                  icon: "🔐",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  step: "03",
                  title: "Service Activation",
                  description: "Activate banking services, cards, and digital access",
                  icon: "⚡",
                  color: "from-purple-500 to-indigo-600"
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "Dedicated relationship management and financial guidance",
                  icon: "🤝",
                  color: "from-amber-500 to-yellow-600"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 relative overflow-hidden shadow-md`}>
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                      <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Customer Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our banking solutions have helped individuals and businesses achieve their financial goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden border border-blue-100"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 group-hover:text-gray-900 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                </blockquote>
                <div className="relative">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology & Platform Stack */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Our Secure Banking Technology
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "FDIC Insured", icon: "🛡️", color: "from-blue-500 to-blue-700" },
                { name: "256-bit SSL", icon: "🔒", color: "from-green-500 to-emerald-600" },
                { name: "Biometric", icon: "👁️", color: "from-purple-500 to-indigo-600" },
                { name: "AI Fraud", icon: "🤖", color: "from-amber-500 to-yellow-600" },
                { name: "Mobile", icon: "📱", color: "from-red-500 to-orange-600" },
                { name: "Cloud", icon: "☁️", color: "from-indigo-500 to-violet-600" },
                { name: "Blockchain", icon: "⛓️", color: "from-blue-400 to-blue-600" },
                { name: "Open API", icon: "🔗", color: "from-green-400 to-emerald-500" },
                { name: "Contactless", icon: "📲", color: "from-purple-400 to-indigo-500" },
                { name: "Analytics", icon: "📊", color: "from-amber-400 to-yellow-500" },
                { name: "Encrypted", icon: "🔐", color: "from-red-400 to-orange-500" },
                { name: "Secure", icon: "🛡️", color: "from-indigo-400 to-violet-500" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="text-center group transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-2xl p-12 text-white text-center relative overflow-hidden group border border-blue-600/30">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/50 via-blue-800/50 to-blue-900/50 group-hover:from-blue-700/60 group-hover:via-blue-800/60 group-hover:to-blue-900/60 transition-all duration-1000"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${15 + i * 5}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
                Ready to Bank with Confidence?
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300 leading-relaxed">
                Whether you're opening your first account, growing your business, or planning for retirement, 
                our financial advisors are ready to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn border border-white/20"
                >
                  <span className="relative z-10">Speak with Financial Advisor</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/login"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group/btn backdrop-blur-sm"
                >
                  <span className="relative z-10">Open an Account</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
              <p className="text-blue-200 mt-6 text-sm group-hover:text-blue-100 transition-colors duration-300">
                FDIC insured • 256-bit encryption • 24/7 customer support
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(-5deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}