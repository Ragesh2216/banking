import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Smartphone, Shield, Zap, CreditCard, TrendingUp, 
  PieChart, Globe, Clock, Users, Building, Award,
  Lock, DollarSign, ArrowRight, CheckCircle, Sparkles,
  Banknote, SmartphoneNfc, Cpu, BarChart3, Wallet
} from 'lucide-react';

const ExploreServices = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const cardsRef = useRef(null);
  const appFeaturesRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Animation controls
  const heroControls = useAnimation();
  const featuresControls = useAnimation();
  const cardsControls = useAnimation();
  const appFeaturesControls = useAnimation();
  const statsControls = useAnimation();
  const testimonialsControls = useAnimation();
  const ctaControls = useAnimation();
  
  // InView detection
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  const isAppFeaturesInView = useInView(appFeaturesRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const isCTAInView = useInView(ctaRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Trigger animations when elements come into view
  useEffect(() => {
    if (isHeroInView) heroControls.start('visible');
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (isFeaturesInView) featuresControls.start('visible');
  }, [isFeaturesInView, featuresControls]);

  useEffect(() => {
    if (isCardsInView) cardsControls.start('visible');
  }, [isCardsInView, cardsControls]);

  useEffect(() => {
    if (isAppFeaturesInView) appFeaturesControls.start('visible');
  }, [isAppFeaturesInView, appFeaturesControls]);

  useEffect(() => {
    if (isStatsInView) statsControls.start('visible');
  }, [isStatsInView, statsControls]);

  useEffect(() => {
    if (isTestimonialsInView) testimonialsControls.start('visible');
  }, [isTestimonialsInView, testimonialsControls]);

  useEffect(() => {
    if (isCTAInView) ctaControls.start('visible');
  }, [isCTAInView, ctaControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const gradientFlow = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      
      {/* Hero Section - Futuristic design */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981'][i % 4]
                }, transparent)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            < motion.div
              initial="hidden"
              animate={heroControls}
              variants={slideInFromLeft}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium mb-8 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                variants={scaleIn}
              >
                <Zap className="w-4 h-4 mr-2" />
                🚀 The Future of Banking is Here
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                Banking
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                  animate={gradientFlow}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Reimagined
                </motion.span>
                for the Digital Age
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mt-6 mb-8 leading-relaxed"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Experience financial freedom with our all-in-one digital banking platform. 
                No branches, no paperwork, just seamless banking powered by technology.
              </motion.p>

             <motion.div 
  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
  variants={fadeInUp}
  transition={{ delay: 0.4 }}
>
  
  
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link to="/404" className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all hover:shadow-lg backdrop-blur-sm flex items-center justify-center">
      <Smartphone className="mr-2 w-5 h-5" />
      Watch Demo
    </Link>
  </motion.div>
</motion.div>
              {/* App Store Badges */}
              <motion.div 
                className="flex gap-4 mt-8"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
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
                </motion.div>
                
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
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
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - App Preview */}
            <motion.div
              initial="hidden"
              animate={heroControls}
              variants={slideInFromRight}
              className="relative"
            >
              {/* Floating phone mockup */}
              <motion.div 
                className="relative mx-auto max-w-sm"
                animate={floatAnimation}
              >
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
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                        animate={pulseAnimation}
                      >
                        <Wallet className="w-6 h-6" />
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { icon: <CreditCard className="w-6 h-6" />, label: "Cards" },
                        { icon: <TrendingUp className="w-6 h-6" />, label: "Invest" },
                        { icon: <PieChart className="w-6 h-6" />, label: "Budget" },
                        { icon: <Globe className="w-6 h-6" />, label: "Global" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link to="/404" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors block">
                            <div className="w-6 h-6 mx-auto mb-2">{item.icon}</div>
                            <div className="text-sm text-center">{item.label}</div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { icon: "🍔", category: "Food & Dining", time: "Today • 2:30 PM", amount: "-$24.50", color: "text-red-400" },
                        { icon: "💰", category: "Salary Deposit", time: "Today • 9:00 AM", amount: "+$3,500.00", color: "text-green-400" }
                      ].map((transaction, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                              <div className="text-xl">{transaction.icon}</div>
                            </div>
                            <div>
                              <div className="font-medium">{transaction.category}</div>
                              <div className="text-xs text-gray-400">{transaction.time}</div>
                            </div>
                          </div>
                          <div className={`font-bold ${transaction.color}`}>{transaction.amount}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark cards */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block"
                animate={gradientFlow}
                style={{ backgroundSize: '200% auto' }}
              >
                Millions
              </motion.span> Choose NeoBank
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for speed, security, and simplicity
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={featuresControls}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.span 
                    className="text-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {feature.emoji}
                  </motion.span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Digital Cards Section */}
      <section ref={cardsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={cardsControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose Your <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 inline-block"
                animate={gradientFlow}
                style={{ backgroundSize: '200% auto' }}
              >
                Digital Card
              </motion.span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Virtual cards that work anywhere, instantly
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={cardsControls}
            variants={staggerContainer}
          >
            {digitalCards.map((card, index) => (
              <motion.div 
                key={index}
                className="relative group"
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Card */}
                <motion.div 
                  className={`bg-gradient-to-br ${card.color} rounded-2xl p-8 min-h-[300px]`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Card chip */}
                  <motion.div 
                    className="w-12 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg mb-8 relative"
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="absolute inset-0.5 bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg"></div>
                  </motion.div>
                  
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
                </motion.div>
                
                {/* Card details below */}
                <motion.div 
                  className="mt-6 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {card.tag && (
                    <motion.span 
                      className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      {card.tag}
                    </motion.span>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    {card.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Annual Fee</div>
                      <div className="text-2xl font-bold">{card.annualFee}</div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/404" className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors block">
                        Apply Now
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Features Grid */}
      <section ref={appFeaturesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={appFeaturesControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything in <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 inline-block"
                animate={gradientFlow}
                style={{ backgroundSize: '200% auto' }}
              >
                One App
              </motion.span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your entire financial life, beautifully organized
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            animate={appFeaturesControls}
            variants={staggerContainer}
          >
            {appFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4 inline-block"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with glow */}
      <section ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={statsControls}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={floatAnimation}
                  >
                    {stat.icon}
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 mb-1">{stat.label}</div>
                <div className="text-sm text-green-400">{stat.growth}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Modern style */}
      <section ref={testimonialsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 inline-block"
                animate={gradientFlow}
                style={{ backgroundSize: '200% auto' }}
              >
                Digital Natives
              </motion.span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the revolution of modern banking
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={testimonialsControls}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-amber-500/30 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 blur-xl opacity-20"
                      animate={pulseAnimation}
                    ></motion.div>
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
                    <motion.svg 
                      key={i} 
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-12 border border-gray-800"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaControls}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block"
                animate={gradientFlow}
                style={{ backgroundSize: '200% auto' }}
              >
                Join the Future
              </motion.span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Get started in minutes. No credit check, no commitment.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 block">
                  Create Free Account
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm block">
                  Talk to Sales
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: "🎯", text: "No monthly fees" },
                { icon: "🔒", text: "FDIC insured" },
                { icon: "⚡", text: "Instant setup" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 rotate-90" />
      </motion.button>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ 
              opacity: 0,
              scale: 0,
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, Math.random() * 2 + 0.5, 0],
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 10 + 1}px`,
              height: `${Math.random() * 10 + 1}px`,
              background: `radial-gradient(circle, ${
                ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'][i % 5]
              } 20%, transparent 70%)`,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default ExploreServices;