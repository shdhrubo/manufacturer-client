import {
  faBuilding,
  faGlobe,
  faHandshake,
  faMoneyBill1Wave,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurSummary = () => {
  const stats = [
    { icon: faUser, value: "31K+", label: "Customers" },
    { icon: faMoneyBill1Wave, value: "120M+", label: "Revenue" },
    { icon: faTools, value: "10+", label: "Tools" },
    { icon: faHandshake, value: "20+", label: "Partners" },
    { icon: faBuilding, value: "12+", label: "Branches" },
    { icon: faGlobe, value: "5+", label: "Worldwide Locations" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-2 group">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30">
            <FontAwesomeIcon
              className="text-3xl text-blue-600 group-hover:text-white transition-colors duration-300"
              icon={stat.icon}
            />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">{stat.value}</h2>
          <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider text-center">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default OurSummary;
