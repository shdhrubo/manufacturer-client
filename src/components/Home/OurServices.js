import React from "react";
import OurService from "./OurService";

const OurServices = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Core Values</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Services We Provide
          </p>
        </div>
        <OurService></OurService>
      </div>
    </div>
  );
};

export default OurServices;
