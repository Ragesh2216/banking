import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false,
    accountType: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Check screen size
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Special case for confirmPassword - also clear password error if user fixes it
    if (name === 'confirmPassword' || name === 'password') {
      if (validationErrors.confirmPassword) {
        setValidationErrors(prev => ({
          ...prev,
          confirmPassword: ''
        }));
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Common validations for both login and signup
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    
    // Signup specific validations
    if (!isLogin) {
      if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
      }
      
      if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
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
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Check if form is valid for button disabling
  const isFormValid = () => {
    if (isLogin) {
      return formData.email && formData.password && !validationErrors.email && !validationErrors.password;
    } else {
      return (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword &&
        formData.agreeToTerms &&
        !validationErrors.firstName &&
        !validationErrors.lastName &&
        !validationErrors.email &&
        !validationErrors.password &&
        !validationErrors.confirmPassword &&
        !validationErrors.agreeToTerms
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark form as submitted
    
    // Validate form before submission
    if (!validateForm()) {
      // Optional: Scroll to first error
      const firstError = Object.keys(validationErrors)[0];
      if (firstError) {
        document.getElementById(firstError)?.focus();
      }
      return; // Stop form submission
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/404');
    }, 2000);
  };

  const toggleAuthMode = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
        agreeToTerms: false,
        accountType: ""
      });
      setValidationErrors({}); // Clear all validation errors
      setIsSubmitted(false); // Reset submitted state
      setIsVisible(true);
    }, 300);
  };

  // Helper function to check if field should show error
  const shouldShowError = (fieldName) => {
    // For login mode, show errors after form submission or if field was touched
    // For signup mode, always show validation errors
    return isSubmitted || validationErrors[fieldName];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-16 from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-3 overflow-x-hidden">
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
          {/* Left Side - Banking Illustration & Info */}
          {!isVerySmall && (
            <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} px-2`}>
              <div className="mb-6">
                <h1 className={`font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-3 ${
                  isVerySmall ? 'text-2xl' : 
                  isMobile ? 'text-3xl' : 
                  'text-4xl md:text-5xl lg:text-6xl'
                }`}>
                  {isLogin ? "Welcome to TrustBank" : "Join TrustBank Today"}
                </h1>
                <p className={`text-gray-300 max-w-md mx-auto lg:mx-0 ${
                  isVerySmall ? 'text-sm' : 'text-base lg:text-xl'
                }`}>
                  {isLogin 
                    ? "Sign in to access your accounts and manage finances."
                    : "Open your account for secure banking."
                  }
                </p>
              </div>

              {/* Banking Features List - Simplified for mobile */}
              <div className="space-y-3 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: "🏦", text: "FDIC Insured", color: "from-blue-500 to-blue-600" },
                  { icon: "🔒", text: "Bank-grade security", color: "from-green-500 to-emerald-600" },
                  { icon: "📱", text: "24/7 Mobile Banking", color: "from-blue-600 to-indigo-600" },
                  { icon: "💳", text: "Contactless payments", color: "from-purple-500 to-violet-600" }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-950 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-blue-800"
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

              {/* Banking Stats - Hidden on very small screens */}
              {!isVerySmall && (
                <div className={`mt-6 grid ${isMobile ? 'grid-cols-3' : 'grid-cols-3'} gap-3 max-w-md mx-auto lg:mx-0`}>
                  {[
                    { number: "5M+", label: "Customers" },
                    { number: "150+", label: "Years" },
                    { number: "$500B+", label: "Assets" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent ${
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
                  <div className="bg-blue-950/50 border border-blue-800 rounded-lg p-3 flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white truncate">Your Security is Our Priority</div>
                      <div className="text-[10px] text-gray-400">Multi-factor authentication</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Right Side - Auth Form */}
          <div className={`bg-blue-950 rounded-xl lg:rounded-2xl shadow-xl p-4 lg:p-8 xl:p-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} border border-blue-800 ${isVerySmall ? 'mt-0' : 'mt-12 lg:mt-16'}`}>
            {/* Form Header */}
            <div className="text-center mb-6">
              <div className={`${
                isVerySmall ? 'w-14 h-14' : 
                isMobile ? 'w-16 h-16' : 
                'w-20 h-20'
              } bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3`}>
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
                {isLogin ? "Secure Login" : "Open Account"}
              </h2>
              <p className={`text-gray-400 ${
                isVerySmall ? 'text-xs' : 'text-sm'
              }`}>
                {isLogin 
                  ? "Enter credentials to access dashboard"
                  : "Register for banking services"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields - Only for Signup */}
              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in-up">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                        shouldShowError('firstName') && validationErrors.firstName ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="John"
                    />
                    {shouldShowError('firstName') && validationErrors.firstName && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-gray-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-blue-900 border text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                        shouldShowError('lastName') && validationErrors.lastName ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="Doe"
                    />
                    {shouldShowError('lastName') && validationErrors.lastName && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Email Field */}
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
                  placeholder="email@domain.com"
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

              {/* Account Type - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
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
                    <option value="">Select type</option>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                    <option value="joint">Joint</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              )}

              {/* Password Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
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
                    placeholder="••••••••"
                  />
                  <div className="absolute right-2 top-2 text-blue-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">8+ chars, uppercase, lowercase & numbers</p>
                {shouldShowError('password') && validationErrors.password && (
                  <p className="text-red-400 text-[10px] mt-1 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {validationErrors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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
                    placeholder="••••••••"
                  />
                  {/* Error message */}
                  {shouldShowError('confirmPassword') && validationErrors.confirmPassword && (
                    <p className="text-red-400 text-[10px] mt-1 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {isLogin ? (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-500 bg-blue-900 border-blue-700 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-xs text-gray-300">Remember device</span>
                    </label>
                    <Link to="/404" className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Forgot password?
                    </Link>
                  </div>
                ) : (
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
                      I agree to{" "}
                      <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                        Terms
                      </Link>
                      {" "}and{" "}
                      <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                        Policy
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
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading || !isFormValid()}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center animate-fade-in-up text-sm active:scale-95 ${
                  isLoading ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: '500ms' }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? "Accessing..." : "Creating..."}
                  </>
                ) : (
                  isLogin ? "Access Dashboard" : "Open Account"
                )}
              </button>

              {/* Security Note */}
              <div className="bg-blue-900/50 border border-blue-800 rounded-lg p-3 text-center animate-fade-in-up" style={{ animationDelay: '550ms' }}>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="truncate">Secure • SSL encrypted • FDIC insured</span>
                </div>
              </div>

              {/* Divider */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-blue-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-blue-950 text-gray-400">Quick access</span>
                </div>
              </div>

              {/* Alternative Access */}
              <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-blue-900 border border-blue-800 text-gray-300 py-2 px-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2 text-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 1.25a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5h9z"/>
                    <path d="M2.25 7.5a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-12z"/>
                  </svg>
                  Mobile Banking App
                </button>
              </div>

              {/* Switch Auth Mode */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <p className={`text-gray-400 ${isVerySmall ? 'text-xs' : 'text-sm'}`}>
                  {isLogin ? "New to TrustBank? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 text-sm active:scale-95"
                  >
                    {isLogin ? "Open an account" : "Sign in"}
                  </button>
                </p>
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
              backgroundColor: ['#2563EB', '#1D4ED8', '#3B82F6', '#0EA5E9', '#1E40AF'][i % 5],
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
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
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
        
        /* Prevent zoom on input focus in iOS */
        @media (max-width: 768px) {
          input[type="text"],
          input[type="email"],
          input[type="password"],
          textarea,
          select {
            font-size: 16px !important;
          }
        }
        
        /* Better touch targets for all interactive elements */
        button, a, input[type="checkbox"], input[type="radio"] {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Improve checkbox touch targets */
        input[type="checkbox"] {
          min-height: 20px;
          min-width: 20px;
        }
      `}</style>
    </div>
  );
}