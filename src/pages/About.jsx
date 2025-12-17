import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import www from '../images/www.webp';
import abi from '../images/abi.webp';
import ceo from '../images/ceo.webp';
import soe from '../images/yuva.webp';

const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // ================== SMOOTH SCROLL EFFECT ==================
  useEffect(() => {
    // Enhanced smooth scroll function
    const smoothScrollTo = (targetElement, duration = 800) => {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - 80; // Adjust for header
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * easeProgress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Handle all smooth scroll clicks
    const handleSmoothScrollClick = (e) => {
      // Check if click is on a button that should trigger smooth scroll
      const button = e.target.closest('button');
      
      if (button && button.onclick) {
        const onclickText = button.onclick.toString();
        
        // Check for smoothNavigate function calls
        if (onclickText.includes('smoothNavigate')) {
          const match = onclickText.match(/smoothNavigate\('([^']+)'\)/);
          if (match) {
            const path = match[1];
            // If it's an anchor link, handle smooth scroll
            if (path.startsWith('#')) {
              e.preventDefault();
              const targetId = path.substring(1);
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                if ('scrollBehavior' in document.documentElement.style) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                  });
                } else {
                  smoothScrollTo(targetElement);
                }
              }
            }
          }
        }
      }
    };

    // Mobile-specific optimizations
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Improve touch scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.scrollBehavior = 'smooth';
    }

    // Add CSS for smooth scroll
    const style = document.createElement('style');
    style.textContent = `
      /* Enable smooth scrolling */
      html {
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      
      /* Mobile optimizations */
      @media (max-width: 768px) {
        html {
          scroll-behavior: smooth !important;
        }
        
        body {
          overscroll-behavior-y: contain;
          -webkit-font-smoothing: antialiased;
        }
        
        /* Improve scroll performance */
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        button {
          touch-action: manipulation;
        }
      }
      
      /* Smooth transitions */
      .smooth-scroll {
        scroll-behavior: smooth;
      }
      
      /* Fix for iOS Safari */
      @supports (-webkit-touch-callout: none) {
        .min-h-screen {
          min-height: -webkit-fill-available;
        }
      }
    `;
    document.head.appendChild(style);

    // Add event listener
    document.addEventListener('click', handleSmoothScrollClick, true);

    return () => {
      document.removeEventListener('click', handleSmoothScrollClick, true);
      document.head.removeChild(style);
      
      // Cleanup styles
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ================== ENHANCED NAVIGATION FUNCTION ==================
  const smoothNavigate = (path) => {
    // If it's an anchor link (starts with #)
    if (path.startsWith('#')) {
      const targetElement = document.getElementById(path.substring(1));
      if (targetElement) {
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        } else {
          // Fallback animation
          const start = window.pageYOffset;
          const target = targetElement.offsetTop - 80;
          const duration = 800;
          let startTime = null;

          const animateScroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Cubic ease in/out
            const ease = progress < 0.5 
              ? 4 * progress * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
              
            window.scrollTo(0, start + (target - start) * ease);
            
            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          };
          
          requestAnimationFrame(animateScroll);
        }
      }
    } else {
      // Regular page navigation
      navigate(path);
    }
  };

  const sections = [
    {
      section: 'Mission & Values',
      icon: '🏛️',
      content: 'We provide secure, innovative banking solutions that empower individuals and businesses to achieve financial success through trust, integrity, and exceptional service.',
      importance: 'This defines our commitment to financial security, customer empowerment, and ethical banking practices that build lasting relationships.',
      details: [
        'Commitment to financial security and privacy',
        'Focus on customer financial empowerment',
        'Innovation in digital banking solutions',
        'Sustainable financial growth strategies'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      section: 'Our History',
      icon: '📜',
      content: 'Founded in 1872, TrustBank has grown from a community bank to a leading financial institution, continuously adapting to meet evolving financial needs.',
      importance: 'Demonstrates our heritage, stability, and proven track record in the financial industry for over 150 years.',
      details: [
        'Founded in 1872 as a community savings bank',
        'Expanded to national presence in 1960',
        'Pioneered online banking in 1998',
        'Achieved $500B+ in assets under management'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      section: 'Financial Expertise',
      icon: '💼',
      content: 'Comprehensive banking services including personal banking, business solutions, investment management, and wealth advisory services.',
      importance: 'Shows our technical capabilities and specialized knowledge across multiple financial domains and markets.',
      details: [
        'Certified financial advisors and planners',
        'Expertise in 50+ financial markets',
        'Advanced risk assessment systems',
        'Financial planning methodology experts'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      section: 'Security Standards',
      icon: '🔒',
      content: 'Bank-grade security with 256-bit encryption, fraud detection systems, and FDIC insurance for all deposit accounts.',
      importance: 'Ensures the highest level of protection for customer assets and personal information.',
      details: [
        'FDIC insured up to $250,000 per depositor',
        'Real-time fraud monitoring',
        'Multi-factor authentication',
        'Regular security audits and updates'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      section: 'Customer Partnership',
      icon: '🤝',
      content: 'We build lifelong banking relationships, acting as trusted financial partners throughout our customers financial journey.',
      importance: 'Focus on understanding customer needs and delivering sustainable financial solutions.',
      details: [
        'Dedicated relationship managers',
        'Regular financial reviews',
        '24/7 customer support',
        'Personalized banking solutions'
      ],
      color: 'from-teal-500 to-blue-500'
    },
    {
      section: 'Innovation & Technology',
      icon: '🚀',
      content: 'Continuous investment in fintech innovation to provide cutting-edge digital banking experiences and financial tools.',
      importance: 'Ensures we deliver modern, convenient banking solutions using the latest financial technologies.',
      details: [
        'Advanced mobile banking platform',
        'AI-powered financial insights',
        'Contactless payment solutions',
        'Secure digital wallet integration'
      ],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      section: 'Industry Recognition',
      icon: '🏆',
      content: 'Award-winning financial institution recognized for excellence in customer service, innovation, and community impact.',
      importance: 'Validates our expertise and commitment to exceptional banking services.',
      details: [
        '2023 Best Bank Award',
        'Highest Customer Satisfaction Rating',
        'Top 5 Most Innovative Banks',
        'Excellence in Community Banking 2024'
      ],
      color: 'from-violet-500 to-purple-500'
    },
  ];

  const leadershipTeam = [
    {
      name: "James Wilson",
      role: "CEO & Chairman",
      bio: "30+ years in banking and financial services. Former Federal Reserve advisor and banking industry pioneer.",
      expertise: ["Strategic Leadership", "Risk Management", "Financial Regulation"],
      color: "from-blue-500 to-cyan-600",
      image: soe
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Chief Financial Officer",
      bio: "Ph.D. in Financial Economics with extensive experience in asset management and financial strategy.",
      expertise: ["Financial Strategy", "Asset Management", "Risk Assessment"],
      color: "from-green-500 to-emerald-600",
      image: abi
    },
    {
      name: "Robert Chen",
      role: "Chief Technology Officer",
      bio: "FinTech expert with background in cybersecurity and digital transformation for financial institutions.",
      expertise: ["Digital Banking", "Cybersecurity", "Financial Technology"],
      color: "from-purple-500 to-violet-600",
      image: www
    },
    {
      name: "Sarah Johnson",
      role: "Chief Compliance Officer",
      bio: "Former banking regulator with 20+ years experience in financial compliance and risk management.",
      expertise: ["Regulatory Compliance", "Risk Management", "Financial Oversight"],
      color: "from-red-500 to-orange-600",
      image: ceo
    }
  ];

  const bankingTechnologies = [
    { name: "Core Banking", icon: "🏦", category: "Platform" },
    { name: "Mobile Banking", icon: "📱", category: "Digital" },
    { name: "AI Analytics", icon: "🤖", category: "Insights" },
    { name: "Blockchain", icon: "⛓️", category: "Security" },
    { name: "Risk Analysis", icon: "📊", category: "Management" },
    { name: "Digital Wallet", icon: "💳", category: "Payments" },
    { name: "Cloud Banking", icon: "☁️", category: "Infrastructure" },
    { name: "Fraud Detection", icon: "🛡️", category: "Security" },
    { name: "Open Banking", icon: "🔗", category: "Integration" },
    { name: "Contactless", icon: "📲", category: "Payments" },
    { name: "Biometrics", icon: "👁️", category: "Security" },
    { name: "APIs", icon: "⚙️", category: "Integration" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden smooth-scroll">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#2563EB', '#059669', '#4F46E5', '#0EA5E9', '#7C3AED', '#DC2626', '#D97706'][i % 7],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            About TrustBank
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            For over 150 years, we've been providing secure, innovative banking solutions that empower 
            individuals and businesses to achieve financial success.
          </p>
        </section>

        {/* Banking Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "150+", label: "Years of Trust", color: "from-blue-600 to-blue-700" },
              { number: "5M+", label: "Customers Served", color: "from-green-600 to-emerald-600" },
              { number: "$500B+", label: "Assets Managed", color: "from-purple-600 to-indigo-600" },
              { number: "2,500+", label: "Branches", color: "from-red-600 to-orange-600" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fade-in-up border border-blue-100 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Banking Technology Stack */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up border border-blue-100">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-8">
              Our Banking Technology
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {bankingTechnologies.map((tech, index) => (
                <div 
                  key={index}
                  className="text-center transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-blue-200">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-blue-700 transition-colors duration-300">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up border border-blue-100" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Navigation */}
              <div className="lg:col-span-1 bg-gradient-to-b from-blue-50 to-blue-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Banking Expertise
                </h2>
                <nav className="space-y-2">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        activeSection === index
                          ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                          : 'text-gray-700 hover:bg-white hover:border-2 hover:border-blue-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.section}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 bg-gradient-to-br from-white to-blue-50">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-left">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {sections[activeSection].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    {sections[activeSection].section}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border-l-4 border-blue-400">
                      {sections[activeSection].content}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Banking Impact
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-400">
                      {sections[activeSection].importance}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Key Features
                    </h3>
                    <ul className="space-y-3 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-400">
                      {sections[activeSection].details.map((detail, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 group hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className={`w-6 h-6 bg-gradient-to-r ${sections[activeSection].color} rounded-full flex items-center justify-center text-white text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span className="group-hover:text-gray-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Executive Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Meet the experienced financial professionals leading TrustBank's commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group border border-blue-100"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      objectPosition: 'center',
                      minWidth: '128px',
                      minHeight: '128px'
                    }}
                  />
                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {member.role.split(' ')[0]}
                    </span>
                  </div>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-60`}></div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent text-sm`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium group-hover:scale-105 transition-transform duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl p-8 text-white transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up border border-blue-600" style={{ animationDelay: '600ms' }}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Our Commitment to Financial Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🛡️",
                    title: "Security First",
                    description: "Bank-grade security with FDIC insurance and 24/7 fraud monitoring",
                    color: "from-green-400 to-emerald-400"
                  },
                  {
                    icon: "💡",
                    title: "Innovation",
                    description: "Cutting-edge digital banking solutions for modern financial needs",
                    color: "from-blue-400 to-cyan-400"
                  },
                  {
                    icon: "🤝",
                    title: "Customer Focus",
                    description: "Personalized banking solutions with dedicated relationship managers",
                    color: "from-purple-400 to-violet-400"
                  }
                ].map((commitment, index) => (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${commitment.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{commitment.title}</h3>
                    <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {commitment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up border border-blue-200" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust us with their banking needs and financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => smoothNavigate('/accounts')}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow flex items-center justify-center gap-2"
              >
                <span>Open an Account</span>
                <span className="text-lg">🏦</span>
              </button>
              
              <button 
                onClick={() => smoothNavigate('/contact')}
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Contact Our Advisors</span>
                <span className="text-lg">💼</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;