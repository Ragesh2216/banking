import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  ArrowRight, CreditCard, Shield, TrendingUp, Clock, 
  Users, Building, Smartphone, Lock, Award, Globe, Zap,
  CheckCircle, ArrowUpRight, DollarSign, PieChart,
  ChevronRight, ChevronLeft, Star, ExternalLink,
  Mail, Phone, MessageSquare, Download, ShieldCheck,
  BarChart3, CreditCard as Card, Wallet, Target,
  Heart, ThumbsUp, Award as AwardIcon, Trophy,
  Sparkles, CreditCard as CardIcon, BadgeCheck
} from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [activeAccount, setActiveAccount] = useState(null);
  
  // Refs for animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const accountsRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Animation controls
  const heroControls = useAnimation();
  const featuresControls = useAnimation();
  const accountsControls = useAnimation();
  const statsControls = useAnimation();
  const testimonialsControls = useAnimation();
  const ctaControls = useAnimation();
  
  // InView detection
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const isAccountsInView = useInView(accountsRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const isCTAInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Handle scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger animations when elements come into view
  useEffect(() => {
    if (isHeroInView) heroControls.start('visible');
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (isFeaturesInView) featuresControls.start('visible');
  }, [isFeaturesInView, featuresControls]);

  useEffect(() => {
    if (isAccountsInView) accountsControls.start('visible');
  }, [isAccountsInView, accountsControls]);

  useEffect(() => {
    if (isStatsInView) statsControls.start('visible');
  }, [isStatsInView, statsControls]);

  useEffect(() => {
    if (isTestimonialsInView) testimonialsControls.start('visible');
  }, [isTestimonialsInView, testimonialsControls]);

  useEffect(() => {
    if (isCTAInView) ctaControls.start('visible');
  }, [isCTAInView, ctaControls]);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Features data
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Military-Grade Security",
      description: "256-bit encryption and biometric authentication",
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Digital Banking",
      description: "Access your accounts anytime, anywhere",
      color: "from-emerald-500 to-green-500",
      buttonColor: "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Smart Investments",
      description: "AI-powered investment recommendations",
      color: "from-purple-500 to-pink-500",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Personal Banking",
      description: "Dedicated relationship managers",
      color: "from-amber-500 to-orange-500",
      buttonColor: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
    }
  ];

  // Account types
  const accountTypes = [
    {
      id: 1,
      name: "Premium Savings",
      interest: "4.25% APY",
      minBalance: "$1,000",
      features: ["No monthly fees", "Free ATM withdrawals", "Mobile check deposit"],
      icon: <Wallet className="w-8 h-8" />,
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500",
      buttonStyle: "primary"
    },
    {
      id: 2,
      name: "Smart Checking",
      interest: "2.1% APY",
      minBalance: "$500",
      features: ["Unlimited transactions", "Overdraft protection", "Cashback rewards"],
      icon: <Card className="w-8 h-8" />,
      badge: "Best Value",
      color: "from-emerald-500 to-green-500",
      buttonStyle: "secondary"
    },
    {
      id: 3,
      name: "Investment Plus",
      interest: "Up to 8% ROI",
      minBalance: "$5,000",
      features: ["Portfolio management", "Tax optimization", "Risk analysis"],
      icon: <BarChart3 className="w-8 h-8" />,
      badge: "Premium",
      color: "from-purple-500 to-pink-500",
      buttonStyle: "accent"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "TrustBank helped me secure a business loan within 48 hours. Their digital platform is incredibly user-friendly.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      content: "The investment advice I received has grown my portfolio by 35% in the last year. Exceptional service!",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      content: "Mobile banking has never been this seamless. I can manage all my finances with just a few taps.",
      avatar: "ER",
      rating: 5
    }
  ];

  // Stats with animations
  const stats = [
    { value: "2.5M+", label: "Happy Customers", icon: <Heart className="w-8 h-8" />, delay: 0 },
    { value: "$425B", label: "Assets Managed", icon: <DollarSign className="w-8 h-8" />, delay: 100 },
    { value: "185+", label: "Countries Served", icon: <Globe className="w-8 h-8" />, delay: 200 },
    { value: "24/7", label: "Customer Support", icon: <Clock className="w-8 h-8" />, delay: 300 }
  ];

  // Enhanced button styles
  const buttonStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl",
    secondary: "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl",
    accent: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl",
    outline: "bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700 border border-transparent hover:border-blue-200"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
     
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={heroControls}
              variants={slideInFromLeft}
              custom={0}
            >
              <motion.button
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 font-medium mb-6 group hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Next-Generation Digital Banking
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your Financial Future,
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Secured & Simplified
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mt-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience banking reimagined. From smart savings to intelligent investments, 
                we provide everything you need to grow your wealth securely.
              </motion.p>

              {/* Enhanced Button Group */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/login" 
                    className={`px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group ${buttonStyles.primary}`}
                    onMouseEnter={() => setIsHoveringCTA(true)}
                    onMouseLeave={() => setIsHoveringCTA(false)}
                  >
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                      Start Banking Free
                      <motion.div
                        animate={{ x: isHoveringCTA ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <ArrowRight className="ml-3 w-5 h-5" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/404" 
                    className={`px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group ${buttonStyles.outline}`}
                  >
                    <Smartphone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download App
                    <Download className="ml-3 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { value: "4.25%", label: "High-Yield Savings", icon: <BadgeCheck className="w-5 h-5" />, color: "blue" },
                  { value: "$0", label: "Monthly Fees", icon: <DollarSign className="w-5 h-5" />, color: "emerald" },
                  { value: "2 Min", label: "Account Opening", icon: <Clock className="w-5 h-5" />, color: "purple" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300 p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-${stat.color}-600 flex items-center justify-center`}>
                      {stat.icon}
                      <motion.span 
                        className="ml-2"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Hero Image/Graphic */}
            <motion.div 
              className="relative group"
              initial="hidden"
              animate={heroControls}
              variants={slideInFromRight}
              custom={0}
            >
              <motion.div 
                className="relative bg-white rounded-2xl shadow-2xl p-6"
                whileHover={{ rotate: 0 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: [3, 0, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl"
                  animate={floatAnimation}
                  whileHover={{ scale: 1.1 }}
                >
                  <AwardIcon className="w-12 h-12 text-white" />
                </motion.div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <motion.div 
                    className="flex items-center justify-between mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div>
                      <div className="text-sm text-gray-600">Total Balance</div>
                      <div className="text-3xl font-bold text-gray-900">$42,580.75</div>
                    </div>
                    <motion.div 
                      className="text-green-500 font-semibold flex items-center"
                      animate={pulseAnimation}
                    >
                      <ArrowUpRight className="w-5 h-5 mr-1" />
                      +12.5%
                    </motion.div>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: <CreditCard className="w-6 h-6" />, name: "Checking Account", number: "4832", amount: "$18,250.00", color: "blue" },
                      { icon: <PieChart className="w-6 h-6" />, name: "Savings Account", number: "2198", amount: "$24,330.75", color: "emerald" }
                    ].map((account, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-lg bg-${account.color}-100 flex items-center justify-center mr-4 group-hover:bg-${account.color}-200 transition-colors`}>
                            {account.icon}
                          </div>
                          <div>
                            <div className="font-medium">{account.name}</div>
                            <div className="text-sm text-gray-500">**** {account.number}</div>
                          </div>
                        </div>
                        <div className="font-bold">{account.amount}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-6 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button 
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CardIcon className="w-5 h-5 mr-2" />
                      View All Accounts
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Millions Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Banking should be simple, secure, and smart. Here's how we're different.
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
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="mt-auto">
                  <motion.button 
                    className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center w-full ${feature.buttonColor} text-white shadow-md hover:shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  ><Link to="/404" >
                    Learn More
                    </Link>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Account Types Section */}
      <section ref={accountsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={accountsControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Account
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of accounts designed for every financial goal.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate={accountsControls}
            variants={staggerContainer}
          >
            {accountTypes.map((account, index) => (
              <motion.div 
                key={account.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform border border-gray-200"
                variants={scaleIn}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onMouseEnter={() => setActiveAccount(account.id)}
                onMouseLeave={() => setActiveAccount(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${account.color}`}></div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center"
                        animate={{ rotate: activeAccount === account.id ? [0, 10, -10, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-blue-600">
                          {account.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{account.name}</h3>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{account.interest}</div>
                        <div className="text-gray-600 text-sm mt-1">Annual Percentage Yield</div>
                      </div>
                    </div>
                    {account.badge && (
                      <motion.span 
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 rounded-full text-xs font-medium self-start"
                        whileHover={{ scale: 1.1 }}
                      >
                        {account.badge}
                      </motion.span>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Minimum Balance</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">{account.minBalance}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {account.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/login" 
                      className={`w-full py-3.5 sm:py-4 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group ${
                        buttonStyles[account.buttonStyle]
                      }`}
                    >
                      Open Account
                      <motion.div
                        animate={{ x: activeAccount === account.id ? 8 : 0 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            animate={statsControls}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center text-white"
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 p-4"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsControls}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us with their finances.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate={testimonialsControls}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6 text-sm sm:text-base">"{testimonial.content}"</p>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current mr-1" />
                    </motion.div>
                  ))}
                </div>
                <motion.button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${buttonStyles.ghost} w-full text-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Story
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaControls}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6"
              animate={floatAnimation}
            >
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your Banking Experience?
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 text-center max-w-2xl mx-auto text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Join the future of banking today. Open your account in minutes and start enjoying premium banking features.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/login" 
                  className="px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl flex items-center justify-center group"
                >
                  <ShieldCheck className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  Open Your Free Account
                  <ExternalLink className="ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-800 rounded-xl font-semibold text-base sm:text-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
                >
                  <Phone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule a Call
                  <MessageSquare className="ml-3 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ShieldCheck className="w-4 h-4" />
              No hidden fees • No minimum balance • FDIC insured up to $250,000
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Help Button */}
      <motion.button
        onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
        className="fixed right-6 bottom-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl z-50"
        aria-label="Get Help"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div 
        className="fixed top-1/4 left-5 w-4 h-4 bg-blue-400 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="fixed bottom-1/4 right-10 w-3 h-3 bg-indigo-400 rounded-full opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div 
        className="fixed top-1/3 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

    </div>
  );
};

export default Home;