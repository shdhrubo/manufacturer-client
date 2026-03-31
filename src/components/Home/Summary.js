import React from "react";
import OurSummary from "./OurSummary";

const Summary = () => {
  return (
    <div className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Impact Tracking</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Our Business Summary
          </p>
        </div>
        <OurSummary></OurSummary>
      </div>
    </div>
  );
};

export default Summary;
