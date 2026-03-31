import { faCartPlus, faBoxOpen, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Part = ({ part }) => {
  const { name, img, description, minimum, available, price, _id } = part;
  return (
    <div className="relative group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-60 w-full bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 z-0" 
          src={img} 
          alt={name} 
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            ${price}
          </span>
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{name}</h2>
          
          <div className="space-y-3 mb-6 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0">
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
              <span className="font-medium text-gray-500 w-24">Minimum:</span> 
              <span className="font-bold text-gray-900">{minimum} units</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mr-3 shrink-0">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <span className="font-medium text-gray-500 w-24">Available:</span> 
              <span className="font-bold text-gray-900">{available} units</span>
            </div>
          </div>
        </div>

        <Link to={`/orders/${_id}`} className="mt-auto block">
          <button className="w-full relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 group/btn shadow-md hover:shadow-blue-500/30">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-56 group-hover/btn:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">
              <FontAwesomeIcon icon={faCartPlus} />
              Place Order
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Part;
