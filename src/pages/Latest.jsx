import { useState, useEffect, useRef } from 'react';
import { 
  Check, X, Zap, Shield, Globe, Clock, 
  CreditCard, Building, Users, Smartphone,
  DollarSign, PieChart, TrendingUp, Lock,
  HelpCircle, ArrowRight, Crown, Sparkles,
  BadgeCheck, Target, Award, Star,
  ShieldCheck, Globe2, Clock4, CreditCard as CreditCardIcon,
  Building2, Users2, Smartphone as SmartphoneIcon,
  DollarSign as DollarSignIcon, PieChart as PieChartIcon,
  TrendingUp as TrendingUpIcon, Lock as LockIcon,
  ChevronRight, Heart, Award as AwardIcon,
  Trophy, CheckCircle, XCircle, Sparkle,
  Shield as ShieldIcon, Globe as GlobeIcon
} from 'lucide-react';
import { Link } from "react-router-dom"; 

const Latest = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activePlan, setActivePlan] = useState('premium');
  const [isAnnual, setIsAnnual] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSection, setVisibleSection] = useState('');
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  // Handle scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Check which section is visible
      const sections = ['hero', 'pricing', 'features', 'trust', 'faq', 'comparison'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            setVisibleSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Plans data with enhanced icons
  const plans = [
    {
      id: 'basic',
      name: 'Starter',
      tagline: 'Perfect for individuals',
      price: {
        monthly: '0',
        annual: '0',
        annually: 'Free forever'
      },
      description: 'Essential banking features for daily needs',
      features: [
        { text: '1 Personal Account', included: true },
        { text: 'Basic Debit Card', included: true },
        { text: 'Mobile Banking App', included: true },
        { text: 'ATM Access Nationwide', included: true },
        { text: '2 Free Transfers/Month', included: true },
        { text: 'Basic Security', included: true },
        { text: '24/7 Chat Support', included: false },
        { text: 'Investment Accounts', included: false },
        { text: 'Priority Support', included: false },
        { text: 'Travel Insurance', included: false }
      ],
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
      popular: false,
      cta: 'Get Started',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'premium',
      name: 'Premium',
      tagline: 'Most popular choice',
      price: {
        monthly: '9.99',
        annual: '7.99',
        annually: 'Save 20%'
      },
      description: 'Advanced features for growing wealth',
      features: [
        { text: 'Up to 5 Accounts', included: true },
        { text: 'Premium Metal Card', included: true },
        { text: 'Unlimited Transfers', included: true },
        { text: 'Global ATM Access', included: true },
        { text: 'Investment Accounts', included: true },
        { text: 'Advanced Security', included: true },
        { text: '24/7 Phone Support', included: true },
        { text: 'Financial Planning', included: true },
        { text: 'Travel Insurance', included: false },
        { text: 'Private Banking', included: false }
      ],
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-700 hover:to-pink-700',
      popular: true,
      cta: 'Upgrade Now',
      icon: <Crown className="w-6 h-6" />
    },
    {
      id: 'enterprise',
      name: 'Elite',
      tagline: 'For high-net-worth individuals',
      price: {
        monthly: '49.99',
        annual: '39.99',
        annually: 'Save $120'
      },
      description: 'Premium services with dedicated support',
      features: [
        { text: 'Unlimited Accounts', included: true },
        { text: 'Black Elite Card', included: true },
        { text: 'Unlimited Everything', included: true },
        { text: 'Worldwide ATM Access', included: true },
        { text: 'Portfolio Management', included: true },
        { text: 'Military-Grade Security', included: true },
        { text: 'Dedicated Relationship Manager', included: true },
        { text: 'Full Travel Insurance', included: true },
        { text: 'Private Banking Services', included: true },
        { text: 'Concierge Services', included: true }
      ],
      color: 'from-amber-500 to-orange-600',
      hoverColor: 'hover:from-amber-600 hover:to-orange-700',
      popular: false,
      cta: 'Contact Sales',
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  // Add-ons with enhanced icons
  const addons = [
    {
      name: 'Investment Pro',
      price: '+$4.99/month',
      description: 'Advanced trading tools and analytics',
      features: ['Real-time market data', 'Advanced charts', 'Portfolio alerts'],
      icon: <TrendingUpIcon className="w-6 h-6" />
    },
    {
      name: 'Family Banking',
      price: '+$14.99/month',
      description: 'Manage up to 5 family members',
      features: ['Parental controls', 'Shared budgeting', 'Family rewards'],
      icon: <Users2 className="w-6 h-6" />
    },
    {
      name: 'Business Tools',
      price: '+$19.99/month',
      description: 'Tools for entrepreneurs and freelancers',
      features: ['Invoice generation', 'Expense tracking', 'Tax reporting'],
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is my money safe with your bank?',
      answer: 'Yes, all deposits are FDIC insured up to $250,000 per depositor.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in transparent pricing. All fees are clearly listed upfront.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes, students receive 50% off all premium plans for up to 4 years.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime with no cancellation fees.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, bank transfers, and digital wallets.'
    }
  ];

  // Trust badges with enhanced icons
  const trustBadges = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: 'FDIC Insured', subtext: 'Up to $250,000' },
    { icon: <LockIcon className="w-6 h-6" />, text: 'Bank-Level Security', subtext: '256-bit Encryption' },
    { icon: <Globe2 className="w-6 h-6" />, text: 'Global Banking', subtext: '150+ Countries' },
    { icon: <Clock4 className="w-6 h-6" />, text: '24/7 Support', subtext: 'Always Available' }
  ];

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
     

      {/* Hero Section */}
      <section id="hero" className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 text-sm sm:text-base font-medium mb-6 sm:mb-8 transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'} group cursor-pointer hover:from-blue-200 hover:to-cyan-200`}
               onClick={() => scrollToSection('pricing')}>
            <Sparkle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
            No Hidden Fees • Transparent Pricing
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Simple, Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Pricing For Everyone
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-3 sm:px-4">
            Choose the perfect plan for your financial needs. All plans include FDIC insurance and 24/7 customer support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8 sm:mb-12 px-3">
            <div className="relative bg-gray-100 rounded-xl p-1 sm:p-1.5 inline-flex shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${!isAnnual ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform -translate-y-0.5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'} flex items-center`}
              >
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${isAnnual ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform -translate-y-0.5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'} flex items-center`}
              >
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="flex items-center">
                  Annual Billing
                  <span className="ml-2 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Save 20%
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" ref={pricingRef} className="py-8 sm:py-12 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Carousel View */}
          <div className="md:hidden overflow-x-auto pb-8 -mx-3">
            <div className="flex space-x-6 px-3 min-w-max">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`w-80 flex-shrink-0 rounded-2xl border-2 ${plan.popular ? 'border-blue-500 shadow-2xl' : 'border-gray-200'} bg-white p-6 transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {plan.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{plan.name}</h3>
                        <p className="text-sm text-gray-500">{plan.tagline}</p>
                      </div>
                    </div>
                    {plan.popular && (
                      <span className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-500 text-lg ml-2">/month</span>
                    </div>
                    {isAnnual && plan.id !== 'basic' && (
                      <div className="text-sm text-green-600 mt-2 font-medium flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {plan.price.annually}
                      </div>
                    )}
                    {plan.id === 'basic' && (
                      <div className="text-lg font-semibold text-gray-900 mt-2 flex items-center">
                        <Sparkle className="w-5 h-5 mr-2 text-blue-500" />
                        Free forever
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-8">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700 group-hover:text-gray-900' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link 
                    to="/404" 
                    className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center group ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md'}`}
                  >
                    {plan.cta}
                    <ArrowRight className={`ml-2 w-4 h-4 ${plan.popular ? 'group-hover:translate-x-1' : ''} transition-transform`} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 ${plan.popular ? 'border-blue-500 shadow-2xl' : 'border-gray-200'} bg-white p-8 transition-all duration-500 hover:shadow-2xl ${plan.popular ? 'scale-105' : 'hover:scale-[1.02]'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg flex items-center">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-10">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-500 text-xl ml-2">/month</span>
                  </div>
                  {isAnnual && plan.id !== 'basic' && (
                    <div className="text-base text-green-600 mt-3 font-medium flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {plan.price.annually}
                    </div>
                  )}
                  {plan.id === 'basic' && (
                    <div className="text-xl font-semibold text-gray-900 mt-3 flex items-center">
                      <Sparkle className="w-6 h-6 mr-2 text-blue-500" />
                      Free forever
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-10 text-lg">{plan.description}</p>

                {/* Features */}
                <div className="space-y-5 mb-10">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center group">
                      {feature.included ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      ) : (
                        <XCircle className="w-6 h-6 text-gray-300 mr-4 flex-shrink-0" />
                      )}
                      <span className={`text-base ${feature.included ? 'text-gray-700 group-hover:text-gray-900' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to="/404" 
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg border-2 border-gray-200'}`}
                >
                  {plan.cta}
                  <ArrowRight className={`ml-3 w-5 h-5 ${plan.popular ? 'group-hover:translate-x-2' : 'group-hover:translate-x-1'} transition-transform`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Trusted by Millions Worldwide
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your security and satisfaction are our top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-5 sm:p-6 border border-gray-200 text-center transition-all duration-500 hover:shadow-xl hover:border-blue-200 hover:scale-105 ${visibleSection === 'trust' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-4 group hover:from-blue-200 hover:to-cyan-200 transition-colors">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                </div>
                <div className="font-bold text-gray-900 text-base sm:text-lg mb-1">{badge.text}</div>
                <div className="text-sm text-gray-600">{badge.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default Latest;