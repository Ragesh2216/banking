import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    accountType: "",
    email: "",
    phone: "",
    inquiryType: "",
    amount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Refs for scroll animations
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Scroll progress tracking
    const handleScroll = () => {
      if (containerRef.current) {
        const windowHeight = window.innerHeight;
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll animations using Intersection Observer
  useEffect(() => {
    const observers = [];
    
    const createObserver = (ref, options = {}) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Add specific animation classes based on data attribute
            const direction = entry.target.dataset.animation || 'fade-up';
            entry.target.classList.add(`animate-${direction}`);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      });
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      observers.push(observer);
      return observer;
    };

    createObserver(headerRef, { threshold: 0.5 });
    createObserver(contactInfoRef, { threshold: 0.3 });
    createObserver(formRef, { threshold: 0.3 });
    createObserver(faqRef, { threshold: 0.2 });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add submission animation
    const form = e.target;
    form.classList.add('submitting');
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      form.classList.remove('submitting');
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        accountType: "",
        email: "",
        phone: "",
        inquiryType: "",
        amount: "",
        message: ""
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 pt-24 relative overflow-hidden">
        {/* Animated background for success page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti opacity-60"
              style={{
                width: `${Math.random() * 12 + 8}px`,
                height: `${Math.random() * 12 + 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#3B82F6', '#2563EB', '#1D4ED8', '#60A5FA'][i % 4],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                borderRadius: '50%'
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-success-pop border border-blue-200 transform hover:scale-[1.02] transition-transform duration-500"
            data-animation="pop"
          >
            {/* Success Icon with ring animation */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 animate-ping-slow bg-blue-500/30 rounded-full"></div>
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Banking Inquiry Submitted!
            </h2>
            
            <div className="relative mb-8">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200">
                Thank you for contacting TrustBank. One of our financial advisors will review your inquiry 
                and get back to you within 24 hours with personalized banking solutions.
              </p>
              
              {/* Animated progress bar */}
              <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden max-w-md mx-auto animate-fade-in-up delay-400">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-progress"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setTimeout(() => {
                    const formSection = document.querySelector('form');
                    if (formSection) {
                      formSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Submit Another Inquiry</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
              <Link
                to="/"
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Back to Home</span>
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up delay-800">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-blue-600">Next Steps:</span> Check your email for confirmation. 
                You'll receive a case number for tracking your inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden" 
      ref={containerRef}
    >
      {/* Enhanced Animated Background Elements with scroll interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"> 
        {/* Scrolling gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-blue-400/5 transition-all duration-1000"
          style={{
            opacity: scrollProgress * 0.5,
            transform: `translateY(${scrollProgress * -100}px)`
          }}
        ></div>
        
        {/* Floating Shapes with scroll parallax */}
        {[...Array(25)].map((_, i) => {
          const depth = Math.random();
          const speed = 0.5 + depth * 2;
          const size = 4 + depth * 20;
          const isLeft = i % 2 === 0;
          
          return (
            <div
              key={i}
              className="absolute animate-float-slow opacity-10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#2563EB', '#1D4ED8', '#3B82F6', '#0EA5E9', '#1E40AF', '#1E3A8A'][i % 6],
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '25%',
                transform: `translateY(${scrollProgress * speed * -50}px) rotate(${scrollProgress * 180}deg)`,
                transition: 'transform 0.1s linear'
              }}
            />
          );
        })}

        {/* Animated Gradient Blobs with scroll movement */}
        <div 
          className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
          style={{
            transform: `translate(${scrollProgress * -30}px, ${scrollProgress * -20}px) scale(${1 + scrollProgress * 0.1})`
          }}
        ></div>
        <div 
          className="absolute top-1/2 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
          style={{
            animationDelay: '2s',
            transform: `translate(${scrollProgress * 40}px, ${scrollProgress * 20}px) scale(${1 + scrollProgress * 0.15})`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
          style={{
            animationDelay: '4s',
            transform: `translate(${scrollProgress * 20}px, ${scrollProgress * 40}px) scale(${1 + scrollProgress * 0.05})`
          }}
        ></div>
        
        {/* Grid pattern with scroll */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3B82F6 1px, transparent 1px),
              linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollProgress * -25}px)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Header Section with enhanced animations */}
        <section className="text-center mb-16" ref={headerRef} data-animation="slide-in-top">
          <div className="relative inline-block mb-8">
            {/* Decorative orbiting circles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-20 animate-orbit-1"></div>
            <div className="absolute -top-6 -right-6 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-20 animate-orbit-2"></div>
            <div className="absolute -bottom-4 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-20 animate-orbit-3"></div>
            
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
            Contact TrustBank
          </h1>
          </div>
          
          <div className="relative">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 animate-in">
              Have questions about our banking services? Our financial experts are ready to help you with personalized solutions.
            </p>
            
            {/* Animated sparkles */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-sparkle"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: '50%',
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div 
            className="mt-12 w-6 h-10 mx-auto border-2 border-blue-400 rounded-full flex justify-center opacity-0 animate-in delay-500"
            style={{ animationDelay: '500ms' }}
          >
            <div 
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mt-2 animate-bounce"
              style={{ animationDelay: '800ms' }}
            ></div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information - Slides in from left */}
          <div 
            className="lg:col-span-1" 
            ref={contactInfoRef}
            data-animation="slide-in-left"
          >
            <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-200 rounded-2xl shadow-2xl p-6 md:p-8 h-full transform hover:-translate-y-2 transition-all duration-500 opacity-0 animate-in border border-blue-200 hover:shadow-3xl">
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 rounded-br-xl"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent relative">
                Banking Support
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2"></div>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    bg: "bg-blue-100",
                    title: "Customer Support",
                    content: "support@trustbank.com",
                    link: "mailto:support@trustbank.com",
                    color: "text-blue-700",
                    delay: 200
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-blue-200 to-blue-300",
                    title: "24/7 Helpline",
                    content: "1-800-TRUST-BNK",
                    link: "tel:+18008787826",
                    color: "text-blue-800 hover:text-blue-900",
                    delay: 300
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-blue-300 to-blue-400",
                    title: "Headquarters",
                    content: "Financial District, New York, NY 10005",
                    link: null,
                    color: "text-gray-700",
                    delay: 400
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-amber-100 to-yellow-100",
                    title: "Branch Hours",
                    content: "Mon-Fri: 9AM-5PM • Sat: 10AM-2PM",
                    link: null,
                    color: "text-gray-700",
                    delay: 500
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 animate-in bg-white/70 backdrop-blur-sm border border-blue-100"
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a href={item.link} className={`${item.color} transition-colors duration-300 hover:underline`}>
                          {item.content}
                        </a>
                      ) : (
                        <p className={item.color}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Banking */}
              <div 
                className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg opacity-0 animate-in"
                style={{ animationDelay: '600ms' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.698-.833-2.464 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="font-bold">Lost Card or Fraud Alert?</h3>
                </div>
                <p className="text-sm opacity-90">
                  Report immediately:
                  <a href="tel:+18008787826" className="font-bold ml-1 hover:underline animate-pulse">
                    1-800-878-7826
                  </a>
                  <span className="block mt-1 text-xs">Available 24/7 for emergencies</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Slides in from right */}
          <div 
            className="lg:col-span-2" 
            ref={formRef}
            data-animation="slide-in-right"
          >
            <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-2xl shadow-2xl p-6 md:p-8 transform hover:-translate-y-1 transition-all duration-500 opacity-0 animate-in border border-blue-600/30 hover:shadow-3xl relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#60A5FA_2px,transparent_2px)] bg-[size:20px_20px]"></div>
              </div>
              
              {/* Floating particles inside form */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                    style={{
                      left: `${10 + i * 20}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 2}s`,
                      animationDuration: '8s'
                    }}
                  ></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg flex items-center gap-3 relative">
                <span className="text-3xl animate-bounce-slow">🏦</span>
                Banking Inquiry Form
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name *",
                      name: "name",
                      type: "text",
                      placeholder: "Your full name",
                      delay: 200
                    },
                    {
                      label: "Account Type",
                      name: "accountType",
                      type: "text",
                      placeholder: "Current account type (if any)",
                      delay: 250
                    },
                    {
                      label: "Email Address *",
                      name: "email",
                      type: "email",
                      placeholder: "your.email@domain.com",
                      delay: 300
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "+1 (555) 123-4567",
                      delay: 350
                    }
                  ].map((field, index) => (
                    <div 
                      key={index} 
                      className="opacity-0 animate-in transform hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${field.delay}ms` }}
                    >
                      <label htmlFor={field.name} className="block text-sm font-medium text-white mb-2 drop-shadow flex items-center gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        placeholder={field.placeholder}
                        required={field.name !== 'phone' && field.name !== 'accountType'}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    className="opacity-0 animate-in transform hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: '400ms' }}
                  >
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2 drop-shadow flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231E40AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>')] bg-no-repeat bg-[center_right_1rem]"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="account">Open New Account</option>
                      <option value="loan">Loan Application</option>
                      <option value="mortgage">Mortgage Inquiry</option>
                      <option value="investment">Investment Services</option>
                      <option value="business">Business Banking</option>
                      <option value="credit">Credit Card Application</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div 
                    className="opacity-0 animate-in transform hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: '450ms' }}
                  >
                    <label htmlFor="amount" className="block text-sm font-medium text-white mb-2 drop-shadow flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                      Approximate Amount (if applicable)
                    </label>
                    <select
  name="amount"
  id="amount"
  value={formData.amount}
  onChange={handleChange}
  className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%231E40AF%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M6%209l6%206%206-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]"
>
                      <option value="">Select amount range</option>
                      <option value="<10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                      <option value="na">Not Applicable</option>
                    </select>
                  </div>
                </div>

                <div 
                  className="opacity-0 animate-in transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: '500ms' }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                    Your Banking Needs *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl resize-vertical"
                    placeholder="Tell us about your financial goals, timeline, and any specific banking requirements..."
                    required
                  ></textarea>
                </div>

                <div 
                  className="flex items-center space-x-4 opacity-0 animate-in"
                  style={{ animationDelay: '550ms' }}
                >
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transform hover:scale-110 transition-transform duration-300"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-white/90 hover:text-white transition-colors duration-300">
                    I agree to TrustBank's Privacy Policy and Terms of Service. I understand that sensitive financial information should not be shared via this form.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center opacity-0 animate-in shadow-md ${isSubmitting ? 'animate-pulse' : ''
                    }`}
                  style={{ animationDelay: '600ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Your Inquiry...
                    </>
                  ) : (
                    <>
                      <span>Submit Banking Inquiry</span>
                      <span className="ml-2 text-xl">💼</span>
                    </>
                  )}
                </button>

                <p 
                  className="text-sm text-white/80 text-center opacity-0 animate-in"
                  style={{ animationDelay: '700ms' }}
                >
                  * Required fields. For account security, do not share passwords or sensitive account details via this form.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section - Slides in from bottom */}
        <section className="mt-16" ref={faqRef} data-animation="slide-in-bottom">
          <div 
            className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl shadow-2xl p-6 md:p-8 transform hover:-translate-y-1 transition-all duration-500 opacity-0 animate-in border border-blue-600/30 hover:shadow-3xl relative overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[size:20px_20px]"></div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center gap-3 relative">
              <span className="text-3xl animate-pulse">💡</span>
              Banking FAQs
              <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your response time for banking inquiries?",
                  answer: "We respond to all banking inquiries within 24 hours. Urgent matters like fraud reports are handled immediately 24/7.",
                  delay: 200
                },
                {
                  question: "Do you offer free financial consultations?",
                  answer: "Yes, we provide complimentary financial consultations to help identify the best banking solutions for your goals.",
                  delay: 250
                },
                {
                  question: "What types of accounts do you offer?",
                  answer: "We offer checking, savings, money market, CDs, retirement accounts, business accounts, and specialized banking solutions.",
                  delay: 300
                },
                {
                  question: "Is my money insured with TrustBank?",
                  answer: "Yes, all deposit accounts are FDIC insured up to $250,000 per depositor, per account ownership category.",
                  delay: 350
                },
                {
                  question: "How secure is online banking?",
                  answer: "We use bank-grade 256-bit encryption, multi-factor authentication, and real-time fraud monitoring to protect your accounts.",
                  delay: 400
                },
                {
                  question: "Do you offer international banking services?",
                  answer: "Yes, we provide international wire transfers, foreign currency accounts, and global banking solutions for our customers.",
                  delay: 450
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 opacity-0 animate-in group hover:bg-white/30 hover:shadow-lg"
                  style={{ animationDelay: `${faq.delay}ms` }}
                >
                  {/* Question indicator */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white mt-0.5">
                      ?
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300 pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          50% {
            transform: translateX(10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          50% {
            transform: translateX(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInTop {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          60% {
            transform: translateY(10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInBottom {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          60% {
            transform: translateY(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pop {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          70% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
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
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes confetti {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes orbit-1 {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-2 {
          0% {
            transform: rotate(120deg) translateX(30px) rotate(-120deg);
          }
          100% {
            transform: rotate(480deg) translateX(30px) rotate(-480deg);
          }
        }
        
        @keyframes orbit-3 {
          0% {
            transform: rotate(240deg) translateX(15px) rotate(-240deg);
          }
          100% {
            transform: rotate(600deg) translateX(15px) rotate(-600deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-in {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-top {
          animation: slideInTop 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slideInBottom 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-pop {
          animation: pop 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-success-pop {
          animation: success-pop 0.6s ease-out forwards;
        }
        
        .animate-progress {
          animation: progress 1.5s ease-out forwards;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-confetti {
          animation: confetti 3s linear forwards;
        }
        
        .animate-orbit-1 {
          animation: orbit-1 10s linear infinite;
        }
        
        .animate-orbit-2 {
          animation: orbit-2 15s linear infinite;
        }
        
        .animate-orbit-3 {
          animation: orbit-3 12s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-600 {
          animation-delay: 600ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-800 {
          animation-delay: 800ms;
        }
        
        /* Stagger animations */
        .stagger-children > *:nth-child(1) { animation-delay: 100ms; }
        .stagger-children > *:nth-child(2) { animation-delay: 200ms; }
        .stagger-children > *:nth-child(3) { animation-delay: 300ms; }
        .stagger-children > *:nth-child(4) { animation-delay: 400ms; }
        
        /* Smooth transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Form submitting animation */
        form.submitting {
          animation: pulse 0.5s ease-in-out;
        }
        
        /* Enhanced shadows */
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Gradient borders */
        .gradient-border {
          border: 2px solid transparent;
          background: 
            linear-gradient(white, white) padding-box,
            linear-gradient(45deg, #3B82F6, #1D4ED8) border-box;
        }
      `}</style>
    </div>
  );
};

export default Contact;