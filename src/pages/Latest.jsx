import { useState, useEffect } from 'react';
import { 
  Check, X, Zap, Shield, Globe, Clock, 
  CreditCard, Building, Users, Smartphone,
  DollarSign, PieChart, TrendingUp, Lock,
  HelpCircle, ArrowRight, Crown, Sparkles,
  BadgeCheck, Target, Award, Star
} from 'lucide-react';

const Latest = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activePlan, setActivePlan] = useState('premium');
  const [isAnnual, setIsAnnual] = useState(true);

  // Plans data
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
      popular: false,
      cta: 'Get Started',
      icon: <CreditCard className="w-6 h-6" />
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
      popular: false,
      cta: 'Contact Sales',
      icon: <Award className="w-6 h-6" />
    }
  ];

  // Add-ons
  const addons = [
    {
      name: 'Investment Pro',
      price: '+$4.99/month',
      description: 'Advanced trading tools and analytics',
      features: ['Real-time market data', 'Advanced charts', 'Portfolio alerts'],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      name: 'Family Banking',
      price: '+$14.99/month',
      description: 'Manage up to 5 family members',
      features: ['Parental controls', 'Shared budgeting', 'Family rewards'],
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Business Tools',
      price: '+$19.99/month',
      description: 'Tools for entrepreneurs and freelancers',
      features: ['Invoice generation', 'Expense tracking', 'Tax reporting'],
      icon: <Building className="w-5 h-5" />
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

  // Features comparison
  const featureComparison = [
    { name: 'Monthly Fee', basic: '$0', premium: '$9.99', elite: '$49.99' },
    { name: 'Accounts Included', basic: '1', premium: '5', elite: 'Unlimited' },
    { name: 'ATM Fee Reimbursement', basic: 'None', premium: '$15/month', elite: 'Unlimited' },
    { name: 'Foreign Transaction Fees', basic: '3%', premium: '0%', elite: '0%' },
    { name: 'Investment Accounts', basic: 'No', premium: 'Yes', elite: 'Yes' },
    { name: 'Priority Support', basic: 'No', premium: 'Yes', elite: '24/7 Dedicated' },
    { name: 'Mobile Check Deposit', basic: 'Yes', premium: 'Yes', elite: 'Yes' },
    { name: 'Bill Pay', basic: 'Yes', premium: 'Yes', elite: 'Yes' },
    { name: 'Travel Insurance', basic: 'No', premium: 'No', elite: 'Yes' },
    { name: 'Concierge Services', basic: 'No', premium: 'No', elite: 'Yes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
     

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
            No Hidden Fees • Transparent Pricing
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Simple, Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Pricing For Everyone
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-3">
            Choose the perfect plan for your financial needs. All plans include FDIC insurance and 24/7 customer support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="relative bg-gray-100 rounded-xl p-1 inline-flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${!isAnnual ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${isAnnual ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <span className="flex items-center">
                  Annual Billing
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Save 20%
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Mobile Carousel */}
      <section className="py-4 sm:py-8 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Carousel View */}
          <div className="md:hidden overflow-x-auto pb-6 -mx-3">
            <div className="flex space-x-4 px-3 min-w-max">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`w-80 flex-shrink-0 rounded-2xl border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'} bg-white p-6`}
                >
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-xs text-gray-500">{plan.tagline}</p>
                      </div>
                    </div>
                    {plan.popular && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    {isAnnual && plan.id !== 'basic' && (
                      <div className="text-sm text-green-600 mt-1">
                        {plan.price.annually}
                      </div>
                    )}
                    {plan.id === 'basic' && (
                      <div className="text-lg font-semibold text-gray-900 mt-1">
                        Free forever
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 ${plan.popular ? 'border-blue-500 shadow-2xl scale-105' : 'border-gray-200'} bg-white p-6 lg:p-8 transition-transform`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.tagline}</p>
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
                    <div className="text-sm text-green-600 mt-2 font-medium">
                      {plan.price.annually}
                    </div>
                  )}
                  {plan.id === 'basic' && (
                    <div className="text-xl font-semibold text-gray-900 mt-2">
                      Free forever
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8">{plan.description}</p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Trust Badges */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Trusted by Millions Worldwide
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <Shield />, text: 'FDIC Insured', subtext: 'Up to $250,000' },
              { icon: <Lock />, text: 'Bank-Level Security', subtext: '256-bit Encryption' },
              { icon: <Globe />, text: 'Global Banking', subtext: '150+ Countries' },
              { icon: <Clock />, text: '24/7 Support', subtext: 'Always Available' }
            ].map((badge, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="text-blue-600">
                    {badge.icon}
                  </div>
                </div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{badge.text}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">{badge.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

     
    </div>
  );
};

export default Latest;