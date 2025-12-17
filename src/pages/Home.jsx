import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CreditCard, Shield, TrendingUp, Clock, 
  Users, Building, Smartphone, Lock, Award, Globe, Zap,
  CheckCircle, ArrowUpRight, DollarSign, PieChart,
  ChevronRight, ChevronLeft, Star, ExternalLink,
  Mail, Phone, MessageSquare, Download, ShieldCheck,
  BarChart3, CreditCard as Card, Wallet, Target,
  Heart, ThumbsUp, Award as AwardIcon, Trophy
} from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  // Handle scroll for navbar and animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if elements are in viewport
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Slide auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Features data
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Military-Grade Security",
      description: "256-bit encryption and biometric authentication",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Digital Banking",
      description: "Access your accounts anytime, anywhere",
      color: "from-emerald-500 to-green-500",
      hoverColor: "hover:from-emerald-600 hover:to-green-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Smart Investments",
      description: "AI-powered investment recommendations",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Personal Banking",
      description: "Dedicated relationship managers",
      color: "from-amber-500 to-orange-500",
      hoverColor: "hover:from-amber-600 hover:to-orange-600"
    }
  ];

  // Account types
  const accountTypes = [
    {
      name: "Premium Savings",
      interest: "4.25% APY",
      minBalance: "$1,000",
      features: ["No monthly fees", "Free ATM withdrawals", "Mobile check deposit"],
      icon: <Wallet className="w-8 h-8" />,
      badge: "Most Popular"
    },
    {
      name: "Smart Checking",
      interest: "2.1% APY",
      minBalance: "$500",
      features: ["Unlimited transactions", "Overdraft protection", "Cashback rewards"],
      icon: <Card className="w-8 h-8" />,
      badge: "Best Value"
    },
    {
      name: "Investment Plus",
      interest: "Up to 8% ROI",
      minBalance: "$5,000",
      features: ["Portfolio management", "Tax optimization", "Risk analysis"],
      icon: <BarChart3 className="w-8 h-8" />,
      badge: "Premium"
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

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
     
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-blue-100 text-blue-600 font-medium mb-6 group hover:bg-blue-200 transition-all duration-300 cursor-pointer" onClick={() => scrollToSection('features')}>
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Next-Generation Digital Banking
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Financial Future,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Secured & Simplified
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mt-6 mb-8">
                Experience banking reimagined. From smart savings to intelligent investments, 
                we provide everything you need to grow your wealth securely.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/login" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center group"
                >
                  Start Banking Free
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link 
                  to="/404" 
                  className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
                >
                  <Smartphone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download App
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">4.25%</div>
                  <div className="text-sm text-gray-600">High-Yield Savings</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">$0</div>
                  <div className="text-sm text-gray-600">Monthly Fees</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">2 Min</div>
                  <div className="text-sm text-gray-600">Account Opening</div>
                </div>
              </div>
            </div>

            {/* Right - Hero Image/Graphic */}
            <div className="relative group">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <AwardIcon className="w-12 h-12 text-white" />
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600">Total Balance</div>
                      <div className="text-3xl font-bold text-gray-900">$42,580.75</div>
                    </div>
                    <div className="text-green-500 font-semibold flex items-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5 mr-1" />
                      +12.5%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Checking Account</div>
                          <div className="text-sm text-gray-500">**** 4832</div>
                        </div>
                      </div>
                      <div className="font-bold">$18,250.00</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                          <PieChart className="w-6 h-6 text-emerald-600" />
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
                      <span className="text-green-500 font-bold flex items-center">
                        +$5,250.00
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} ${feature.hoverColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link 
                    to="/404" 
                    className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group hover:shadow-2xl"
              >
                <div className={`h-2 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : index === 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        {account.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{account.name}</h3>
                        <div className="text-3xl font-bold text-gray-900 mt-2">{account.interest}</div>
                        <div className="text-gray-600 mt-1">Annual Percentage Yield</div>
                      </div>
                    </div>
                    {account.badge && (
                      <span className={`px-4 py-1.5 ${index === 0 ? 'bg-blue-100 text-blue-600' : index === 1 ? 'bg-emerald-100 text-emerald-600' : 'bg-purple-100 text-purple-600'} rounded-full text-sm font-medium`}>
                        {account.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-sm text-gray-600 mb-2">Minimum Balance</div>
                    <div className="text-xl font-bold text-gray-900">{account.minBalance}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {account.features.map((feature, i) => (
                      <div key={i} className="flex items-center group">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/login" 
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Open Account
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center text-white transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 group hover:bg-white/20 transition-colors duration-300">
                  <div className="text-white group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold mb-3">{stat.value}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-white" />
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
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Open Your Free Account
                <ExternalLink className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
              >
                <Phone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule a Call
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              No hidden fees • No minimum balance • FDIC insured up to $250,000
            </div>
          </div>
        </div>
      </section>

      {/* Floating Help Button */}
      <button
        onClick={() => scrollToSection('contact')}
        className="fixed right-6 bottom-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Get Help"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
};

export default Home;