import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  School,
  Book,
  TrendingUp,
  Analytics,
  Speed,
  Security,
  AutoGraph,
  CheckCircle,
  Timeline,
  Dashboard,
  ShowChart,
  PlayArrow,
  Storage,
  LocationOn,
  SmartToy,
  VideoLibrary,
  Assignment,
  Quiz,
  Groups,
  EmojiEvents
} from "@mui/icons-material";

const WarehouseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courseFeatures = [
    {
      icon: <VideoLibrary className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Interactive Video Lessons",
      description: "Engaging video content with interactive quizzes and real-time progress tracking",
      color: "from-purple-500 to-indigo-500",
      delay: 0
    },
    {
      icon: <Assignment className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Hands-on Projects",
      description: "Real-world projects and assignments to build practical skills and portfolio",
      color: "from-pink-500 to-rose-500",
      delay: 200
    },
    {
      icon: <Analytics className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Progress Analytics",
      description: "AI-powered learning analytics to track progress and recommend improvements",
      color: "from-blue-500 to-cyan-500",
      delay: 300
    }
  ];

  const learningStats = [
    { number: "95%", label: "Completion Rate", icon: <CheckCircle /> },
    { number: "50K+", label: "Active Learners", icon: <Groups /> },
    { number: "500+", label: "Expert Courses", icon: <Book /> },
    { number: "24/7", label: "Learning Access", icon: <Speed /> }
  ];

  const learningProcess = [
    {
      step: "01",
      title: "Course Enrollment",
      description: "Easy enrollment process with personalized learning path recommendations",
      icon: <School />
    },
    {
      step: "02",
      title: "Interactive Learning",
      description: "Engage with video lessons, quizzes, and hands-on coding exercises",
      icon: <VideoLibrary />
    },
    {
      step: "03",
      title: "Project Work",
      description: "Build real-world projects with expert guidance and peer feedback",
      icon: <Assignment />
    },
    {
      step: "04",
      title: "Skill Assessment",
      description: "Comprehensive assessments to validate your learning and skills",
      icon: <Quiz />
    },
    {
      step: "05",
      title: "Certification",
      description: "Earn industry-recognized certificates and showcase your achievements",
      icon: <EmojiEvents />
    }
  ];

  const benefitsData = [
    {
      title: "Career Advancement",
      description: "85% of learners report career growth including promotions and new job opportunities",
      improvement: "85%",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Skill Mastery",
      description: "Master in-demand skills with project-based learning and expert mentorship",
      improvement: "500+",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Learning Flexibility",
      description: "Learn at your own pace with 24/7 access across all devices and platforms",
      improvement: "24/7",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const courseCategories = [
    {
      title: "Web Development",
      description: "Full-stack development with modern frameworks and technologies",
      courses: "120+",
      icon: <SmartToy />
    },
    {
      title: "Data Science",
      description: "Machine learning, AI, and data analysis with Python and R",
      courses: "80+",
      icon: <Analytics />
    },
    {
      title: "Business & Marketing",
      description: "Digital marketing, entrepreneurship, and business strategy courses",
      courses: "95+",
      icon: <TrendingUp />
    },
    {
      title: "Design & Creative",
      description: "UI/UX design, graphic design, and creative software mastery",
      courses: "65+",
      icon: <Dashboard />
    }
  ];

  // Mobile-friendly course categories display
  const popularCourses = [
    { name: "React Mastery", category: "Web Dev", students: 8500, rating: "4.9", description: "Complete React development" },
    { name: "Python Data Science", category: "Data", students: 7200, rating: "4.8", description: "Data analysis with Python" },
    { name: "Digital Marketing", category: "Business", students: 6800, rating: "4.7", description: "Modern marketing strategies" },
    { name: "UI/UX Design", category: "Design", students: 5400, rating: "4.9", description: "User-centered design principles" },
    { name: "Cloud Computing", category: "Tech", students: 4900, rating: "4.8", description: "AWS and cloud infrastructure" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 pt-16">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-800 text-white py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Simplified Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating Education Icons */}
          {['🎓', '📚', '👨‍🏫', '💻', '🏆'].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              className="absolute text-2xl min-[320px]:text-3xl opacity-20"
              style={{
                left: `${15 + i * 18}%`,
                top: `${30 + (i % 3) * 15}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 min-[320px]:mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Online Learning Excellence
            </h1>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl mb-4 min-[320px]:mb-5 sm:mb-8 text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Transform your career with expert-led courses, hands-on projects, and industry-recognized certifications.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center px-2">
              <Link 
                to="/courses"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl shadow-md w-full min-[320px]:w-auto text-center"
              >
                Explore All Courses
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile-Friendly Course Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-4xl mx-auto mt-6 min-[320px]:mt-7 sm:mt-8 lg:mt-12 px-3 min-[320px]:px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-6 border border-white/20">
            <div className="flex flex-col min-[320px]:flex-row items-center justify-between mb-3 min-[320px]:mb-4 gap-1 min-[320px]:gap-2">
              <div className="text-white font-semibold text-sm min-[320px]:text-base">Popular Courses</div>
              <div className="text-purple-300 text-xs min-[320px]:text-sm">Live Enrollment</div>
            </div>
            
            {/* Mobile-Friendly Course List */}
            <div className="space-y-2 min-[320px]:space-y-3">
              {popularCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between bg-black/20 rounded-lg p-2 min-[320px]:p-3 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-2 min-[320px]:gap-3 flex-1 min-w-0">
                    <div className="w-3 h-3 min-[320px]:w-4 min-[320px]:h-4 rounded-full bg-purple-500 flex-shrink-0"></div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-semibold text-xs min-[320px]:text-sm truncate">{course.name}</div>
                      <div className="text-purple-200 text-xs truncate">{course.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 min-[320px]:gap-2 flex-shrink-0">
                    <div className="text-purple-300 text-xs min-[320px]:text-sm font-bold">{course.students}</div>
                    <div className="text-gray-400 text-xs">students</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Real-time Stats */}
            <div className="grid grid-cols-2 gap-2 min-[320px]:gap-3 mt-3 min-[320px]:mt-4 pt-3 min-[320px]:pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-purple-300 text-lg min-[320px]:text-xl font-bold">50K+</div>
                <div className="text-gray-300 text-xs min-[320px]:text-sm">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-green-300 text-lg min-[320px]:text-xl font-bold">95%</div>
                <div className="text-gray-300 text-xs min-[320px]:text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-8 min-[320px]:h-10 sm:h-12 lg:h-20 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Advanced Learning Features
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Experience cutting-edge learning technology designed for your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-purple-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100"
              >
                <div className={`w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-base min-[320px]:text-lg sm:text-xl font-bold text-gray-900 mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs min-[320px]:text-sm sm:text-base text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 min-[320px]:grid-cols-2 lg:grid-cols-4 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
          >
            {learningStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="text-center p-3 min-[320px]:p-4 sm:p-5 lg:p-6"
              >
                <div className="w-8 h-8 min-[320px]:w-10 min-[320px]:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 min-[320px]:mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium text-xs min-[320px]:text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Benefits Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Learning Benefits
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Achieve significant career growth and skill development with our proven learning approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-12 h-12 min-[320px]:w-16 min-[320px]:h-16 lg:w-20 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-full -mr-6 -mt-6 min-[320px]:-mr-8 min-[320px]:-mt-8 lg:-mr-10 lg:-mt-10 opacity-10`}></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${benefit.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto`}
                >
                  <TrendingUp className="text-lg min-[320px]:text-xl lg:text-2xl" />
                </motion.div>
                
                <h3 className="text-base min-[320px]:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {benefit.title}
                </h3>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="text-xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 min-[320px]:mb-3 lg:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {benefit.improvement}
                </motion.div>
                
                <p className="text-gray-600 text-xs min-[320px]:text-sm sm:text-base text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320px]:mb-4 lg:mb-6 leading-tight">
              Ready to Start Learning?
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl mb-4 min-[320px]:mb-5 lg:mb-8 text-purple-100 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto px-2 leading-relaxed">
              Join thousands of learners who have transformed their careers with our expert-led courses.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center">
              <Link 
                to="/courses"
                className="inline-block bg-white text-gray-900 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl w-full min-[320px]:w-auto text-center"
              >
                Browse All Courses
              </Link>
              <Link 
                to="/contact"
                className="inline-block border border-white min-[320px]:border-2 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full min-[320px]:w-auto text-center"
              >
                Get Learning Advice
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};


export default WarehouseManagement;