import React from "react";
import sell from "../../images/sell.jpg";
import integrating from "../../images/integrating.jpg";
import repairing from "../../images/repairing.jpg";
import "./OurService.css";

const OurService = () => {
  const services = [
    {
      title: "Part Selling",
      desc: "We provide over 10,000 premium components at highly competitive market rates.",
      img: sell,
      color: "from-blue-500 to-indigo-600",
      glow: "bg-blue-500",
      delay: "",
    },
    {
      title: "Part Integration",
      desc: "Seamlessly integrate new parts. Our expert technicians ensure absolute compatibility.",
      img: integrating,
      color: "from-cyan-400 to-blue-500",
      glow: "bg-cyan-400",
      delay: "delay-100",
    },
    {
      title: "Part Repairing",
      desc: "Don't replace it, repair it. Our master repair team restores functionality efficiently.",
      img: repairing,
      color: "from-indigo-500 to-purple-600",
      glow: "bg-indigo-500",
      delay: "delay-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
      {services.map((service, index) => (
        <div 
          key={index} 
          className={`group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 ${service.delay}`}
        >
          {/* subtle background glow on hover */}
          <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}></div>
          
          <div className="relative z-10 flex flex-col items-start h-full">
            {/* Image Orb */}
            <div className="relative mb-8">
              {/* Animated glowing ring */}
              <div className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${service.glow}`}></div>
              
              {/* gradient border wrapper */}
              <div className={`p-1 rounded-full bg-gradient-to-br ${service.color} transform group-hover:rotate-12 transition-transform duration-700`}>
                <div className="w-20 h-20 rounded-full bg-white p-1 overflow-hidden relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
              {service.title}
            </h3>
            
            <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
              {service.desc}
            </p>

            {/* Action button */}
            <div className="mt-auto flex items-center mt-4 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="ml-4 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Explore
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurService;
