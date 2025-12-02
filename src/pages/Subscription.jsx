import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Mock Lucide-style Icons (for a single-file mandate)
const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const Building = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><rect x="9" y="6" width="6" height="4"/><path d="M8 12h8"/><path d="M8 16h8"/><path d="M8 20h8"/></svg>
);

const Shield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const pricingTiers = [
  {
    id: 'essential',
    name: 'Essential Banking',
    icon: '💳',
    price: 0,
    description: 'Perfect for basic banking needs with no monthly fees and essential features.',
    features: [
      { text: 'Free Checking Account', included: true },
      { text: 'FDIC Insurance up to $250K', included: true },
      { text: 'Mobile Banking App', included: true },
      { text: 'Debit Card', included: true },
      { text: 'Paperless Statements', included: true },
      { text: 'Priority Customer Support', included: false },
      { text: 'Investment Services', included: false },
      { text: 'Premium Rewards', included: false },
    ],
    highlight: false,
    buttonText: 'Open Account',
    popular: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'premium',
    name: 'Premium Banking',
    icon: '🏦',
    price: 25,
    description: 'Enhanced banking experience with premium benefits and dedicated support.',
    features: [
      { text: 'All Essential Features', included: true },
      { text: 'No ATM Fees Worldwide', included: true },
      { text: 'Priority Customer Support', included: true },
      { text: 'Higher Interest Rates', included: true },
      { text: 'Free Wire Transfers', included: true },
      { text: 'Investment Advisory', included: true },
      { text: 'Credit Card Rewards', included: false },
      { text: 'Dedicated Relationship Manager', included: false },
    ],
    highlight: true,
    buttonText: 'Go Premium',
    popular: true,
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'wealth',
    name: 'Wealth Management',
    icon: '💰',
    price: 150,
    description: 'Comprehensive wealth management with personalized financial planning.',
    features: [
      { text: 'All Premium Features', included: true },
      { text: 'Dedicated Relationship Manager', included: true },
      { text: 'Custom Investment Portfolio', included: true },
      { text: 'Estate Planning Services', included: true },
      { text: 'Tax Optimization Strategies', included: true },
      { text: 'Priority Loan Processing', included: true },
      { text: 'Exclusive Events Access', included: true },
      { text: 'Family Office Services', included: true },
    ],
    highlight: false,
    buttonText: 'Contact Advisor',
    popular: false,
    color: 'from-blue-800 to-blue-900'
  },
];

const FeatureItem = ({ text, included }) => {
  const iconColor = included ? 'text-green-500' : 'text-red-400';
  const textColor = included ? 'text-gray-700' : 'text-gray-500 line-through';

  return (
    <li className="flex items-center space-x-3 mb-3 animate-fade-in">
      {included ? (
        <Check className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      ) : (
        <X className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      )}
      <span className={`text-sm font-medium ${textColor} transition-all duration-300`}>
        {text}
      </span>
    </li>
  );
};

