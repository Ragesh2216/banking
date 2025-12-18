import { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

// Optimized Animated Counter for all screens
const AnimatedCounter = ({ value, duration = 1500, prefix = '', suffix = '', className = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);
  const valueRef = useRef(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const node = nodeRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = typeof value === 'string' 
      ? parseFloat(value.replace(/[^0-9.-]+/g, '')) 
      : value;

    const startValue = valueRef.current;
    const endValue = numericValue;
    const diff = endValue - startValue;
    
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + diff * easeOutQuart;
      
      setCount(Math.floor(currentValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        valueRef.current = endValue;
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, value, duration]);

  const formatNumber = (num) => {
    if (num >= 1000000000) return `$${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;
    return `$${num.toLocaleString()}`;
  };

  return (
    <span ref={nodeRef} className={`font-bold ${className}`}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

// Mini Stats Component for mobile
const MiniStat = ({ title, value, change, icon, color, delay = 0 }) => (
  <div 
    className="min-w-[120px] bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/10"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between mb-1">
      <span className="text-[10px] text-gray-300 truncate pr-1">{title}</span>
      <span className="text-sm flex-shrink-0">{icon}</span>
    </div>
    <div className={`text-sm font-bold truncate ${color}`}>
      <AnimatedCounter value={value} duration={1200} />
    </div>
    <div className="flex items-center justify-between mt-1">
      <span className={`text-[9px] ${
        change.startsWith('+') ? 'text-green-400' : 'text-red-400'
      }`}>
        {change}
      </span>
      <span className="text-[9px] text-gray-400 truncate pl-1">MoM</span>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsVerySmall(width < 375);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // Banking data
  const monthlyPerformance = [
    { month: 'Jan', deposits: 4250, loans: 2850, revenue: 1250 },
    { month: 'Feb', deposits: 4780, loans: 3120, revenue: 1380 },
    { month: 'Mar', deposits: 5120, loans: 3550, revenue: 1520 },
    { month: 'Apr', deposits: 4980, loans: 3370, revenue: 1480 },
    { month: 'May', deposits: 5250, loans: 3870, revenue: 1650 },
    { month: 'Jun', deposits: 5560, loans: 4250, revenue: 1860 },
    { month: 'Jul', deposits: 5800, loans: 4450, revenue: 1950 },
    { month: 'Aug', deposits: 6100, loans: 4780, revenue: 2100 }
  ].map(item => ({
    ...item,
    deposits: item.deposits * 1000,
    loans: item.loans * 1000,
    revenue: item.revenue * 1000
  }));

  const accountDistribution = [
    { type: 'Savings', value: 35, color: '#10B981' },
    { type: 'Checking', value: 28, color: '#3B82F6' },
    { type: 'Investment', value: 20, color: '#F59E0B' },
    { type: 'Business', value: 12, color: '#8B5CF6' },
    { type: 'Loan', value: 5, color: '#EF4444' }
  ];

  const quickStats = [
    { title: 'Total Assets', value: 425600000, change: '+12.5%', icon: '💰', color: 'text-blue-300' },
    { title: 'Active Accounts', value: 18642, change: '+8.2%', icon: '👥', color: 'text-emerald-300' },
    { title: 'Loan Portfolio', value: 287300000, change: '+15.3%', icon: '🏦', color: 'text-amber-300' },
    { title: 'Digital Users', value: 15892, change: '+24.7%', icon: '📱', color: 'text-purple-300' },
    { title: 'Revenue YTD', value: 15200000, change: '+18.9%', icon: '📈', color: 'text-green-300' },
    { title: 'NPL Ratio', value: 1.2, change: '-0.3%', icon: '⚠️', color: 'text-red-300' }
  ];

  const recentTransactions = [
    { id: 1, customer: 'James Wilson', type: 'Deposit', amount: 250000, time: '2h ago', status: 'completed' },
    { id: 2, customer: 'Sarah Chen', type: 'Loan Pay', amount: 15000, time: '5h ago', status: 'completed' },
    { id: 3, customer: 'Mike Rodriguez', type: 'Transfer', amount: 75000, time: '1d ago', status: 'pending' },
    { id: 4, customer: 'Emily Davis', type: 'Investment', amount: 120000, time: '2d ago', status: 'completed' },
    { id: 5, customer: 'David Kim', type: 'Card', amount: 4500, time: '3d ago', status: 'completed' }
  ];

  const branchPerformance = [
    { branch: 'Downtown', deposits: 45, loans: 38, customers: 2450 },
    { branch: 'Uptown', deposits: 38, loans: 42, customers: 1890 },
    { branch: 'Eastside', deposits: 52, loans: 35, customers: 3120 },
    { branch: 'Westgate', deposits: 41, loans: 29, customers: 1670 },
    { branch: 'Central', deposits: 56, loans: 48, customers: 2890 }
  ];

  const keyMetrics = [
    { label: 'ROA', value: '2.1%', target: '1.8%', status: 'exceeded' },
    { label: 'Capital Ratio', value: '18.5%', target: '15.0%', status: 'exceeded' },
    { label: 'NIM', value: '3.2%', target: '2.9%', status: 'exceeded' },
    { label: 'Cost/Income', value: '45.3%', target: '48.0%', status: 'met' },
    { label: 'CASA Ratio', value: '65.8%', target: '62.0%', status: 'exceeded' }
  ];

  const alertItems = [
    { id: 1, type: 'warning', message: 'Large withdrawal', time: '10 min ago' },
    { id: 2, type: 'info', message: 'Backup completed', time: '2h ago' },
    { id: 3, type: 'success', message: 'All branches connected', time: '4h ago' },
    { id: 4, type: 'warning', message: '3 loans pending', time: '6h ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br  mt-16 from-gray-900 via-blue-900/90 to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0  overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              width: `${Math.random() * 80 + 30}px`,
              height: `${Math.random() * 80 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][i % 4]
              }20, transparent 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: 0.1
            }}
          />
        ))}
      </div>

      <main className="relative z-10 mt-8 pt-2 px-2 sm:px-4 md:px-6 py-3">
        {/* Mobile Quick Stats Bar - Only on small screens */}
        {isMobile && (
          <div className="mb-3">
            <div className="flex space-x-2 overflow-x-auto pb-2 -mx-2 px-2">
              {quickStats.slice(0, 4).map((stat, index) => (
                <MiniStat key={index} {...stat} delay={index * 100} />
              ))}
            </div>
            {isVerySmall && (
              <div className="text-xs text-gray-400 text-center mt-1">
                Scroll → to see more stats
              </div>
            )}
          </div>
        )}

        {/* Desktop Quick Stats Grid */}
        {!isMobile && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 truncate">{stat.title}</span>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <div className={`text-lg sm:text-xl font-bold mb-1 truncate ${stat.color}`}>
                  <AnimatedCounter value={stat.value} duration={1500} />
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-400">MoM</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
          {/* Financial Performance Chart */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Financial Performance</h2>
              <select className="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs">
                <option>Last 8 months</option>
                <option>YTD</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-48 sm:h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyPerformance} margin={{ top: 5, right: 5, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="rgba(255,255,255,0.5)"
                    fontSize={isVerySmall ? 9 : 10}
                    tickMargin={5}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    fontSize={isVerySmall ? 9 : 10}
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
                    width={isVerySmall ? 30 : 40}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${(value / 1000000).toFixed(2)}M`]}
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.9)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="deposits" 
                    stackId="1"
                    stroke="#3B82F6" 
                    fill="url(#colorDeposits)"
                    strokeWidth={1.5}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="loans" 
                    stackId="1"
                    stroke="#10B981" 
                    fill="url(#colorLoans)"
                    strokeWidth={1.5}
                  />
                  <defs>
                    <linearGradient id="colorDeposits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorLoans" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Account Distribution */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <h2 className="text-sm font-semibold mb-3">Account Distribution</h2>
            <div className="flex flex-col items-center">
              <div className="w-full h-44 sm:h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={accountDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={isVerySmall ? 30 : 40}
                      outerRadius={isVerySmall ? 60 : 70}
                      paddingAngle={1}
                      dataKey="value"
                      label={!isVerySmall ? ({ type, percent }) => 
                        `${(percent * 100).toFixed(0)}%` : false
                      }
                      labelLine={!isVerySmall}
                    >
                      {accountDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value}%`,
                        props.payload.type
                      ]}
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        fontSize: '11px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {(isMobile || isVerySmall) && (
                <div className="w-full mt-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {accountDistribution.map((item, index) => (
                      <div key={index} className="flex items-center p-1.5 bg-white/5 rounded">
                        <div 
                          className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[10px] truncate flex-1">{item.type}</span>
                        <span className="text-[10px] font-bold ml-1">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section - Tables & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
          {/* Recent Transactions */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Recent Transactions</h2>
              <button className="text-xs text-blue-400 hover:text-blue-300">View All</button>
            </div>
            <div className="overflow-x-auto -mx-3 px-3">
              <table className="w-full min-w-full text-xs">
                <thead>
                  <tr className="text-left border-b border-white/10">
                    <th className="pb-2 pr-2 text-[10px]">Customer</th>
                    <th className="pb-2 pr-2 text-[10px]">Type</th>
                    <th className="pb-2 pr-2 text-[10px]">Amount</th>
                    <th className="pb-2 pr-2 text-[10px]">Status</th>
                    <th className="pb-2 text-[10px]">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((txn) => (
                    <tr key={txn.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-2 pr-2">
                        <div className="font-medium truncate max-w-[70px] sm:max-w-[100px] text-[11px]">
                          {txn.customer}
                        </div>
                      </td>
                      <td className="py-2 pr-2">
                        <span className="truncate max-w-[50px] text-[11px]">{txn.type}</span>
                      </td>
                      <td className="py-2 pr-2 font-semibold text-[11px]">
                        ${(txn.amount).toLocaleString()}
                      </td>
                      <td className="py-2 pr-2">
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] ${
                          txn.status === 'completed' 
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {isVerySmall ? txn.status.charAt(0) : txn.status}
                        </span>
                      </td>
                      <td className="py-2 text-gray-400 text-[10px]">
                        {txn.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <h2 className="text-sm font-semibold mb-3">Key Banking Metrics</h2>
            <div className="space-y-2">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium truncate pr-1">{metric.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      metric.status === 'exceeded' 
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {isVerySmall ? '✓' : metric.status}
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-base font-bold">{metric.value}</div>
                      <div className="text-[10px] text-gray-400">Current</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-300">Target: {metric.target}</div>
                      <div className="text-[10px] text-gray-400">Required</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Branch Performance & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Branch Performance */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <h2 className="text-sm font-semibold mb-3">Branch Performance</h2>
            <div className="h-48 sm:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={branchPerformance} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="2 2" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="branch" 
                    stroke="rgba(255,255,255,0.5)"
                    fontSize={isVerySmall ? 9 : 10}
                    angle={isVerySmall ? -45 : 0}
                    textAnchor={isVerySmall ? 'end' : 'middle'}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    fontSize={isVerySmall ? 9 : 10}
                    width={isVerySmall ? 25 : 30}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.9)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}
                  />
                  <Bar dataKey="deposits" fill="#3B82F6" name="Deposits %" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="loans" fill="#10B981" name="Loans %" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">System Alerts</h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs">All Normal</span>
              </div>
            </div>
            <div className="space-y-1.5">
              {alertItems.map((alert) => (
                <div
                  key={alert.id}
                  className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-start space-x-2"
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                    alert.type === 'warning' ? 'bg-yellow-500' :
                    alert.type === 'success' ? 'bg-green-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs truncate">{alert.message}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only footer info */}
        {isMobile && (
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Last updated: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        )}
      </main>

      {/* Responsive CSS */}
      <style jsx global>{`
        /* Base animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        /* Ultra-small screen optimizations (320px and below) */
        @media (max-width: 320px) {
          .text-\[10px\] {
            font-size: 8px !important;
          }
          .text-xs {
            font-size: 9px !important;
          }
          .text-sm {
            font-size: 10px !important;
          }
          .p-2 {
            padding: 0.375rem !important;
          }
          .p-3 {
            padding: 0.5rem !important;
          }
          .gap-3 > * {
            margin-top: 0.375rem;
          }
          .space-x-2 > * + * {
            margin-left: 0.25rem !important;
          }
          .min-w-\[120px\] {
            min-width: 100px !important;
          }
        }
        
        /* Small screens (321px to 375px) */
        @media (min-width: 321px) and (max-width: 375px) {
          .min-w-\[120px\] {
            min-width: 110px !important;
          }
        }
        
        /* Prevent horizontal overflow */
        .overflow-x-hidden {
          overflow-x: hidden;
        }
        
        /* Custom scrollbar for horizontal scroll */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        
        /* Ensure table cells don't break */
        table {
          border-collapse: separate;
          border-spacing: 0;
        }
        
        td, th {
          white-space: nowrap;
        }
        
        /* Better touch targets */
        @media (max-width: 768px) {
          button, [role="button"], select {
            min-height: 36px;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;