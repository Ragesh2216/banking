import React from "react";
import data from "../data/data";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const AuthorData = data.AuthorData;
  const navigate = useNavigate();
  
  const handleViewProfile = () => {
    navigate('/404');
  };

  return (
    <div className="authors-bg min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="px-4 sm:px-8 lg:px-16 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-800 font-bold mb-4 animate-fade-in">
            Meet Our Authors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-grow-width"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto animate-fade-in delay-300">
            Discover the brilliant minds behind our thought-provoking content and insightful analysis
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {AuthorData &&
            AuthorData.map((item, index) => {
              return (
                <div
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 opacity-0"
                  key={index}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Animated Avatar */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                      <img 
                        src={item.img} 
                        className="relative rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-all duration-500 z-10"
                        alt={item.name}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          📍 {item.location}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1">
                          ✍️ {item.posts} posts
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                        {item.desc}
                      </p>
                      
                      {/* CTA Button - Now navigates to 404 page */}
                      <button 
                        onClick={handleViewProfile}
                        className="mt-4 px-6 py-2 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg"
                      >
                        View Profile →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Expert Authors" },
            { number: "2K+", label: "Articles Published" },
            { number: "1M+", label: "Readers Reached" },
            { number: "15+", label: "Countries Covered" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ 
                animationDelay: `${index * 150 + 500}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes growWidth {
          from { width: 0; opacity: 0; }
          to { width: 6rem; opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-grow-width {
          animation: growWidth 1s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Authors;