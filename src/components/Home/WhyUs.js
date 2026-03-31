import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import baseUrl from "../../api/baseUrl";

// We use a generic modern banner image if available, or just a nice gradient placeholder for the left column
import defaultImg from "../../images/banner.jpg";

const WhyUs = () => {
  const { data: why, isLoading } = useQuery("why", () =>
    fetch(`${baseUrl}/whyus`).then((res) =>
      res.json(),
    ),
  );

  const [activeItem, setActiveItem] = useState(0);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">
            Why Choose Us
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Solver
            </span>{" "}
            Advantage
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Left Side: Dynamic Sticky Graphic (Displaying the active item's image or a fallback) */}
          <div className="lg:w-5/12 w-full flex-shrink-0 relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10 transition-opacity duration-300"></div>

            {/* We dynamically swap the image based on which item you hover over! */}
            <img
              src={
                why && why[activeItem]?.img ? why[activeItem].img : defaultImg
              }
              alt="Advantage Feature"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out bg-white"
            />

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md tracking-tight">
                {why && why[activeItem]?.title}
              </h3>
              <p className="text-blue-100 font-medium line-clamp-2">
                {why && why[activeItem]?.description}
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Stacked List */}
          <div className="lg:w-7/12 w-full flex flex-col justify-center gap-4">
            {why?.map((w, index) => (
              <div
                key={w._id || index}
                onMouseEnter={() => setActiveItem(index)}
                className={`flex items-center gap-6 p-6 rounded-3xl transition-all duration-300 cursor-pointer border ${
                  activeItem === index
                    ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-blue-100 transform scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-white/60"
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 shadow-sm ${
                    activeItem === index
                      ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                      : "bg-white text-blue-500 border border-gray-100"
                  }`}
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
                </div>

                {/* Content */}
                <div>
                  <h4
                    className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                      activeItem === index ? "text-blue-900" : "text-gray-900"
                    }`}
                  >
                    {w.title}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-2">
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
