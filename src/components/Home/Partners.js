import React from "react";
import Slider from "react-slick";
import customer1 from "../../images/customer-logo-1.png";
import customer2 from "../../images/customer-logo-2.png";
import customer3 from "../../images/customer-logo-3.png";
import customer4 from "../../images/customer-logo-4.png";
import customer5 from "../../images/customer-logo-5.png";
import customer6 from "../../images/customer-logo-6.png";

const Partners = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Trusted By Industry Leaders</h2>
        </div>
        
        <div className="px-8 md:px-12">
          <Slider {...settings} className="partner-slider">
            {[customer1, customer2, customer3, customer4, customer5, customer6].map((logo, index) => (
              <div key={index} className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center p-4 rounded-xl bg-gray-50/50 hover:bg-white transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 group">
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" 
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
