import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white min-h-[85vh] flex items-center">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <div className="lg:w-1/2 w-full text-center lg:text-left animate__animated animate__fadeInLeft animate__slow space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 backdrop-blur-md text-blue-200 text-sm font-semibold tracking-wide uppercase mb-2">
              Premium Tech Components
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SOLVER</span>
              <br />
              <span className="text-white">Manufacturing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Every computer part you need is available at Solver. We provide top-tier components to solve all your technical needs at reasonable prices!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center group">
                Get Started
                <FontAwesomeIcon
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                  icon={faArrowRight}
                />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                View Catalog
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full animate__animated animate__fadeInRight animate__slow relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={banner}
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform transition duration-500 hover:scale-[1.02] border border-white/10 bg-gray-900 object-cover"
                alt="Solver Manufacturing Banner"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
