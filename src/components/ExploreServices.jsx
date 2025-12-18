import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Shield, Zap, CreditCard, TrendingUp, 
  PieChart, Globe, Clock, Users, Building, Award,
  Lock, DollarSign, ArrowRight, CheckCircle, Sparkles,
  Banknote, SmartphoneNfc, Cpu, BarChart3, Wallet
} from 'lucide-react';

const ExploreServices = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Features with emojis and vibrant colors
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description: "Get personalized financial recommendations using advanced AI",
      color: "from-purple-500 to-pink-500",
      emoji: "🤖"
    },
    {
      icon: <SmartphoneNfc className="w-8 h-8" />,
      title: "Contactless Payments",
      description: "Tap & pay instantly with NFC technology",
      color: "from-blue-500 to-cyan-500",
      emoji: "📱"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track spending patterns with live dashboards",
      color: "from-green-500 to-emerald-500",
      emoji: "📊"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Budgeting",
      description: "Automated savings and expense tracking",
      color: "from-amber-500 to-orange-500",
      emoji: "✨"
    }
  ];

  // Digital Cards - Modern fintech products
  const digitalCards = [
    {
      name: "Neo Card",
      type: "Virtual Debit",
      color: "from-purple-600 to-pink-600",
      features: ["3% cashback", "No foreign fees", "Instant issuance"],
      annualFee: "$0",
      tag: "Most Popular"
    },
    {
      name: "Travel Pro",
      type: "Premium Credit",
      color: "from-blue-600 to-indigo-600",
      features: ["Travel insurance", "Lounge access", "4x points"],
      annualFee: "$99",
      tag: "Travel"
    },
    {
      name: "Business Elite",
      type: "Corporate Card",
      color: "from-emerald-600 to-teal-600",
      features: ["Unlimited cards", "Expense reports", "Receipt capture"],
      annualFee: "$299",
      tag: "Business"
    }
  ];

  // App Features - Mobile banking features
  const appFeatures = [
    {
      icon: "🔐",
      title: "Biometric Login",
      desc: "Face ID & Fingerprint security"
    },
    {
      icon: "💸",
      title: "Instant Transfers",
      desc: "Send money in seconds"
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      desc: "Save for dreams visually"
    },
    {
      icon: "📈",
      title: "Investment Hub",
      desc: "Trade stocks & crypto"
    }
  ];

  // Testimonials - Different personas
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Digital Nomad",
      content: "Managing money across 5 countries has never been easier. The Neo Card is a game-changer!",
      avatar: "AR",
      location: "🌍 Remote"
    },
    {
      name: "Maya Patel",
      role: "Startup Founder",
      content: "The business analytics saved us 15% in operational costs. Essential for any growing company.",
      avatar: "MP",
      location: "💼 Tech Industry"
    },
    {
      name: "James Wilson",
      role: "Freelancer",
      content: "Automated tax savings and expense tracking made my financial life stress-free.",
      avatar: "JW",
      location: "🎨 Creative Field"
    }
  ];

  // Stats with modern fintech metrics
  const stats = [
    { value: "4.8M", label: "Active Users", icon: <Users />, growth: "+42% YoY" },
    { value: "$18B", label: "Volume Processed", icon: <DollarSign />, growth: "+78% YoY" },
    { value: "99.9%", label: "Uptime", icon: <Zap />, growth: "Always on" },
    { value: "1.2M", label: "Cards Issued", icon: <CreditCard />, growth: "+65% YoY" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      
      {/* Hero Section - Futuristic design */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981'][i % 4]
                }, transparent)`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium mb-8 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                🚀 The Future of Banking is Here
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Banking
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  Reimagined
                </span>
                for the Digital Age
              </h1>
              
              <p className="text-xl text-gray-300 mt-6 mb-8 leading-relaxed">
                Experience financial freedom with our all-in-one digital banking platform. 
                No branches, no paperwork, just seamless banking powered by technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center group">
                  <Sparkles className="mr-3 w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/404" className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all hover:shadow-lg backdrop-blur-sm flex items-center justify-center">
                  <Smartphone className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </div>

              {/* App Store Badges */}
              <div className="flex gap-4 mt-8">
                <Link to="/404" className="flex items-center justify-center gap-2 px-6 py-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01z" fill="currentColor"/>
                    <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Link>
                
                <Link to="/404" className="flex items-center justify-center gap-2 px-6 py-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M3 20.5V3.5C3 2.67 3.67 2 4.5 2h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15C3.67 22 3 21.33 3 20.5z" fill="#00ff00"/>
                    <path d="M8.5 10h7v4h-7z" fill="#000"/>
                    <path d="M16.5 10H17V14H16.5z" fill="#000"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="relative">
              {/* Floating phone mockup */}
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gray-900 rounded-[40px] p-6 border border-gray-800 shadow-2xl">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl border-b border-l border-r border-gray-800"></div>
                  
                  {/* App screen */}
                  <div className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <div className="text-sm text-gray-400">Total Balance</div>
                        <div className="text-3xl font-bold">$8,459.23</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Wallet className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <Link to="/404" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                        <CreditCard className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Cards</div>
                      </Link>
                      <Link to="/404" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                        <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Invest</div>
                      </Link>
                      <Link to="/404" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                        <PieChart className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Budget</div>
                      </Link>
                      <Link to="/404" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                        <Globe className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Global</div>
                      </Link>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                            <div className="text-xl">🍔</div>
                          </div>
                          <div>
                            <div className="font-medium">Food & Dining</div>
                            <div className="text-xs text-gray-400">Today • 2:30 PM</div>
                          </div>
                        </div>
                        <div className="text-red-400 font-bold">-$24.50</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                            <div className="text-xl">💰</div>
                          </div>
                          <div>
                            <div className="font-medium">Salary Deposit</div>
                            <div className="text-xs text-gray-400">Today • 9:00 AM</div>
                          </div>
                        </div>
                        <div className="text-green-400 font-bold">+$3,500.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Millions</span> Choose NeoBank
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for speed, security, and simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Card</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Virtual cards that work anywhere, instantly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {digitalCards.map((card, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-8 min-h-[300px] transform transition-all duration-500 group-hover:-translate-y-4`}>
                  {/* Card chip */}
                  <div className="w-12 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg mb-8 relative">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg"></div>
                  </div>
                  
                  {/* Card number */}
                  <div className="text-xl font-mono tracking-widest mb-8">•••• •••• •••• 4839</div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm opacity-80">CARDHOLDER NAME</div>
                      <div className="text-xl font-bold">NEOBANK</div>
                      <div className="text-sm mt-2">VALID THRU 06/28</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{card.name}</div>
                      <div className="text-sm opacity-80">{card.type}</div>
                    </div>
                  </div>
                </div>
                
                {/* Card details below */}
                <div className="mt-6 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                  {card.tag && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
                      {card.tag}
                    </span>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Annual Fee</div>
                      <div className="text-2xl font-bold">{card.annualFee}</div>
                    </div>
                    <Link to="/404" className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">One App</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your entire financial life, beautifully organized
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with glow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4">
                  <div className="text-purple-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 mb-1">{stat.label}</div>
                <div className="text-sm text-green-400">{stat.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Digital Natives</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the revolution of modern banking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 blur-xl opacity-20"></div>
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-amber-400/80">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-12 border border-gray-800">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Join the Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started in minutes. No credit check, no commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25">
                Create Free Account
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                Talk to Sales
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-400">
              <div>🎯 No monthly fees</div>
              <div>🔒 FDIC insured</div>
              <div>⚡ Instant setup</div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default ExploreServices;