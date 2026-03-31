import { faQuoteLeft, faStar as solidStar, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Review = ({ review }) => {
  const { userName, reviews, ratings, photo } = review;
  const [imgError, setImgError] = useState(false);

  const ratingsIcon = [];
  for (var i = 1; i <= 5; i++) {
    ratingsIcon.push(
      <FontAwesomeIcon 
        key={i} 
        icon={solidStar} 
        className={i <= ratings ? "text-amber-400" : "text-gray-200"}
      />
    );
  }

  // Fallback initial
  const initial = userName ? userName.charAt(0).toUpperCase() : "U";

  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 relative overflow-hidden group">
      
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -mr-16 -mt-16 z-0 group-hover:scale-110 transition-transform duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Quote Icon */}
        <div className="mb-6 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl" />
        </div>
        
        {/* Review Text */}
        <p className="text-gray-600 leading-relaxed font-light mb-8 flex-grow italic">
          "{reviews}"
        </p>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-blue-50 transition-colors duration-300"></div>
        
        {/* User Info & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar handling */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center shrink-0 ring-2 ring-white shadow-sm group-hover:ring-blue-100 transition-all duration-300">
              {photo && !imgError ? (
                <img 
                  className="w-full h-full object-cover" 
                  src={photo} 
                  alt={userName} 
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-blue-600 font-bold text-lg">{initial}</span>
              )}
            </div>
            
            <div>
              <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{userName}</h2>
              <div className="flex gap-1 text-xs mt-1">
                {ratingsIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Review;
