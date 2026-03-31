import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.jpg";
import team3 from "../../images/team3.jpg";

const Teams = () => {
  const teamMembers = [
    {
      name: "John De",
      role: "CEO",
      image: team3,
      description: "CEO is responsible for managing a company's overall operations and communicating with the board."
    },
    {
      name: "Harry Bekar",
      role: "CTO",
      image: team2,
      description: "Our CTO is the highest technology executive position in company who leads the technology or engineering department."
    },
    {
      name: "Ederson Mcmohon",
      role: "Software Engineer",
      image: team1,
      description: "Our software engineer makes the user experience better and the software more efficient by different technique."
    }
  ];

  return (
    <div className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Meet Our Expert Team Members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group bg-white rounded-3xl p-8 pt-20 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center mt-12 md:mt-0">
              
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 to-cyan-400 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-2">{member.name}</h2>
              <h3 className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-4">{member.role}</h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {member.description}
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-300 shadow-sm">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
