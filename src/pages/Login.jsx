import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
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
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call and then navigate to 404
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to 404 page after form submission
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
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Banking Illustration & Info */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mt-16 font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-4">
                {isLogin ? "Welcome to TrustBank" : "Join TrustBank Today"}
              </h1>
              <p className="text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
                {isLogin 
                  ? "Sign in to access your accounts, manage finances, and track your investments."
                  : "Open your account and experience secure, innovative banking solutions."
                }
              </p>
            </div>

            {/* Banking Features List */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: "🏦", text: "FDIC Insured up to $250,000", color: "from-blue-500 to-blue-600" },
                { icon: "🔒", text: "Bank-grade 256-bit encryption", color: "from-green-500 to-emerald-600" },
                { icon: "📱", text: "24/7 Mobile Banking Access", color: "from-blue-600 to-indigo-600" },
                { icon: "💳", text: "Contactless payments & digital wallet", color: "from-purple-500 to-violet-600" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-blue-950 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 group border border-blue-800"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Banking Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { number: "5M+", label: "Customers" },
                { number: "150+", label: "Years of Trust" },
                { number: "$500B+", label: "Assets Managed" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Security Badge */}
            <div className="mt-8 max-w-md mx-auto lg:mx-0">
              <div className="bg-blue-950/50 border border-blue-800 rounded-xl p-4 flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Your Security is Our Priority</div>
                  <div className="text-xs text-gray-400">Multi-factor authentication & real-time fraud monitoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className={`bg-blue-950 rounded-2xl mt-16 shadow-2xl p-8 lg:p-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} border border-blue-800`}>
            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">
                  {isLogin ? "🏦" : "💼"}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mt-16 mb-2">
                {isLogin ? "Secure Banking Login" : "Open Your Account"}
              </h2>
              <p className="text-gray-400">
                {isLogin 
                  ? "Enter your credentials to access your banking dashboard"
                  : "Register to access premium banking services"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields - Only for Signup */}
              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-4 py-3 bg-blue-900 border border-blue-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600 placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-4 py-3 bg-blue-900 border border-blue-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600 placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-blue-900 border border-blue-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600 placeholder-gray-400"
                  placeholder="your.email@domain.com"
                />
              </div>

              {/* Account Type - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <label htmlFor="accountType" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Account Type
                  </label>
                  <select
                    id="accountType"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-900 border border-blue-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600"
                  >
                    <option value="">Select account type</option>
                    <option value="personal">Personal Checking/Savings</option>
                    <option value="business">Business Account</option>
                    <option value="joint">Joint Account</option>
                    <option value="student">Student Banking</option>
                    <option value="senior">Senior Account</option>
                    <option value="premium">Premium Banking</option>
                  </select>
                </div>
              )}

              {/* Password Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-blue-900 border border-blue-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600 placeholder-gray-400 pr-10"
                    placeholder="••••••••"
                  />
                  <div className="absolute right-3 top-3 text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Must include 8+ characters, uppercase, lowercase & numbers</p>
              </div>

              {/* Confirm Password - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className={`w-full px-4 py-3 bg-blue-900 border text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600 placeholder-gray-400 ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? 'border-red-500 ring-2 ring-red-500/20'
                        : 'border-blue-700'
                    }`}
                    placeholder="••••••••"
                  />
                  {/* Error message */}
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-400 text-xs mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Passwords do not match
                    </p>
                  )}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
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
                      <span className="ml-2 text-sm text-gray-300">Remember this device</span>
                    </label>
                    <Link to="/404" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
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
                      required
                      className="w-4 h-4 text-blue-500 bg-blue-900 border-blue-700 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      I agree to TrustBank's{" "}
                      <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                        Terms of Service
                      </Link>
                      ,{" "}
                      <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                        Privacy Policy
                      </Link>
                      {" "}and{" "}
                      <Link to="/404" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                        Electronic Communications Consent
                      </Link>
                    </span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center animate-fade-in-up ${
                  isLoading ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: '500ms' }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? "Accessing Account..." : "Creating Account..."}
                  </>
                ) : (
                  isLogin ? "Access Banking Dashboard" : "Open Your Account"
                )}
              </button>

              {/* Security Note */}
              <div className="bg-blue-900/50 border border-blue-800 rounded-xl p-4 text-center animate-fade-in-up" style={{ animationDelay: '550ms' }}>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure connection • 256-bit SSL encryption • FDIC insured</span>
                </div>
              </div>

              {/* Divider */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-blue-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-blue-950 text-gray-400">Quick access</span>
                </div>
              </div>

              {/* Alternative Access */}
              <div className="grid grid-cols-1 gap-4 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-blue-900 border border-blue-800 text-gray-300 py-3 px-4 rounded-xl font-medium hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 1.25a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5h9z"/>
                    <path d="M2.25 7.5a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-12z"/>
                    <path d="M5.25 11.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.25z"/>
                    <path d="M5.25 14.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.25z"/>
                    <path d="M5.25 17.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.25z"/>
                  </svg>
                  Mobile Banking App
                </button>
              </div>

              {/* Switch Auth Mode */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <p className="text-gray-400">
                  {isLogin ? "New to TrustBank? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                  >
                    {isLogin ? "Open an account" : "Sign in to online banking"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              width: `${Math.random() * 12 + 5}px`,
              height: `${Math.random() * 12 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#2563EB', '#1D4ED8', '#3B82F6', '#0EA5E9', '#1E40AF'][i % 5],
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      </div>

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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}