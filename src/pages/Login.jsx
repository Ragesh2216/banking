import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    loginRemember: false,
    signupName: '',
    signupEmail: '',
    signupPhone: '',
    signupPassword: '',
    signupConfirmPassword: '',
    signupTerms: false,
    signupAccountType: 'savings'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const flip = () => setIsFlipped(true);
  const flipAgain = () => setIsFlipped(false);

  const toggleLoginPassword = () => setShowLoginPassword(prev => !prev);
  const toggleSignupPassword = () => setShowSignupPassword(prev => !prev);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Welcome back to SecureBank!`);
      navigate('/404');
    }, 1500);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.signupPassword !== formData.signupConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.signupTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Congratulations ${formData.signupName}! Your ${formData.signupAccountType} account has been created.`);
      navigate('/404');
    }, 2000);
  };

  const customStyles = `
    .auth-container {
      background: linear-gradient(-45deg, #1e3a8a, #1e40af, #1d4ed8, #2563eb);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      min-height: 100vh;
      width: 100vw;
      overflow-x: hidden;
    }
    .card-perspective {
      perspective: 1500px;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
    .flip-card-inner {
      transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
      width: 100%;
      height: 580px;
    }
    @media (min-width: 375px) {
      .flip-card-inner {
        height: 600px;
      }
    }
    @media (min-width: 768px) {
      .flip-card-inner {
        height: 650px;
      }
    }
    .flip-card-inner.flipped {
      transform: rotateY(180deg);
    }
    .card-face {
      backface-visibility: hidden;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 1.5rem;
      padding: 1.5rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    @media (min-width: 768px) {
      .card-face {
        padding: 2rem;
      }
    }
    .box-signup {
      transform: rotateY(180deg);
    }
    .floating-element {
      animation: float 6s ease-in-out infinite;
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .glow-effect {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    .bank-gradient {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
    }
    .secure-gradient {
      background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
    }
    
    /* 320px specific fixes */
    @media (max-width: 320px) {
      .text-3xl { font-size: 1.5rem !important; }
      .text-2xl { font-size: 1.25rem !important; }
      .text-xl { font-size: 1.125rem !important; }
      .text-sm { font-size: 0.75rem !important; }
      .text-xs { font-size: 0.65rem !important; }
      .card-face { padding: 1rem !important; }
      input, select, button { font-size: 14px !important; }
      .flip-card-inner { height: 560px !important; }
    }
    
    /* Mobile touch targets */
    @media (max-width: 768px) {
      input, select, button, a {
        min-height: 44px;
        font-size: 16px;
      }
      button {
        touch-action: manipulation;
      }
    }
    
    /* Prevent zoom on iOS input focus */
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
    
    /* Scrollbar styling */
    .card-face::-webkit-scrollbar {
      width: 4px;
    }
    .card-face::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    .card-face::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      
      <div className="auth-container flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-20 left-4 z-50 w-10 h-10 bg-blue-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-blue-700 text-lg hover:bg-blue-800 active:bg-blue-900 transition-colors duration-200 shadow-lg"
          aria-label="Go back"
        >
          ← 
        </button>

      

        {/* Banking Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full opacity-10 blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg opacity-10 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-5 blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Main Card Container */}
        <div className={`card-perspective transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} mt-8 mb-8`}>
          
          {/* Flip Container */}
          <div className={`flip-card-inner relative ${isFlipped ? 'flipped' : ''}`}>
            
            {/* LOGIN SIDE - BANKING PORTAL */}
            <div className="box-login card-face flex flex-col items-center justify-center glow-effect">
              <div className="w-full max-w-xs animate-fadeInUp">
                {/* Banking Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'} bank-gradient rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-xl sm:text-2xl">🏦</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                    Secure Banking
                  </h1>
                  <p className="text-white/70 text-xs sm:text-sm">
                    Access your accounts securely
                  </p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-4 sm:space-y-6">
                  {/* Customer ID / Email */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-id-card text-white/60 group-focus-within:text-blue-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type="text"
                      name="loginEmail"
                      placeholder="Customer ID"
                      value={formData.loginEmail}
                      onChange={handleInputChange}
                      required
                      autoComplete="username"
                    />
                  </div>

                  {/* Password */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-lock text-white/60 group-focus-within:text-blue-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-12 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type={showLoginPassword ? "text" : "password"}
                      name="loginPassword"
                      placeholder="Password"
                      value={formData.loginPassword}
                      onChange={handleInputChange}
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={toggleLoginPassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      aria-label={showLoginPassword ? "Hide password" : "Show password"}
                    >
                      <i className={`fa text-white/60 hover:text-blue-300 transition-colors duration-200 text-sm ${showLoginPassword ? 'fa-eye' : 'fa-eye-slash'}`} />
                    </button>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <label className="flex items-center text-white/70 cursor-pointer hover:text-white transition-colors duration-200">
                      <input 
                        type="checkbox" 
                        name="loginRemember"
                        checked={formData.loginRemember}
                        onChange={handleInputChange}
                        className={`mr-2 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-blue-400 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`}
                      />
                      Remember ID
                    </label>
                    <button
                      type="button"
                      onClick={() => navigate('/404')}
                      className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bank-gradient text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base ${
                      isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-xl active:scale-95'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <i className="fa fa-spinner fa-spin"></i>
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <i className="fa fa-sign-in-alt"></i>
                        ACCESS BANKING
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center my-4 sm:my-6">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-2 sm:mx-4 text-white/60 text-xs sm:text-sm">New to SecureBank?</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                {/* Open Account Button */}
                <div className="text-center">
                  <button
                    onClick={flip}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <i className="fa fa-plus-circle"></i>
                    OPEN ACCOUNT
                  </button>
                </div>

               
              </div>
            </div>

            {/* SIGN UP SIDE - ACCOUNT OPENING */}
            <div className="box-signup card-face flex flex-col items-center justify-center glow-effect">
              <div className="w-full max-w-xs animate-fadeInUp">
                {/* Account Opening Header */}
                <div className="text-center mt-16  mb-6 sm:mb-8">
                  <div className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'} secure-gradient rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent mb-2">
                    Open Account
                  </h1>
                  
                </div>

                <form onSubmit={handleSignupSubmit} className="space-y-4 sm:space-y-6">
                  {/* Full Name */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-user text-white/60 group-focus-within:text-emerald-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type="text"
                      name="signupName"
                      placeholder="Full Name"
                      value={formData.signupName}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-envelope text-white/60 group-focus-within:text-emerald-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type="email"
                      name="signupEmail"
                      placeholder="Email Address"
                      value={formData.signupEmail}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-phone text-white/60 group-focus-within:text-emerald-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type="tel"
                      name="signupPhone"
                      placeholder="Mobile Number"
                      value={formData.signupPhone}
                      onChange={handleInputChange}
                      required
                      autoComplete="tel"
                      maxLength="10"
                    />
                  </div>

                  {/* Account Type */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-bank text-white/60 group-focus-within:text-emerald-300 transition-colors duration-200 text-sm" />
                    </div>
                    <select
                      className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base appearance-none"
                      name="signupAccountType"
                      value={formData.signupAccountType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Account Type</option>
                      <option value="savings">Savings Account</option>
                      <option value="current">Current Account</option>
                      <option value="salary">Salary Account</option>
                      <option value="student">Student Account</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <i className="fa fa-chevron-down text-white/60 text-sm"></i>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-lock text-white/60 group-focus-within:text-emerald-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-12 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type={showSignupPassword ? "text" : "password"}
                      name="signupPassword"
                      placeholder="Create Password"
                      value={formData.signupPassword}
                      onChange={handleInputChange}
                      required
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={toggleSignupPassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      aria-label={showSignupPassword ? "Hide password" : "Show password"}
                    >
                      <i className={`fa text-white/60 hover:text-emerald-300 transition-colors duration-200 text-sm ${showSignupPassword ? 'fa-eye' : 'fa-eye-slash'}`} />
                    </button>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-lock text-white/60 group-focus-within:text-emerald-300 transition-colors duration-200 text-sm" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                      type="password"
                      name="signupConfirmPassword"
                      placeholder="Confirm Password"
                      value={formData.signupConfirmPassword}
                      onChange={handleInputChange}
                      required
                      autoComplete="new-password"
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start text-xs sm:text-sm">
                    <label className="flex items-start text-white/70 cursor-pointer hover:text-white transition-colors duration-200">
                      <input 
                        type="checkbox" 
                        name="signupTerms"
                        checked={formData.signupTerms}
                        onChange={handleInputChange}
                        required
                        className={`mr-2 mt-0.5 rounded bg-white/10 border-white/20 text-emerald-500 focus:ring-emerald-400 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'} flex-shrink-0`}
                      />
                      <span className="text-left">
                        I agree to the{" "}
                        <button type="button" onClick={() => navigate('/404')} className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 inline">
                          Terms
                        </button>
                        {" "}&{" "}
                        <button type="button" onClick={() => navigate('/404')} className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 inline">
                          Privacy
                        </button>
                      </span>
                    </label>
                  </div>

                  {/* Account Opening Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full secure-gradient text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base ${
                      isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-xl active:scale-95'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <i className="fa fa-spinner fa-spin"></i>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="fa fa-check-circle"></i>
                        OPEN ACCOUNT
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center my-4 sm:my-6">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-2 sm:mx-4 text-white/60 text-xs sm:text-sm">Have an account?</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                {/* Back to Login */}
                <div className="text-center">
                  <button
                    onClick={flipAgain}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <i className="fa fa-sign-in-alt"></i>
                    EXISTING ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Login;