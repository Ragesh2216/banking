import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    accountType: "",
    email: "",
    phone: "",
    inquiryType: "",
    amount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        accountType: "",
        email: "",
        phone: "",
        inquiryType: "",
        amount: "",
        message: ""
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center animate-success-pop border border-blue-200">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Banking Inquiry Submitted!
            </h2>
            <p className="text-gray-600 mb-8 text-lg animate-fade-in-up delay-200">
              Thank you for contacting TrustBank. One of our financial advisors will review your inquiry 
              and get back to you within 24 hours with personalized banking solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setTimeout(() => {
                    const formSection = document.querySelector('form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-md"
              >
                Submit Another Inquiry
              </button>
              <Link
                to="/"
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#2563EB', '#1D4ED8', '#3B82F6', '#0EA5E9', '#1E40AF', '#1E3A8A'][i % 6],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}

        {/* Animated Gradients */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
            Contact TrustBank
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
            Have questions about our banking services? Our financial experts are ready to help you with personalized solutions.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-200 rounded-2xl shadow-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-left border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Banking Support
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    bg: "bg-blue-100",
                    title: "Customer Support",
                    content: "support@trustbank.com",
                    link: "mailto:support@trustbank.com",
                    color: "text-blue-700",
                    className: "text-xs"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-blue-200 to-blue-300",
                    title: "24/7 Helpline",
                    content: "1-800-TRUST-BNK",
                    link: "tel:+18008787826",
                    color: "text-blue-800 hover:text-blue-900"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-blue-300 to-blue-400",
                    title: "Headquarters",
                    content: "Financial District, New York, NY 10005",
                    link: null,
                    color: "text-gray-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-amber-100 to-yellow-100",
                    title: "Branch Hours",
                    content: "Mon-Fri: 9AM-5PM • Sat: 10AM-2PM",
                    link: null,
                    color: "text-gray-700"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up bg-white/70 backdrop-blur-sm border border-blue-100"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className={`${item.color} transition-colors duration-300`}>
                          {item.content}
                        </a>
                      ) : (
                        <p className={item.color}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Banking */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.698-.833-2.464 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="font-bold">Lost Card or Fraud Alert?</h3>
                </div>
                <p className="text-sm opacity-90">
                  Report immediately:
                  <a href="tel:+18008787826" className="font-bold ml-1 hover:underline">
                    1-800-878-7826
                  </a>
                  <span className="block mt-1 text-xs">Available 24/7 for emergencies</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-right border border-blue-600/30">
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg flex items-center gap-3">
                <span>🏦</span>
                Banking Inquiry Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name *",
                      name: "name",
                      type: "text",
                      placeholder: "Your full name"
                    },
                    {
                      label: "Account Type",
                      name: "accountType",
                      type: "text",
                      placeholder: "Current account type (if any)"
                    },
                    {
                      label: "Email Address *",
                      name: "email",
                      type: "email",
                      placeholder: "your.email@domain.com"
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "+1 (555) 123-4567"
                    }
                  ].map((field, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100 + 600}ms` }}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-white mb-2 drop-shadow">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                        placeholder={field.placeholder}
                        required={field.name !== 'phone' && field.name !== 'accountType'}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2 drop-shadow">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="account">Open New Account</option>
                      <option value="loan">Loan Application</option>
                      <option value="mortgage">Mortgage Inquiry</option>
                      <option value="investment">Investment Services</option>
                      <option value="business">Business Banking</option>
                      <option value="credit">Credit Card Application</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                    <label htmlFor="amount" className="block text-sm font-medium text-white mb-2 drop-shadow">
                      Approximate Amount (if applicable)
                    </label>
                    <select
                      name="amount"
                      id="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <option value="">Select amount range</option>
                      <option value="<10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                      <option value="na">Not Applicable</option>
                    </select>
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow">
                    Your Banking Needs *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg resize-vertical"
                    placeholder="Tell us about your financial goals, timeline, and any specific banking requirements..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-white/90">
                    I agree to TrustBank's Privacy Policy and Terms of Service. I understand that sensitive financial information should not be shared via this form.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center animate-fade-in-up shadow-md ${isSubmitting ? 'animate-pulse' : ''
                    }`}
                  style={{ animationDelay: '1200ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Your Inquiry...
                    </>
                  ) : (
                    "Submit Banking Inquiry 💼"
                  )}
                </button>

                <p className="text-sm text-white/80 text-center animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
                  * Required fields. For account security, do not share passwords or sensitive account details via this form.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up border border-blue-600/30" style={{ animationDelay: '1600ms' }}>
            <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center gap-3">
              <span>💡</span>
              Banking FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your response time for banking inquiries?",
                  answer: "We respond to all banking inquiries within 24 hours. Urgent matters like fraud reports are handled immediately 24/7."
                },
                {
                  question: "Do you offer free financial consultations?",
                  answer: "Yes, we provide complimentary financial consultations to help identify the best banking solutions for your goals."
                },
                {
                  question: "What types of accounts do you offer?",
                  answer: "We offer checking, savings, money market, CDs, retirement accounts, business accounts, and specialized banking solutions."
                },
                {
                  question: "Is my money insured with TrustBank?",
                  answer: "Yes, all deposit accounts are FDIC insured up to $250,000 per depositor, per account ownership category."
                },
                {
                  question: "How secure is online banking?",
                  answer: "We use bank-grade 256-bit encryption, multi-factor authentication, and real-time fraud monitoring to protect your accounts."
                },
                {
                  question: "Do you offer international banking services?",
                  answer: "Yes, we provide international wire transfers, foreign currency accounts, and global banking solutions for our customers."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up group hover:bg-white/30"
                  style={{ animationDelay: `${1800 + index * 100}ms` }}
                >
                  <h3 className="font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(-5deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        @keyframes success-pop {
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-success-pop {
          animation: success-pop 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;