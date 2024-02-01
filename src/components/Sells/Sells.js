import React from "react";

import statistics from "../../images/statistics.jpg";
import CustomerReviews from "./CustomerReviews";
import LastYear from "./LastYear";
const Sells = () => {
  return (
    <>
      <h1 className="text-2xl text-blue-700 font-bold ">Our Sells Staistics</h1>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={statistics} className="max-w-sm  " alt="" />
          <div>
            <h1 className="text-2xl font-bold">
              Great <span className="text-blue-700">Revenue</span> and Awesome{" "}
              <span className="text-blue-700">Reviews</span>
            </h1>
            <p className="py-2">
              We are working with great revenue and getting positives reviews
              from client
            </p>
          </div>
        </div>
      </div>
      <LastYear></LastYear>

      <CustomerReviews></CustomerReviews>
    </>
  );
};

export default Sells;
