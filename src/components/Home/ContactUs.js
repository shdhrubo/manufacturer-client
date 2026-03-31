import React from "react";
import SendUsEmail from "../Contact/SendUsEmail";

const ContactUs = () => {
  return (
    <div className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Get In Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Contact Us Today
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
          <div className="p-8 md:p-12">
            <SendUsEmail></SendUsEmail>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
