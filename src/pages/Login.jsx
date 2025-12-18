import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BankingAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accountType: "savings",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false,
    userId: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAllErrors, setShowAllErrors] = useState(false);
  
  // Password rules
  const [passwordRules, setPasswordRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsVerySmall(width < 375);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "phone") {
      // Allow only numbers, max 10 digits
      if (/^\d{0,10}$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else if (name === "password") {
      setFormData(prev => ({ ...prev, [name]: value }));
      validatePasswordRules(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Special case for confirmPassword
    if (name === 'confirmPassword' || name === 'password') {
      if (validationErrors.confirmPassword) {
        setValidationErrors(prev => ({
          ...prev,
          confirmPassword: ''
        }));
      }
    }
  };

  const validatePasswordRules = (password) => {
    const rules = {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordRules(rules);
    return rules;
  };

  const validateForm = () => {
    const errors = {};
    
    if (isLogin) {
      // Login validation
      if (!formData.userId.trim()) {
        errors.userId = "User ID / Customer ID is required";
      }
      
      if (!formData.password) {
        errors.password = "Password is required";
      } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
    } else {
      // Signup validation
      if (!formData.name.trim()) {
        errors.name = "Legal name is required";
      }
      
      if (!formData.email.trim()) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      
      if (!formData.phone.trim()) {
        errors.phone = "Mobile number is required";
      } else if (formData.phone.length !== 10) {
        errors.phone = "Mobile number must be 10 digits";
      }
      
      if (!formData.password) {
        errors.password = "Password is required";
      } else if (!Object.values(passwordRules).every(Boolean)) {
        errors.password = "Password doesn't meet all security requirements";
      }
      
      if (!formData.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords don't match";
      }
      
      if (!formData.agreeToTerms) {
        errors.agreeToTerms = "You must agree to the terms and conditions";
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isFormValid = () => {
    if (isLogin) {
      return formData.userId.trim() && formData.password && !validationErrors.userId && !validationErrors.password;
    } else {
      const isPasswordValid = Object.values(passwordRules).every(Boolean);
      return (
        formData.name.trim() &&
        formData.email.trim() &&
        formData.phone.trim() &&
        formData.phone.length === 10 &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword &&
        formData.agreeToTerms &&
        isPasswordValid &&
        !validationErrors.name &&
        !validationErrors.email &&
        !validationErrors.phone &&
        !validationErrors.password &&
        !validationErrors.confirmPassword &&
        !validationErrors.agreeToTerms
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowAllErrors(true); // Show all errors when submit is clicked
    
    const isValid = validateForm();
    
    if (!isValid) {
      // Scroll to first error
      const firstError = Object.keys(validationErrors)[0];
      if (firstError) {
        const element = document.getElementById(firstError);
        if (element) {
          element.focus();
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isLogin) {
        alert(`Secure Authentication Initiated for User ID: ${formData.userId}`);
      } else {
        alert(`Registration Successful!\nWelcome to SecureBank, ${formData.name}.`);
      }
      navigate('/404');
    }, 2000);
  };

  const toggleAuthMode = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFormData({
        name: "",
        email: "",
        phone: "",
        accountType: "savings",
        password: "",
        confirmPassword: "",
        rememberMe: false,
        agreeToTerms: false,
        userId: ""
      });
      setPasswordRules({
        length: false,
        upper: false,
        lower: false,
        number: false,
        special: false
      });
      setValidationErrors({});
      setIsSubmitted(false);
      setShowAllErrors(false);
      setIsVisible(true);
    }, 300);
  };

  // Helper function to determine if error should be shown
  const shouldShowError = (fieldName) => {
    // Always show errors for signup, show after submission for login
    if (isLogin) {
      return isSubmitted || validationErrors[fieldName];
    } else {
      return showAllErrors || validationErrors[fieldName];
    }
  };

  // Check if any required field is empty
  const hasEmptyRequiredFields = () => {
    if (isLogin) {
      return !formData.userId.trim() || !formData.password;
    } else {
      return !formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || 
             !formData.password || !formData.confirmPassword || !formData.agreeToTerms;
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-3 sm:p-4 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile-only back button */}
        {isMobile && (
          <button 
            onClick={() => navigate(-1)}
            className="fixed top-4 left-4 z-50 w-10 h-10 bg-blue-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-blue-700 text-lg active:bg-blue-800 transition-colors"
          >
            ←
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Side - Banking Branding */}
          {!isVerySmall && (
            <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} px-2`}>
              <div className="mb-6">
                <h1 className={`font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-3 ${
                  isVerySmall ? 'text-2xl' : 
                  isMobile ? 'text-3xl' : 
                  'text-4xl md:text-5xl lg:text-6xl'
                }`}>
                  {isLogin ? "Secure Banking Portal" : "Start Your Financial Journey"}
                </h1>
                <p className={`text-gray-300 max-w-md mx-auto lg:mx-0 ${
                  isVerySmall ? 'text-sm' : 'text-base lg:text-xl'
                }`}>
                  {isLogin 
                    ? "Access your accounts, manage investments, and handle transactions securely."
                    : "Join millions who trust SecureBank for their savings, investments, and daily banking needs."
                  }
                </p>
              </div>

              {/* Banking Features */}
              <div className="space-y-3 max-w-md mx-auto lg:mx-0">
                {(isLogin ? [
                  { icon: "🔒", text: "256-Bit Encryption Active", color: "from-green-500 to-emerald-500" },
                  { icon: "🏦", text: "FDIC Insured up to $250K", color: "from-blue-500 to-indigo-500" },
                  { icon: "📱", text: "24/7 Mobile Banking", color: "from-cyan-500 to-blue-500" },
                  { icon: "🛡️", text: "Multi-factor Authentication", color: "from-purple-500 to-pink-500" }
                ] : [
                  { icon: "🏦", text: "Bank-Grade Security", color: "from-blue-500 to-indigo-500" },
                  { icon: "💳", text: "Instant Virtual Cards", color: "from-green-500 to-emerald-500" },
                  { icon: "📊", text: "Smart Analytics", color: "from-cyan-500 to-blue-500" },
                  { icon: "⚡", text: "Quick Account Setup", color: "from-purple-500 to-pink-500" }
                ]).map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-950/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-blue-800"
                  >
                    <div className={`w-8 h-8 ${isMobile && !isVerySmall ? 'w-10 h-10' : ''} bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white text-sm ${isMobile && !isVerySmall ? 'text-lg' : ''} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <span className={`text-gray-300 font-medium group-hover:text-white transition-colors duration-300 truncate ${
                      isVerySmall ? 'text-xs' : 'text-sm'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Banking Stats */}
              {!isVerySmall && (
                <div className={`mt-6 grid ${isMobile ? 'grid-cols-3' : 'grid-cols-3'} gap-3 max-w-md mx-auto lg:mx-0`}>
                  {[
                    { number: "5M+", label: "Customers" },
                    { number: "150+", label: "Years" },
                    { number: "$500B+", label: "Assets" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent ${
                        isMobile ? 'text-lg' : 'text-xl lg:text-2xl'
                      }`}>
                        {stat.number}
                      </div>
                      <div className={`text-gray-400 mt-1 ${
                        isMobile ? 'text-xs' : 'text-sm'
                      }`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Security Badge */}
              {!isVerySmall && (
                <div className="mt-6 max-w-md mx-auto lg:mx-0">
                  <div className="bg-blue-950/30 border border-blue-700 rounded-lg p-3 flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white truncate">Your Security is Our Priority</div>
                      <div className="text-[10px] text-gray-400">Bank-grade encryption & monitoring</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Right Side - Auth Form */}
          <div className={`bg-blue-950 rounded-xl mt-16 lg:rounded-2xl shadow-xl p-4 lg:p-8 xl:p-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} border border-blue-800 ${isVerySmall ? 'mt-0' : 'mt-12 lg:mt-16'}`}>
            {/* Form Header */}
            <div className="text-center mb-6">
              <div className={`${
                isVerySmall ? 'w-14 h-14' : 
                isMobile ? 'w-16 h-16' : 
                'w-20 h-20'
              } bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className={`${
                  isVerySmall ? 'text-lg' : 
                  isMobile ? 'text-xl' : 
                  'text-2xl'
                } text-white`}>
                  {isLogin ? "🏦" : "💼"}
                </span>
              </div>
              <h2 className={`font-bold text-white mb-2 ${
                isVerySmall ? 'text-lg' : 
                isMobile ? 'text-xl' : 
                'text-2xl lg:text-3xl'
              }`}>
                {isLogin ? "Secure Login" : "Register New Account"}
              </h2>
              <p className={`text-gray-400 ${
                isVerySmall ? 'text-xs' : 'text-sm'
              }`}>
                {isLogin 
                  ? "Enter your credentials to access your dashboard"
                  : "Please enter your details to verify your identity"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Login Fields */}
              {isLogin ? (
                <>
                  {/* User ID */}
                  <div className="animate-fade-in-up">
                    <label htmlFor="userId" className="block text-xs font-medium text-gray-300 mb-1">
                      User ID / Customer ID *
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="userId"
                      value={formData.userId}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                        shouldShowError('userId') && validationErrors.userId ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="Enter your User ID"
                      autoComplete="username"
                    />
                    {shouldShowError('userId') && validationErrors.userId && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.userId}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <label htmlFor="password" className="block text-xs font-medium text-gray-300 mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 pr-10 ${
                          shouldShowError('password') && validationErrors.password ? 'border-red-500' : 'border-blue-700'
                        }`}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                      />
                      <div className="absolute right-2 top-2 text-blue-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      </div>
                    </div>
                    {shouldShowError('password') && validationErrors.password && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-500 bg-blue-900 border-blue-700 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-xs text-gray-300">Remember User ID</span>
                    </label>
                    <Link to="/404" className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Forgot Password?
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Signup Fields */}
                  <div className="animate-fade-in-up">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                      Legal Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                        shouldShowError('name') && validationErrors.name ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="As per government ID"
                      autoComplete="name"
                    />
                    {shouldShowError('name') && validationErrors.name && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                        shouldShowError('email') && validationErrors.email ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                    {shouldShowError('email') && validationErrors.email && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone & Account Type Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                          shouldShowError('phone') && validationErrors.phone ? 'border-red-500' : 'border-blue-700'
                        }`}
                        placeholder="98765 43210"
                        autoComplete="tel"
                        maxLength="10"
                      />
                      {shouldShowError('phone') && validationErrors.phone && (
                        <p className="text-red-400 text-[10px] mt-1 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {validationErrors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="accountType" className="block text-xs font-medium text-gray-300 mb-1">
                        Account Type
                      </label>
                      <select
                        id="accountType"
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 bg-blue-900 border border-blue-700 text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                      >
                        <option value="savings">Savings Account</option>
                        <option value="current">Current Account</option>
                        <option value="student">Student Account</option>
                      </select>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <label htmlFor="password" className="block text-xs font-medium text-gray-300 mb-1">
                      Create Password *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 pr-10 ${
                          shouldShowError('password') && validationErrors.password ? 'border-red-500' : 'border-blue-700'
                        }`}
                        placeholder="Create a strong password"
                        autoComplete="new-password"
                      />
                      <div className="absolute right-2 top-2 text-blue-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Password Strength Meter */}
                    {formData.password && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-400 mb-1">Password Strength:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          <span className={`text-[10px] px-2 py-1 rounded flex items-center justify-center ${
                            passwordRules.length ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {passwordRules.length ? '✓' : '○'} 8+ Chars
                          </span>
                          <span className={`text-[10px] px-2 py-1 rounded flex items-center justify-center ${
                            passwordRules.upper ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {passwordRules.upper ? '✓' : '○'} Uppercase
                          </span>
                          <span className={`text-[10px] px-2 py-1 rounded flex items-center justify-center ${
                            passwordRules.lower ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {passwordRules.lower ? '✓' : '○'} Lowercase
                          </span>
                          <span className={`text-[10px] px-2 py-1 rounded flex items-center justify-center ${
                            passwordRules.number ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {passwordRules.number ? '✓' : '○'} Number
                          </span>
                          <span className={`text-[10px] px-2 py-1 rounded flex items-center justify-center ${
                            passwordRules.special ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {passwordRules.special ? '✓' : '○'} Symbol
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {shouldShowError('password') && validationErrors.password && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                    <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-300 mb-1">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                        shouldShowError('confirmPassword') && validationErrors.confirmPassword ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="Re-enter password"
                      autoComplete="new-password"
                    />
                    {shouldShowError('confirmPassword') && validationErrors.confirmPassword && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Terms Checkbox */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className={`w-4 h-4 text-blue-500 bg-blue-900 border-blue-700 rounded focus:ring-blue-500 mt-0.5 flex-shrink-0 ${
                          shouldShowError('agreeToTerms') && validationErrors.agreeToTerms ? 'border-red-500' : ''
                        }`}
                      />
                      <span className="ml-2 text-xs text-gray-300">
                        I agree to the{" "}
                        <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                          Terms & Conditions
                        </Link>
                        {" "}and{" "}
                        <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                          Privacy Policy
                        </Link>
                        {shouldShowError('agreeToTerms') && validationErrors.agreeToTerms && (
                          <span className="block text-red-400 text-[10px] mt-1 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {validationErrors.agreeToTerms}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                </>
              )}

              {/* Submit Button - Now shows validation state */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center animate-fade-in-up text-sm active:scale-95 ${
                  isLoading 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 animate-pulse text-white' 
                    : !isFormValid() 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 cursor-not-allowed opacity-90'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:shadow-xl'
                }`}
                style={{ animationDelay: isLogin ? '300ms' : '350ms' }}
                onClick={(e) => {
                  if (!isFormValid()) {
                    e.preventDefault();
                    setIsSubmitted(true);
                    setShowAllErrors(true);
                    validateForm();
                    
                    // Show alert for empty required fields
                    if (hasEmptyRequiredFields()) {
                      alert(`Please fill in all required fields marked with *\n\n${
                        isLogin 
                          ? '• User ID / Customer ID\n• Password'
                          : '• Legal Name\n• Email Address\n• Mobile Number\n• Password\n• Confirm Password\n• Terms Agreement'
                      }`);
                    }
                    
                    // Scroll to first error
                    const firstError = Object.keys(validationErrors)[0];
                    if (firstError) {
                      const element = document.getElementById(firstError);
                      if (element) {
                        element.focus();
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? "Authenticating..." : "Creating Account..."}
                  </>
                ) : !isFormValid() ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {isLogin ? "Secure Login " : "Open Account"}
                  </>
                ) : (
                  isLogin ? "Secure Login" : "Open Account"
                )}
              </button>

              {/* Security Note */}
              <div className="bg-blue-900/50 border border-blue-800 rounded-lg p-3 text-center animate-fade-in-up" style={{ animationDelay: isLogin ? '350ms' : '400ms' }}>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="truncate">Secure • SSL encrypted • FDIC insured</span>
                </div>
              </div>

              {/* Divider */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: isLogin ? '400ms' : '450ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-blue-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-blue-950 text-gray-400">
                    {isLogin ? "New to SecureBank?" : "Already banking with us?"}
                  </span>
                </div>
              </div>

              {/* Switch Mode Button */}
              <div className="animate-fade-in-up" style={{ animationDelay: isLogin ? '450ms' : '500ms' }}>
                <button
                  type="button"
                  onClick={toggleAuthMode}
                  className="w-full bg-blue-900 border border-blue-800 text-gray-300 py-2 px-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2 text-xs active:scale-95"
                >
                  {isLogin ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2a1 1 0 00-1 1v8H5a1 1 0 100 2h6v8a1 1 0 102 0v-8h6a1 1 0 100-2h-6V3a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Open an Account
                    </>
                  ) : (
                    "Log In Here"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#2563EB', '#0EA5E9', '#1D4ED8', '#3B82F6', '#1E40AF'][i % 5],
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
        
        {/* Simplified animated blobs */}
        {!isVerySmall && (
          <>
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          </>
        )}
      </div>

      {/* Responsive CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(8px);
          }
          66% {
            transform: translateY(8px) translateX(-8px);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.05);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        /* 320px specific fixes */
        @media (max-width: 320px) {
          .text-2xl {
            font-size: 1.25rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
          .text-sm {
            font-size: 0.75rem !important;
          }
          .text-xs {
            font-size: 0.65rem !important;
          }
          .text-\[10px\] {
            font-size: 0.6rem !important;
          }
          .p-4 {
            padding: 0.75rem !important;
          }
          .px-3 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .py-3 {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          .gap-4 > * {
            margin-top: 0.5rem !important;
          }
          input, select, button {
            font-size: 0.75rem !important;
            min-height: 44px !important;
          }
          
          /* Adjust spacing for very small screens */
          .space-y-4 > * + * {
            margin-top: 0.75rem !important;
          }
          
          /* Make back button larger for touch */
          .fixed.top-4.left-4 {
            width: 44px !important;
            height: 44px !important;
            font-size: 20px !important;
          }
          
          /* Password grid for small screens */
          .grid.grid-cols-2.sm\\:grid-cols-5 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Mobile-specific touch improvements */
        @media (max-width: 768px) {
          input, select, textarea, button {
            min-height: 44px !important;
            font-size: 16px !important;
          }
          
          button {
            touch-action: manipulation;
          }
          
          .text-xs {
            font-size: 12px !important;
          }
          
          .text-sm {
            font-size: 14px !important;
          }
        }
        
        /* Prevent zoom on iOS */
        @media (max-width: 768px) {
          input[type="text"],
          input[type="email"],
          input[type="password"],
          input[type="tel"],
          textarea,
          select {
            font-size: 16px !important;
          }
        }
        
        /* Prevent horizontal scrolling */
        .overflow-x-hidden {
          overflow-x: hidden;
        }
        
        /* Ensure form elements don't overflow */
        input, select, textarea {
          max-width: 100%;
          box-sizing border-box;
        }
      `}</style>
    </div>
  );
}