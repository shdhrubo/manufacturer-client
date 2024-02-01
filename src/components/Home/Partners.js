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
    // dots: true,

    // infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    // cssEase: "linear",
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl font-bold text-blue-700 mt-24 mb-10">
          {" "}
          Our Partner{" "}
        </h2>
        <Slider {...settings} className="ml-32 mr-10  border-sky-100">
          <div>
            <img src={customer1} alt="" />
          </div>
          <div>
            <img src={customer2} alt="" />
          </div>
          <div>
            <img src={customer3} alt="" />
          </div>
          <div>
            <img src={customer4} alt="" />
          </div>
          <div>
            <img src={customer5} alt="" />
          </div>
          <div>
            <img src={customer6} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
