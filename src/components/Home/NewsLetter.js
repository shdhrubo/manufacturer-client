import React from "react";
import mail from "../../images/mail2.png";

const NewsLetter = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-12">
            
            <div className="lg:w-1/2 flex items-center gap-8">
              <div className="hidden sm:block w-32 h-32 shrink-0 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/20 transform -rotate-6">
                <img src={mail} alt="Newsletter" className="w-full h-full object-contain filter drop-shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-blue-100 max-w-md leading-relaxed">
                  Get exclusive updates, new product announcements, and technical insights delivered straight to your inbox.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full max-w-md">
              <div className="bg-white p-2 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="flex-grow px-5 py-4 focus:outline-none text-gray-700 bg-transparent placeholder-gray-400 font-medium rounded-xl"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-blue-200 mt-4 text-center lg:text-left opacity-80">
                We respect your privacy. No spam, ever.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
