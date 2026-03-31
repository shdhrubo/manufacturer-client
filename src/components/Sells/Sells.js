import React from "react";
import statistics from "../../images/statistics.jpg";
import CustomerReviews from "./CustomerReviews";
import LastYear from "./LastYear";

const Sells = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Performance Metrics</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Our Sales Statistics
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Transparent insights into our operational growth and customer satisfaction.
          </p>
        </div>

        {/* Hero Highlight Block */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 overflow-hidden mb-20 flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-12 group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm relative filter drop-shadow-md">
            <div className="absolute inset-0 bg-blue-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <img src={statistics} className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Statistics graph" />
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-xs mb-6 self-start">
              Growth Unlocked
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Great <span className="text-blue-600">Revenue</span> and Awesome{" "}
              <span className="text-cyan-500">Reviews</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed font-light mb-8">
              We operate with uncompromising standards, driving year-over-year revenue growth while maintaining an exceptional average rating from our partners and clients.
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="flex flex-col gap-12">
          {/* Revenue Chart Container */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-md border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-70 pointer-events-none -mr-20 -mt-20"></div>
             <LastYear />
          </div>

          {/* Reviews Chart Container */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-md border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none -ml-20 -mt-20"></div>
             <CustomerReviews />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sells;
