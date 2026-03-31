import React from "react";
import contact from "../../images/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SendUsEmail = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-100 rounded-full scale-[0.8] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <img 
            src={contact} 
            className="w-full max-w-sm relative z-10 transform group-hover:scale-105 transition-transform duration-700 filter drop-shadow-xl" 
            alt="Contact Support" 
          />
        </div>
      </div>
      
      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
        <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
          Drop us a line
        </h4>
        <p className="text-gray-500 font-light mb-8">
          We usually reply within 24 hours. Let us know how we can help!
        </p>
        
        <form className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
              required
            />
          </div>
          
          <div className="relative">
            <textarea
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-gray-700 placeholder-gray-400 resize-none"
              placeholder="Your message details..."
              rows={4}
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 group"
          >
            Send Message
            <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendUsEmail;
