import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import banner from "../../images/aboutbanner.jpg";
import story from "../../images/story.jpg";
import vision from "../../images/vision.jpg";
import OurService from "../Home/OurService";
import OurSummary from "../Home/OurSummary";

const About = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Page Header */}
      <div className="pt-24 pb-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">Who We Are</h2>
        <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">SOLVER</span>
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-8 rounded-full"></div>
      </div>

      {/* 2. Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6"></div>
            <img 
              src={story} 
              alt="Our Story" 
              className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl object-cover aspect-[4/3] transform transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h4 className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
              Our Origin
            </h4>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              What Motivated <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              We started with a little dedicated team. Recognizing the lack of transparency and trusting partners in the manufacturing block, we decided to be the change. Our core motivation is to provide clients with a manufacturer they can blindly trust, backed by world-class standards and unflinching integrity.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Our Services (Shared Component) */}
      <div className="py-16 bg-gray-50 border-y border-gray-100 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-center">
            <h4 className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold tracking-widest uppercase text-xs mb-2">
               What We Do
            </h4>
          </div>
          <OurService />
        </div>
      </div>

      {/* 4. Our Business Summary (Shared Component) */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-center">
            <h4 className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-2">
               Our Footprint
            </h4>
          </div>
          <OurSummary />
        </div>
      </div>

      {/* 5. Our Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-cyan-100 rounded-[3rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
            <img 
              src={vision} 
              alt="Our Vision" 
              className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl object-cover aspect-[4/3] transform transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h4 className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4">
              Aiming High
            </h4>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Our Bold <span className="text-cyan-500">Vision</span>
            </h1>
            
            <p className="text-lg text-gray-500 font-light mb-8">
              We are aggressively scaling our operations and maintaining uncompromising standards. Our roadmap for the near future includes:
            </p>

            <ul className="space-y-5">
              {[
                "Make every single client absolutely delighted",
                "Hit 200M+ in recurring global revenue",
                "Build 100+ fully-automated branches",
                "Launch 100+ innovative manufacturing tools"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg font-medium text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 6. Closing Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] flex items-center justify-center group">
          <div className="absolute inset-0 bg-gray-900">
            <img 
              src={banner} 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              alt="Factory Floor" 
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Partner With Us
            </h1>
            <p className="text-xl text-blue-100 font-light mb-8 drop-shadow-md">
              If you are looking for world-class computer manufacturing components, your search ends here.
            </p>
            <button className="px-8 py-4 rounded-full bg-white text-blue-700 font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