const PlanCard = ({ plan, onSelect, delay = 0 }) => {
  const isHighlighted = plan.highlight;
  const [isHovered, setIsHovered] = useState(false);

  // Conditional classes for highlighting the Premium plan
  const cardClasses = isHighlighted
    ? 'bg-white border-4 border-blue-500 shadow-2xl scale-[1.02] hover:scale-[1.05] transition-all duration-500 animate-pop-in'
    : 'bg-white border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up';
  
  const headerClasses = isHighlighted
    ? `bg-gradient-to-r ${plan.color} text-white p-6 rounded-t-lg`
    : `bg-gradient-to-r ${plan.color} p-6`;

  const priceColor = isHighlighted ? 'text-white' : 'text-white';
  const buttonClasses = isHighlighted
    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105'
    : `bg-white text-gray-800 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:scale-105`;

  return (
    <div 
      className={`flex flex-col rounded-2xl overflow-hidden transform ${cardClasses} relative`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Animated background effect for highlighted card */}
      {isHighlighted && (
        <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-5 rounded-2xl`}></div>
      )}
      
      {/* Floating particles animation on hover */}
      {isHovered && isHighlighted && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className={headerClasses}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{plan.icon}</span>
          <h3 className={`text-xl font-extrabold ${isHighlighted ? 'text-white' : 'text-white'} animate-fade-in`}>
            {plan.name}
          </h3>
        </div>
        <p className={`text-sm mb-4 ${isHighlighted ? 'text-blue-200' : 'text-white/90'} animate-fade-in delay-100`}>
          {plan.description}
        </p>
        
        <div className="flex items-baseline animate-scale-in">
          <span className={`text-5xl font-extrabold tracking-tight ${priceColor}`}>
            ${plan.price}
          </span>
          <span className={`ml-1 text-xl font-medium ${isHighlighted ? 'text-blue-200' : 'text-white/90'}`}>
            {plan.price === 0 ? 'forever' : '/month'}
          </span>
        </div>
      </div>

      {/* Features & Button */}
      <div className="flex flex-col flex-grow p-6 relative z-10">
        <ul className="flex-grow space-y-2">
          {plan.features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              text={feature.text} 
              included={feature.included}
            />
          ))}
        </ul>

        {/* Security Badge */}
        <div className="mt-4 mb-2 flex items-center justify-center text-xs text-gray-500">
          <Shield className="w-4 h-4 mr-1 text-green-500" />
          <span>FDIC Insured • 256-bit SSL • Secure Banking</span>
        </div>

        {/* Animated Button */}
        <button 
          type="button" 
          onClick={() => onSelect(plan.id)}
          className={`mt-2 w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${buttonClasses} animate-pulse-slow`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

// Checkout Component with animations
const CheckoutPage = ({ planId, onBack, onComplete }) => {
    const plan = pricingTiers.find(p => p.id === planId);
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    
    if (!plan) {
        return (
            <div className="text-center p-20 animate-fade-in">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Error: Banking Plan Not Found</h2>
                <button 
                    onClick={onBack}
                    className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
                    Back to Banking Plans
                </button>
            </div>
        );
    }

    const handleComplete = async () => {
        setIsProcessing(true);
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        onComplete();
        navigate('/404');
    };

    return (
        <div className="max-w-xl mx-auto p-8  mt-12 bg-white rounded-2xl shadow-2xl animate-slide-up border border-blue-100">
            <div className="animate-fade-in">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">
                    Open Your Account - {plan.name}
                </h1>
                <p className="text-gray-700 mb-4 animate-fade-in delay-200">
                    You are about to open a <strong>{plan.name}</strong> account {plan.price > 0 ? `for <strong>$${plan.price}/month</strong>` : '<strong>free forever</strong>'}.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600 bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-xl animate-fade-in delay-300">
                    <li className="font-semibold text-blue-600">Key Banking Features:</li>
                    {plan.features.filter(f => f.included).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: `${400 + index * 100}ms` }}>
                            <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> 
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Security & Benefits Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200 animate-fade-in delay-600">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Security & Benefits:
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li>• FDIC insured up to $250,000 per depositor</li>
                        <li>• 256-bit SSL encryption</li>
                        <li>• Real-time fraud monitoring</li>
                        <li>• 24/7 customer support</li>
                    </ul>
                </div>

                <div className="flex justify-between items-center pt-6 border-t animate-fade-in delay-700">
                    <button onClick={onBack}
                        className="text-blue-600 hover:text-blue-800 transition transform hover:scale-105 font-semibold">
                        &larr; Change Plan
                    </button>
                    <button 
                        onClick={handleComplete}
                        disabled={isProcessing}
                        className={`py-3 px-8 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                            isProcessing 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl'
                        }`}>
                        {isProcessing ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            'Open Account Now'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

const SubscriptionView = ({ handleSubscription }) => (
    <div className="max-w-7xl mx-auto pt-10 pb-20">
        
        {/* Animated Header Section */}
        <div className="text-center mb-16 mt-4 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Choose Your Banking Plan
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Secure banking solutions for every financial need. From essential banking to wealth management, we have the perfect plan for your financial journey.
          </p>
          
          {/* Banking Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { number: '5M+', label: 'Customers' },
              { number: '150+', label: 'Years of Trust' },
              { number: '$500B+', label: 'Assets Managed' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${500 + index * 200}ms` }}>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid with staggered animations */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {pricingTiers.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handleSubscription}
              delay={300 + index * 200}
            />
          ))}
        </div>
        
        {/* Security & Trust Info */}
        <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in delay-900">
          {[
            { icon: '🛡️', title: 'FDIC Insured', desc: 'Up to $250,000 per depositor' },
            { icon: '🔒', title: 'Bank-Grade Security', desc: '256-bit SSL encryption' },
            { icon: '🏛️', title: '150+ Years', desc: 'Trusted banking heritage' }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-blue-900/30 rounded-xl border border-blue-700/30">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-blue-200">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-2xl p-8 text-center animate-fade-in delay-1000 border border-blue-200/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Need Business Banking Solutions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We offer tailored banking solutions for businesses with dedicated relationship managers, 
            custom credit lines, and advanced cash management tools.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Business Banking Experts
          </Link>
        </div>
    </div>
);

// Main App Component with proper routing logic
const Subscription = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [message, setMessage] = useState('');
  const [isAuthReady, setIsAuthReady] = useState(false); 

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Function to handle moving to checkout
  const handleSubscription = (planId) => {
    setSelectedPlanId(planId);
    setCurrentView('checkout');
    setMessage(`🏦 Loading account setup for ${planId}...`);
    setTimeout(() => setMessage(''), 1500);
    
    // Scroll to top when switching to checkout
    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  // Function to handle purchase completion
  const handlePurchaseComplete = () => {
    setMessage(`✅ Account opened successfully! Welcome to ${selectedPlanId}! Our banking team will contact you within 2 hours.`);
    setTimeout(() => setMessage(''), 5000);
    setCurrentView('home');
    setSelectedPlanId(null);
    
    // Scroll to top when returning home
    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  // Function to go back to subscription view
  const handleBackToPlans = () => {
    setCurrentView('home');
    setSelectedPlanId(null);
    
    // Scroll to top when going back to plans
    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  // Scroll to top when component mounts and when view changes
  useEffect(() => {
    scrollToTop();
  }, [currentView]);

  // Mock Firebase initialization hook
  useEffect(() => {
    setIsAuthReady(true);
  }, []);

  // Router Logic
  let content;
  switch (currentView) {
      case 'checkout':
          content = <CheckoutPage 
            planId={selectedPlanId} 
            onBack={handleBackToPlans} 
            onComplete={handlePurchaseComplete}
          />;
          break;
      case 'home':
      default:
          content = <SubscriptionView handleSubscription={handleSubscription} />;
          break;
  }

  return (
    <div className="font-sans bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen p-4 sm:p-8 pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#2563EB', '#1D4ED8', '#3B82F6', '#0EA5E9', '#1E40AF'][i % 5]
              }, ${
                ['#1E40AF', '#1E3A8A', '#3B82F6', '#06B6D4', '#1D4ED8'][(i + 2) % 5]
              })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      {/* Global Message Box with enhanced animation */}
      {message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-2xl transition-all duration-500 animate-slide-down">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <span>{message}</span>
          </div>
        </div>
      )}

      {/* Add a top anchor for scrolling */}
      <div id="top-anchor" className="absolute top-0"></div>

      <div className="relative z-10">
        {content}
      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatSlow {
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
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
    </div>
  );
};

export default Subscription;