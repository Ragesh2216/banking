import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CreditCard, Shield, TrendingUp, Clock, 
  Users, Building, Smartphone, Lock, Award, Globe, Zap,
  CheckCircle, ArrowUpRight, DollarSign, PieChart,
  ChevronRight, Sparkles, Target, ShieldCheck
} from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [animatedSections, setAnimatedSections] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const accountsRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const windowHeight = window.innerHeight;
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Setup IntersectionObserver for animations
  useEffect(() => {
    const observers = [];
    const sections = {};

    const createObserver = (ref, sectionName) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              sections[sectionName] = true;
              setAnimatedSections({...sections});
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      observers.push(observer);
      return observer;
    };

    createObserver(heroRef, 'hero');
    createObserver(featuresRef, 'features');
    createObserver(accountsRef, 'accounts');
    createObserver(statsRef, 'stats');
    createObserver(testimonialsRef, 'testimonials');
    createObserver(ctaRef, 'cta');

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Check if section should be animated
  const shouldAnimate = (sectionName) => animatedSections[sectionName];

  // Features data
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military-Grade Security",
      description: "256-bit encryption and biometric authentication",
      color: "from-blue-500 to-cyan-500",
      direction: 'left'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Digital Banking",
      description: "Access your accounts anytime, anywhere",
      color: "from-emerald-500 to-green-500",
      direction: 'right'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Investments",
      description: "AI-powered investment recommendations",
      color: "from-purple-500 to-pink-500",
      direction: 'left'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Banking",
      description: "Dedicated relationship managers",
      color: "from-amber-500 to-orange-500",
      direction: 'right'
    }
  ];

  // Account types
  const accountTypes = [
    {
      name: "Premium Savings",
      interest: "4.25% APY",
      minBalance: "$1,000",
      features: ["No monthly fees", "Free ATM withdrawals", "Mobile check deposit"],
      direction: 'left'
    },
    {
      name: "Smart Checking",
      interest: "2.1% APY",
      minBalance: "$500",
      features: ["Unlimited transactions", "Overdraft protection", "Cashback rewards"],
      direction: 'top'
    },
    {
      name: "Investment Plus",
      interest: "Up to 8% ROI",
      minBalance: "$5,000",
      features: ["Portfolio management", "Tax optimization", "Risk analysis"],
      direction: 'right'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "TrustBank helped me secure a business loan within 48 hours. Their digital platform is incredibly user-friendly.",
      avatar: "SJ",
      direction: 'left'
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      content: "The investment advice I received has grown my portfolio by 35% in the last year. Exceptional service!",
      avatar: "MC",
      direction: 'bottom'
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      content: "Mobile banking has never been this seamless. I can manage all my finances with just a few taps.",
      avatar: "ER",
      direction: 'right'
    }
  ];

  // Stats
  const stats = [
    { value: "2.5M+", label: "Happy Customers", icon: <Users />, direction: 'left' },
    { value: "$425B", label: "Assets Managed", icon: <DollarSign />, direction: 'top' },
    { value: "185+", label: "Countries Served", icon: <Globe />, direction: 'bottom' },
    { value: "24/7", label: "Customer Support", icon: <Clock />, direction: 'right' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Scroll progress bar */}
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => {
          const depth = Math.random();
          const speed = 0.2 + depth * 1;
          const size = 2 + depth * 6;
          const isLeft = i % 2 === 0;
          
          return (
            <div
              key={i}
              className="absolute rounded-full animate-pulse-slow"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][i % 4]
                }30, transparent 70%)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                opacity: 0.1,
                transform: `translateY(${scrollProgress * speed * -40}px) translateX(${scrollProgress * (isLeft ? -30 : 30)}px)`,
                transition: 'transform 0.1s linear'
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={heroRef}>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{
            transform: `translate(${scrollProgress * 50}px, ${scrollProgress * -30}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{
            transform: `translate(${scrollProgress * -50}px, ${scrollProgress * 30}px)`
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Slides from left */}
            <div className={`transition-all duration-1000 ${
              shouldAnimate('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium mb-6 animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                Next-Generation Digital Banking
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className={`inline-block transition-all duration-1000 delay-100 ${
                  shouldAnimate('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                  Your Financial Future,
                </span>
                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000 delay-300 ${
                  shouldAnimate('hero') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-90'
                }`}>
                  Secured & Simplified
                </span>
              </h1>
              
              <p className={`text-lg sm:text-xl text-gray-600 mt-6 mb-8 transition-all duration-1000 delay-500 ${
                shouldAnimate('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Experience banking reimagined. From smart savings to intelligent investments, 
                we provide everything you need to grow your wealth securely.
              </p>
<div className="flex justify-center mb-4">
          <Link to="/login" 
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group no-underline animate-fade-in-up"
            style={{ animationDelay: '700ms' }}
          >
            <span className="flex items-center">
              Start Banking Free
              <ArrowRight className="ml-3 w-5 h-5 " />
            </span>
          </Link>
        </div>

        

              {/* Quick Stats */}
              <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 delay-900 ${
                shouldAnimate('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900">4.25%</div>
                  <div className="text-sm text-gray-600">High-Yield Savings</div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900">$0</div>
                  <div className="text-sm text-gray-600">Monthly Fees</div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900">2 Min</div>
                  <div className="text-sm text-gray-600">Account Opening</div>
                </div>
              </div>
            </div>

            {/* Right - Hero Image/Graphic - Slides from right */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              shouldAnimate('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 group">
                {/* Animated corner badges */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600">Total Balance</div>
                      <div className="text-3xl font-bold text-gray-900">$42,580.75</div>
                    </div>
                    <div className="text-green-500 font-semibold flex items-center animate-pulse">
                      <ArrowUpRight className="w-5 h-5 mr-1" />
                      +12.5%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm transform hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Checking Account</div>
                          <div className="text-sm text-gray-500">**** 4832</div>
                        </div>
                      </div>
                      <div className="font-bold">$18,250.00</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm transform hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <PieChart className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium">Savings Account</div>
                          <div className="text-sm text-gray-500">**** 2198</div>
                        </div>
                      </div>
                      <div className="font-bold">$24,330.75</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Recent Transaction</span>
                      <span className="font-medium">Salary Deposit</span>
                      <span className="text-green-500 font-bold animate-pulse">+$5,250.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            shouldAnimate('features') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Millions Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Banking should be simple, secure, and smart. Here's how we're different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  shouldAnimate('features') ? 
                    (feature.direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right') : 
                    'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <div className="text-white animate-pulse-slow">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 relative z-10">{feature.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <Link to="/404" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50" ref={accountsRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            shouldAnimate('accounts') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Account
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of accounts designed for every financial goal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                  shouldAnimate('accounts') ? 
                    (account.direction === 'left' ? 'animate-slide-in-left' : 
                     account.direction === 'right' ? 'animate-slide-in-right' : 
                     'animate-slide-in-top') : 
                    'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated top bar */}
                <div className={`h-2 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 
                  index === 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 
                  'bg-gradient-to-r from-purple-500 to-pink-500'
                } relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{account.name}</h3>
                      <div className="text-3xl font-bold text-gray-900 mt-2">{account.interest}</div>
                      <div className="text-gray-600 mt-1">Annual Percentage Yield</div>
                    </div>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-pulse">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-sm text-gray-600 mb-2">Minimum Balance</div>
                    <div className="text-xl font-bold text-gray-900">{account.minBalance}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {account.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center transform hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 animate-bounce-slow" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/login" 
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Open Account
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700" ref={statsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center text-white ${
                  shouldAnimate('stats') ? 
                    (stat.direction === 'left' ? 'animate-slide-in-left' : 
                     stat.direction === 'right' ? 'animate-slide-in-right' : 
                     stat.direction === 'top' ? 'animate-slide-in-top' : 
                     'animate-slide-in-bottom') : 
                    'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 group">
                  <div className="text-white group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 animate-pulse">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            shouldAnimate('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us with their finances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  shouldAnimate('testimonials') ? 
                    (testimonial.direction === 'left' ? 'animate-slide-in-left' : 
                     testimonial.direction === 'right' ? 'animate-slide-in-right' : 
                     'animate-slide-in-bottom') : 
                    'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Avatar with shine effect */}
                <div className="flex items-center mb-6 relative">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold mr-4 z-10 relative">
                      {testimonial.avatar}
                    </div>
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 animate-ping"></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50" ref={ctaRef}>
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ${
            shouldAnimate('cta') ? 'animate-pop' : 'opacity-0 scale-90'
          }`}>
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${Math.random() * 10 + 5}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-medium mb-6 animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" />
                Limited Time Offer
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Banking Experience?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the future of banking today. Open your account in minutes and start enjoying premium banking features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/login" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <Target className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Open Your Free Account
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg flex items-center justify-center group"
                >
                  <Clock className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule a Call
                </Link>
              </div>
              <div className="mt-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No hidden fees
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No minimum balance
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  FDIC insured up to $250,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          50% {
            transform: translateX(10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          50% {
            transform: translateX(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInTop {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          60% {
            transform: translateY(10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInBottom {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          60% {
            transform: translateY(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-10px) translateX(10px);
          }
          66% {
            transform: translateY(5px) translateX(-10px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-top {
          animation: slideInTop 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slideInBottom 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-pop {
          animation: pop 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-property: transform, opacity, background-color, border-color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        
        /* Enhanced hover effects */
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        /* Gradient text animation */
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        /* Shimmer effect */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;